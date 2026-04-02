import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import PasswordInputWithToggle from '../components/ui/PasswordInputWithToggle'
import { getRegisterErrorMessage } from '../utils/firebaseAuthMessages'

const inputClass =
  'w-full rounded-lg border border-sand bg-cream px-4 py-3 outline-none focus:border-teal'

export default function RegisterPage() {
  const navigate = useNavigate()
  const { register } = useAuth()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmError, setConfirmError] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function validate() {
    let ok = true
    setUsernameError('')
    setPasswordError('')
    setConfirmError('')

    if (username.trim().length < 3) {
      setUsernameError('Lietotājvārdam jābūt vismaz 3 rakstzīmēm')
      ok = false
    }
    if (password.length < 6) {
      setPasswordError('Parolei jābūt vismaz 6 rakstzīmēm')
      ok = false
    }
    if (password !== confirmPassword) {
      setConfirmError('Paroles nesakrīt')
      ok = false
    }
    return ok
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (!validate()) return

    setLoading(true)
    try {
      await register(username.trim(), email, password)
      navigate('/')
    } catch (err) {
      setError(getRegisterErrorMessage(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-cream px-4 pb-16">
      <div className="mx-auto max-w-md pt-8">
        <Link to="/" className="inline-block text-sm font-medium text-navy hover:underline">
          ← Olimpiādes matemātika
        </Link>

        <div className="mt-20 rounded-2xl bg-sand p-8 shadow-lg">
          <h1 className="mb-6 text-2xl font-bold text-navy">Izveidot kontu</h1>

          <form onSubmit={handleSubmit}>
            {error ? <p className="mb-4 text-sm text-coral">{error}</p> : null}

            <label className="mb-1 block text-sm font-medium text-navy" htmlFor="reg-username">
              Lietotājvārds
            </label>
            <input
              id="reg-username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className={`${inputClass} mb-1`}
            />
            <p className="mb-3 text-xs text-muted">Tiks rādīts citiem lietotājiem</p>
            {usernameError ? <p className="mb-3 text-sm text-coral">{usernameError}</p> : null}

            <label className="mb-1 block text-sm font-medium text-navy" htmlFor="reg-email">
              E-pasts
            </label>
            <input
              id="reg-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`${inputClass} mb-4`}
            />

            <label className="mb-1 block text-sm font-medium text-navy" htmlFor="reg-password">
              Parole
            </label>
            <PasswordInputWithToggle
              id="reg-password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              showPassword={showPassword}
              onToggle={() => setShowPassword((s) => !s)}
              className="mb-1"
            />
            {passwordError ? <p className="mb-3 text-sm text-coral">{passwordError}</p> : null}

            <label className="mb-1 block text-sm font-medium text-navy" htmlFor="reg-confirm">
              Apstiprini paroli
            </label>
            <PasswordInputWithToggle
              id="reg-confirm"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              showPassword={showConfirmPassword}
              onToggle={() => setShowConfirmPassword((s) => !s)}
              className="mb-1"
            />
            {confirmError ? <p className="mb-3 text-sm text-coral">{confirmError}</p> : null}

            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-full rounded-lg bg-teal py-3 font-bold text-white transition hover:opacity-90 disabled:opacity-70"
            >
              {loading ? 'Ielādē...' : 'Reģistrēties'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-navy">
            Jau ir konts?{' '}
            <Link to="/ieiet" className="font-semibold text-teal hover:underline">
              Ieiet
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
