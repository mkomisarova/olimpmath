import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-16 bg-navy">
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-2xl font-bold text-white">
          Olimpiāžu matemātika
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link to="/teorija" className="text-white transition-opacity hover:opacity-80">
            Teorija
          </Link>
          <Link to="/uzdevumi" className="text-white transition-opacity hover:opacity-80">
            Uzdevumi
          </Link>
          <Link to="/par-mums" className="text-white transition-opacity hover:opacity-80">
            Par mums
          </Link>
        </div>

        <button
          type="button"
          aria-label="Atvērt navigāciju"
          className="rounded-md p-2 text-white md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
