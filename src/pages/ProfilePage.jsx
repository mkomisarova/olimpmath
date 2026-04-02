import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { deleteUser, EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth'
import { useAuth } from '../contexts/AuthContext'
import PasswordInputWithToggle from '../components/ui/PasswordInputWithToggle'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import { db } from '../firebase/config'

const inputClass =
  'w-full rounded-lg border border-sand bg-cream px-4 py-3 outline-none focus:border-teal'

function formatMemberSince(isoOrTimestamp) {
  if (!isoOrTimestamp) return '—'
  const d = new Date(isoOrTimestamp)
  if (Number.isNaN(d.getTime())) return '—'
  return d.toLocaleDateString('lv-LV', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function ProfilePage() {
  const navigate = useNavigate()
  const { currentUser, userData, loading, refreshUserData, logout } = useAuth()

  const [newUsername, setNewUsername] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [usernameSuccess, setUsernameSuccess] = useState(false)
  const [savingUsername, setSavingUsername] = useState(false)

  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [deletePassword, setDeletePassword] = useState('')
  const [showDeletePassword, setShowDeletePassword] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)
  const [deleteError, setDeleteError] = useState('')

  useEffect(() => {
    if (!usernameSuccess) return
    const t = setTimeout(() => setUsernameSuccess(false), 3000)
    return () => clearTimeout(t)
  }, [usernameSuccess])

  async function handleSaveUsername(e) {
    e.preventDefault()
    setUsernameError('')
    const trimmed = newUsername.trim()
    if (trimmed.length < 3) {
      setUsernameError('Lietotājvārdam jābūt vismaz 3 rakstzīmēm')
      return
    }
    setSavingUsername(true)
    try {
      await updateDoc(doc(db, 'users', currentUser.uid), { username: trimmed })
      await refreshUserData()
      setNewUsername('')
      setUsernameSuccess(true)
    } catch {
      setUsernameError('Radās kļūda. Mēģini vēlreiz.')
    } finally {
      setSavingUsername(false)
    }
  }

  function openDeleteModal() {
    setDeletePassword('')
    setDeleteError('')
    setShowDeletePassword(false)
    setShowDeleteModal(true)
  }

  function closeDeleteModal() {
    setShowDeleteModal(false)
    setDeletePassword('')
    setDeleteError('')
  }

  async function handleConfirmDelete() {
    setDeleteError('')
    setDeleteLoading(true)
    try {
      const credential = EmailAuthProvider.credential(currentUser.email, deletePassword)
      await reauthenticateWithCredential(currentUser, credential)
      await deleteDoc(doc(db, 'users', currentUser.uid))
      await deleteUser(currentUser)
      await logout()
      navigate('/')
    } catch (err) {
      if (err?.code === 'auth/wrong-password' || err?.code === 'auth/invalid-credential') {
        setDeleteError('Nepareiza parole')
      } else {
        setDeleteError('Radās kļūda. Mēģini vēlreiz.')
      }
    } finally {
      setDeleteLoading(false)
    }
  }

  if (loading) {
    return (
      <section className="bg-cream py-16">
        <LoadingSpinner />
      </section>
    )
  }

  if (!currentUser) {
    return <Navigate to="/ieiet" replace />
  }

  if (!userData) {
    return (
      <section className="bg-cream py-16">
        <LoadingSpinner />
      </section>
    )
  }

  const profile = userData

  const topicsRead = profile.progress?.topicsRead ?? []
  const quizScores = profile.progress?.quizScores ?? {}
  const problemsSolved = profile.progress?.problemsSolved ?? []

  return (
    <div>
      <section className="bg-navy py-12 text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h1 className="text-3xl font-bold">{profile.username}</h1>
          <p className="mt-2 text-sm text-white/70">
            Dalībnieks kopš {formatMemberSince(profile.createdAt)}
          </p>
        </div>
      </section>

      <section className="bg-cream py-8">
        <div className="mx-auto max-w-2xl px-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-xl bg-sand p-6 text-center shadow-sm">
              <p className="text-3xl font-bold text-teal">{topicsRead.length}</p>
              <p className="mt-1 text-sm text-muted">Izlasītās tēmas</p>
            </div>
            <div className="rounded-xl bg-sand p-6 text-center shadow-sm">
              <p className="text-3xl font-bold text-teal">{Object.keys(quizScores).length}</p>
              <p className="mt-1 text-sm text-muted">Pildītie testi</p>
            </div>
            <div className="rounded-xl bg-sand p-6 text-center shadow-sm">
              <p className="text-3xl font-bold text-teal">{problemsSolved.length}</p>
              <p className="mt-1 text-sm text-muted">Atrisinātie uzdevumi</p>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-sand p-6">
            <h2 className="mb-4 font-semibold text-navy">Mainīt lietotājvārdu</h2>
            <p className="mb-3 text-sm text-muted">Pašreizējais: {profile.username}</p>
            <form onSubmit={handleSaveUsername}>
              <div className="flex gap-3">
                <input
                  type="text"
                  autoComplete="username"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                  className={`${inputClass} min-w-0 flex-1`}
                  placeholder="Jauns lietotājvārds"
                />
                <button
                  type="submit"
                  disabled={savingUsername}
                  className="shrink-0 rounded-lg bg-teal px-6 py-2 text-white transition hover:opacity-90 disabled:opacity-70"
                >
                  {savingUsername ? 'Saglabā...' : 'Saglabāt'}
                </button>
              </div>
              {usernameError ? <p className="mt-2 text-sm text-coral">{usernameError}</p> : null}
              {usernameSuccess ? (
                <p className="mt-2 text-sm text-sage">Lietotājvārds mainīts!</p>
              ) : null}
            </form>
          </div>

          <div className="mt-4 rounded-xl border border-coral/30 bg-sand p-6">
            <h2 className="mb-2 font-semibold text-coral">Dzēst kontu</h2>
            <p className="mb-4 text-sm text-muted">
              Šī darbība ir neatgriezeniska. Visi tavi dati tiks dzēsti.
            </p>
            <button
              type="button"
              onClick={openDeleteModal}
              className="rounded-lg border border-coral px-6 py-2 text-sm text-coral transition hover:bg-coral hover:text-white"
            >
              Dzēst kontu
            </button>
          </div>
        </div>
      </section>

      {showDeleteModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="mx-4 max-w-sm rounded-2xl bg-cream p-8 shadow-xl" role="dialog" aria-modal="true" aria-labelledby="delete-modal-title">
            <h3 id="delete-modal-title" className="mb-3 text-xl font-bold text-navy">
              Vai tiešām dzēst kontu?
            </h3>
            <p className="mb-4 text-sm text-muted">Ievadi savu paroli, lai apstiprinātu:</p>
            <PasswordInputWithToggle
              id="delete-account-password"
              autoComplete="current-password"
              value={deletePassword}
              onChange={(e) => setDeletePassword(e.target.value)}
              showPassword={showDeletePassword}
              onToggle={() => setShowDeletePassword((s) => !s)}
              className=""
            />
            {deleteError ? <p className="mt-3 text-sm text-coral">{deleteError}</p> : null}
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={closeDeleteModal}
                className="flex-1 rounded-lg border border-navy px-6 py-2 text-navy transition hover:bg-navy hover:text-white"
              >
                Atcelt
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                disabled={deleteLoading}
                className="flex-1 rounded-lg bg-coral px-6 py-2 text-white transition hover:opacity-90 disabled:opacity-70"
              >
                {deleteLoading ? 'Dzēš...' : 'Dzēst'}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
