import { Route, Routes } from 'react-router-dom'
import PageLayout from './components/layout/PageLayout'
import HomePage from './pages/HomePage'
import TheoryListPage from './pages/TheoryListPage'
import TopicPage from './pages/TopicPage'

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teorija" element={<TheoryListPage />} />
        <Route path="/teorija/:slug" element={<TopicPage />} />
        <Route
          path="*"
          element={
            <div className="flex min-h-[60vh] items-center justify-center text-center text-2xl font-semibold text-navy">
              404 - Lapa nav atrasta
            </div>
          }
        />
      </Routes>
    </PageLayout>
  )
}

export default App
