import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/teorija', label: 'Teorija' },
  { to: '/uzdevumi', label: 'Uzdevumi' },
  { to: '/par-mums', label: 'Par mums' },
]

function linkIsActive(pathname, to) {
  return pathname === to || pathname.startsWith(`${to}/`)
}

export default function Navbar() {
  const location = useLocation()
  const pathname = location.pathname
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    function handleMouseDown(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleMouseDown)
    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])

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
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label="Navigācijas izvēlne"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-6 w-6 shrink-0 flex-col items-center justify-center rounded-md text-white transition-all duration-200 md:hidden"
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
      </div>

      <div
        className={`overflow-hidden bg-navy transition-all duration-300 ease-in-out md:hidden ${
          menuOpen ? 'max-h-64' : 'max-h-0'
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
    </nav>
  )
}
