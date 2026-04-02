import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import LoadingSpinner from '../components/ui/LoadingSpinner'

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
  const { currentUser, userData, loading } = useAuth()

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
        </div>
      </section>
    </div>
  )
}
