import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { getLoginErrorMessage } from '../utils/firebaseAuthMessages'

const inputClass =
  'w-full rounded-lg border border-sand bg-cream px-4 py-3 outline-none focus:border-teal'

export default function LoginPage() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(email, password)
      navigate('/')
    } catch (err) {
      setError(getLoginErrorMessage(err))
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
          <h1 className="mb-6 text-2xl font-bold text-navy">Ieiet</h1>

          <form onSubmit={handleSubmit}>
            {error ? <p className="mb-4 text-sm text-coral">{error}</p> : null}

            <label className="mb-1 block text-sm font-medium text-navy" htmlFor="login-email">
              E-pasts
            </label>
            <input
              id="login-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`${inputClass} mb-4`}
            />

            <label className="mb-1 block text-sm font-medium text-navy" htmlFor="login-password">
              Parole
            </label>
            <input
              id="login-password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={inputClass}
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-full rounded-lg bg-teal py-3 font-bold text-white transition hover:opacity-90 disabled:opacity-70"
            >
              {loading ? 'Ielādē...' : 'Ieiet'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-navy">
            Nav konta?{' '}
            <Link to="/registreties" className="font-semibold text-teal hover:underline">
              Reģistrēties
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
