import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ExamplesTab from '../components/topic/ExamplesTab'
import ProblemsTab from '../components/topic/ProblemsTab'
import QuizTab from '../components/topic/QuizTab'
import TheoryTab from '../components/topic/TheoryTab'
import ErrorMessage from '../components/ui/ErrorMessage'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import TabBar from '../components/ui/TabBar'
import { useTopic } from '../hooks/useTopic'

const SUBJECT_LABELS = {
  skaitlu_teorija: 'Skaitļu teorija',
  ģeometrija: 'Ģeometrija',
  algebra: 'Algebra',
  kombinatorika: 'Kombinatorika',
  citi: 'Citi',
}

const TABS = [
  { id: 'teorija', label: 'Teorija' },
  { id: 'piem', label: 'Atrisinātie piemēri' },
  { id: 'tests', label: 'Tests' },
  { id: 'uzdevumi', label: 'Uzdevumi' },
]

export default function TopicPage() {
  const navigate = useNavigate()
  const { slug } = useParams()
  const { topic, loading, error } = useTopic(slug)
  const [activeTab, setActiveTab] = useState('teorija')

  if (loading) {
    return (
      <section className="bg-cream py-16">
        <LoadingSpinner />
      </section>
    )
  }

  if (error || !topic) {
    return (
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ErrorMessage message="Tēma nav atrasta" />
        </div>
      </section>
    )
  }

  const subjectLabel = SUBJECT_LABELS[topic.subject] || 'Citi'

  return (
    <div className="bg-cream">
      <section className="bg-navy py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mb-4 flex w-fit cursor-pointer items-center gap-1 border-0 bg-transparent p-0 text-sm text-white/70 transition hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
            Atpakaļ
          </button>
          <span className="mb-4 inline-block rounded-full bg-teal px-3 py-1 text-sm font-semibold text-cream">
            {subjectLabel}
          </span>
          <h1 className="text-4xl font-bold text-cream">{topic.displayName}</h1>
        </div>
      </section>

      <TabBar tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />

      <section className="p-8">
        <div className="mx-auto max-w-4xl">
          {activeTab === 'teorija' && <TheoryTab topic={topic} />}
          {activeTab === 'piem' && <ExamplesTab topic={topic} />}
          {activeTab === 'tests' && <QuizTab topicId={topic.id} />}
          {activeTab === 'uzdevumi' && <ProblemsTab topicId={topic.id} />}
        </div>
      </section>
    </div>
  )
}
