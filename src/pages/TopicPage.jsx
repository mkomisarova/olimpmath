import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ExamplesTab from '../components/topic/ExamplesTab'
import ProblemsTab from '../components/topic/ProblemsTab'
import QuizTab from '../components/topic/QuizTab'
import TheoryTab from '../components/topic/TheoryTab'
import ErrorMessage from '../components/ui/ErrorMessage'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import TabBar from '../components/ui/TabBar'
import { useProgress } from '../hooks/useProgress'
import { useTopic } from '../hooks/useTopic'

const SUBJECT_LABELS = {
  skaitlu_teorija: 'Skaitļu teorija',
  geometrija: 'Ģeometrija',
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
  const { markTopicRead, isTopicRead, getQuizScore } = useProgress()
  const theoryMarkedForVisitRef = useRef(false)

  useEffect(() => {
    theoryMarkedForVisitRef.current = false
  }, [topic?.id])

  useEffect(() => {
    if (activeTab !== 'teorija' || !topic?.id) return
    if (theoryMarkedForVisitRef.current) return
    theoryMarkedForVisitRef.current = true
    markTopicRead(topic.id)
  }, [activeTab, topic?.id, markTopicRead])

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

  const quizScore = getQuizScore(topic.id)
  let testsIndicator = null
  if (quizScore) {
    testsIndicator = quizScore.percentage === 100 ? 'done' : 'partial'
  }

  const tabIndicators = {
    teorija: isTopicRead(topic.id) ? 'done' : null,
    tests: testsIndicator,
    piem: null,
    uzdevumi: null,
  }

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

      <TabBar tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} indicators={tabIndicators} />

      <section className="p-8">
        <div className="mx-auto max-w-4xl">
          {activeTab === 'teorija' && <TheoryTab topic={topic} topicId={topic.id} />}
          {activeTab === 'piem' && <ExamplesTab topic={topic} />}
          {activeTab === 'tests' && <QuizTab topicId={topic.id} />}
          {activeTab === 'uzdevumi' && <ProblemsTab topicId={topic.id} />}
        </div>
      </section>
    </div>
  )
}
