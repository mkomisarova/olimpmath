import { Link } from 'react-router-dom'

const footerLinks = [
  { to: '/teorija', label: 'Teorija' },
  { to: '/par-mums', label: 'Par mums' },
  { to: '/kontakti', label: 'Kontakti' },
]

export default function Footer() {
  return (
    <footer className="bg-navy py-8 text-center text-muted">
      <nav className="mb-4 flex flex-row flex-wrap justify-center gap-6">
        {footerLinks.map(({ to, label }) => (
          <Link key={to} to={to} className="text-sm text-muted transition-colors hover:text-white">
            {label}
          </Link>
        ))}
      </nav>
      <p className="mb-4 text-xs text-muted transition hover:text-white">
        <a
          href="https://nms.lu.lv"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-white"
        >
          Materiāli: NMS Latvia
        </a>
      </p>
      <p className="mb-2 text-sm">Veidots matemātikas olimpiādes entuziastiem Latvijā</p>
      <p className="text-sm">© 2025. Visas tiesības aizsargātas.</p>
    </footer>
  )
}
