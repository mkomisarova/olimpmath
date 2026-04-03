import { Link, Outlet, Route, Routes } from 'react-router-dom'
import PageLayout from './components/layout/PageLayout'
import ScrollToTop from './components/layout/ScrollToTop'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import RegisterPage from './pages/RegisterPage'
import TheoryListPage from './pages/TheoryListPage'
import ParMusPage from './pages/ParMusPage'
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

function MainLayout() {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/ieiet" element={<LoginPage />} />
        <Route path="/registreties" element={<RegisterPage />} />
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="teorija" element={<TheoryListPage />} />
          <Route path="teorija/:slug" element={<TopicPage />} />
          <Route path="par-mums" element={<ParMusPage />} />
          <Route path="profils" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}
