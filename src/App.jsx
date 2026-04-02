import { Link, Route, Routes } from 'react-router-dom'
import PageLayout from './components/layout/PageLayout'
import ScrollToTop from './components/layout/ScrollToTop'
import HomePage from './pages/HomePage'
import TheoryListPage from './pages/TheoryListPage'
import TopicPage from './pages/TopicPage'

function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-cream px-4">
      <p className="text-8xl font-bold text-navy">404</p>
      <p className="text-xl text-muted">Lapa nav atrasta</p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-lg bg-teal px-6 py-3 text-white transition-opacity hover:opacity-90"
      >
        Doties uz sākumu
      </Link>
    </div>
  )
}

function App() {
  return (
    <PageLayout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teorija" element={<TheoryListPage />} />
        <Route path="/teorija/:slug" element={<TopicPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </PageLayout>
  )
}

export default App
