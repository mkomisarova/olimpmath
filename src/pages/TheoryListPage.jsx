import { useMemo } from 'react'
import ErrorMessage from '../components/ui/ErrorMessage'
import TopicCard from '../components/ui/TopicCard'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import { useTopics } from '../hooks/useTopics'

const SUBJECT_SECTIONS = [
  { key: 'skaitlu_teorija', label: 'Skaitļu teorija' },
  { key: 'ģeometrija', label: 'Ģeometrija' },
  { key: 'algebra', label: 'Algebra' },
  { key: 'kombinatorika', label: 'Kombinatorika' },
  { key: 'citi', label: 'Citi' },
]

export default function TheoryListPage() {
  const { topics, loading, error } = useTopics()

  const groupedTopics = useMemo(() => {
    return topics.reduce((accumulator, topic) => {
      const subjectKey = topic.subject || 'citi'
      if (!accumulator[subjectKey]) {
        accumulator[subjectKey] = []
      }
      accumulator[subjectKey].push(topic)
      return accumulator
    }, {})
  }, [topics])

  if (loading) {
    return (
      <section className="bg-cream py-16">
        <LoadingSpinner />
      </section>
    )
  }

  if (error) {
    return (
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ErrorMessage message={error} />
        </div>
      </section>
    )
  }

  return (
    <div className="bg-cream">
      <section className="bg-sand py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-2 text-4xl font-bold text-navy">Teorijas materiāli</h1>
          <p className="text-muted">Izvēlies tēmu, ko apgūt</p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
          {SUBJECT_SECTIONS.map((section) => {
            const sectionTopics = groupedTopics[section.key] || []
            if (sectionTopics.length === 0) {
              return null
            }

            return (
              <div key={section.key}>
                <h2 className="mb-6 text-2xl font-bold text-teal">{section.label}</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {sectionTopics.map((topic) => (
                    <TopicCard key={topic.id} {...topic} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
