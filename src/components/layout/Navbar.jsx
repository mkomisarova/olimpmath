import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const navLinks = [
  { to: '/teorija', label: 'Teorija' },
  { to: '/uzdevumi', label: 'Uzdevumi' },
  { to: '/par-mums', label: 'Par mums' },
]

function linkIsActive(pathname, to) {
  return pathname === to || pathname.startsWith(`${to}/`)
}

function PersonIcon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function MobileAccountIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  )
}

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const pathname = location.pathname
  const { currentUser, userData, logout } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)
  const [accountMenuOpen, setAccountMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const navRef = useRef(null)

  const username = userData?.username ?? currentUser?.email?.split('@')[0] ?? 'Lietotājs'

  useEffect(() => {
    function handleMouseDown(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false)
        setAccountMenuOpen(false)
        setUserMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleMouseDown)
    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])

  async function handleLogout() {
    await logout()
    navigate('/')
    setUserMenuOpen(false)
    setMenuOpen(false)
    setAccountMenuOpen(false)
  }

  function openHamburger() {
    setAccountMenuOpen(false)
    setMenuOpen((open) => !open)
  }

  function openAccountMenu() {
    setMenuOpen(false)
    setAccountMenuOpen((open) => !open)
  }

  return (
    <nav ref={navRef} className="fixed inset-x-0 top-0 z-50 bg-navy">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-2xl font-bold text-white">
          Olimpiāžu matemātika
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map(({ to, label }) => {
            const active = linkIsActive(pathname, to)
            return (
              <Link
                key={to}
                to={to}
                className={
                  active
                    ? 'border-b-2 border-white pb-0.5 text-white transition-colors'
                    : 'text-white/70 transition-colors hover:text-white'
                }
              >
                {label}
              </Link>
            )
          })}

          {!currentUser ? (
            <div className="flex items-center gap-3 pl-2">
              <Link
                to="/ieiet"
                className="rounded-lg border border-white px-4 py-2 text-sm text-white transition hover:bg-white hover:text-navy"
              >
                Ieiet
              </Link>
              <Link
                to="/registreties"
                className="rounded-lg bg-teal px-4 py-2 text-sm text-white transition hover:opacity-90"
              >
                Reģistrēties
              </Link>
            </div>
          ) : (
            <div className="relative pl-2">
              <button
                type="button"
                aria-expanded={userMenuOpen}
                aria-haspopup="true"
                onClick={() => setUserMenuOpen((open) => !open)}
                className="flex cursor-pointer items-center gap-2 text-sm text-white hover:text-white/80"
              >
                <PersonIcon className="shrink-0" />
                <span>{username}</span>
              </button>
              {userMenuOpen ? (
                <div className="absolute right-0 top-full z-50 mt-2 min-w-40 rounded-lg border border-white/20 bg-navy py-2 shadow-lg">
                  <Link
                    to="/profils"
                    className="block px-4 py-2 text-sm text-white hover:bg-white/10"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    Mans profils
                  </Link>
                  <div className="border-t border-white/20" role="separator" />
                  <button
                    type="button"
                    className="w-full px-4 py-2 text-left text-sm text-white hover:bg-white/10"
                    onClick={handleLogout}
                  >
                    Iziet
                  </button>
                </div>
              ) : null}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label="Navigācijas izvēlne"
            onClick={openHamburger}
            className="flex h-6 w-6 shrink-0 flex-col items-center justify-center rounded-md text-white transition-all duration-200"
          >
            <span className="flex h-6 w-6 flex-col justify-center gap-1.5 transition-all duration-200">
              <span
                className={`block h-0.5 w-6 rounded-full bg-white transition-all duration-200 ${
                  menuOpen ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 rounded-full bg-white transition-all duration-200 ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block h-0.5 w-6 rounded-full bg-white transition-all duration-200 ${
                  menuOpen ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>

          <button
            type="button"
            aria-expanded={accountMenuOpen}
            aria-label="Konta izvēlne"
            onClick={openAccountMenu}
            className={[
              'flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-colors',
              currentUser ? 'bg-white/10 hover:bg-white/15' : 'hover:bg-white/10',
            ].join(' ')}
          >
            <MobileAccountIcon />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden bg-navy transition-all duration-300 ease-in-out md:hidden ${
          menuOpen ? 'max-h-[min(85vh,28rem)]' : 'max-h-0'
        }`}
      >
        <div className="flex w-full flex-col border-t border-white/10">
          {navLinks.map(({ to, label }) => {
            const active = linkIsActive(pathname, to)
            return (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={`w-full border-b border-white/10 px-6 py-4 text-base text-white transition-colors hover:bg-white/10 ${
                  active ? 'bg-white/10' : ''
                }`}
              >
                {label}
              </Link>
            )
          })}
        </div>
      </div>

      {accountMenuOpen ? (
        <div className="border-t border-white/10 bg-navy md:hidden">
          {!currentUser ? (
            <div className="w-full">
              <Link
                to="/ieiet"
                className="block w-full border-b border-white/10 px-6 py-4 text-left text-white transition-colors hover:bg-white/10"
                onClick={() => setAccountMenuOpen(false)}
              >
                Ieiet
              </Link>
              <Link
                to="/registreties"
                className="block w-full px-6 py-4 text-left text-teal transition-colors hover:bg-white/10"
                onClick={() => setAccountMenuOpen(false)}
              >
                Reģistrēties
              </Link>
            </div>
          ) : (
            <div className="w-full">
              <p className="border-b border-white/10 px-6 py-3 text-sm text-white/70">Sveiks, {username}!</p>
              <Link
                to="/profils"
                className="block w-full border-b border-white/10 px-6 py-4 text-left text-white transition-colors hover:bg-white/10"
                onClick={() => setAccountMenuOpen(false)}
              >
                Mans profils
              </Link>
              <button
                type="button"
                className="w-full px-6 py-4 text-left text-coral transition-colors hover:bg-white/10"
                onClick={() => {
                  setAccountMenuOpen(false)
                  handleLogout()
                }}
              >
                Iziet
              </button>
            </div>
          )}
        </div>
      ) : null}
    </nav>
  )
}
