import { Link } from 'react-router-dom'
import { useTopics } from '../hooks/useTopics'
import ErrorMessage from '../components/ui/ErrorMessage'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import TopicCard from '../components/ui/TopicCard'

const SUBJECT_ORDER = ['skaitlu_teorija', 'algebra', 'geometrija', 'kombinatorika', 'citi']

const SUBJECT_LABELS = {
  skaitlu_teorija: 'Skaitļu teorija',
  algebra: 'Algebra',
  geometrija: 'Ģeometrija',
  kombinatorika: 'Kombinatorika',
  citi: 'Citi',
}

function normalizeSubject(subject) {
  if (!subject) return 'citi'
  if (subject === 'ģeometrija') return 'geometrija'
  return SUBJECT_ORDER.includes(subject) ? subject : 'citi'
}

export default function HomePage() {
  const { topics, loading, error } = useTopics()

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

  const groups = {}
  for (const id of SUBJECT_ORDER) {
    groups[id] = []
  }
  for (const topic of topics) {
    const key = normalizeSubject(topic.subject)
    if (!groups[key]) groups[key] = []
    groups[key].push(topic)
  }

  const nonEmptyGroups = SUBJECT_ORDER.filter((id) => groups[id].length > 0)

  return (
    <>
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-8 text-2xl font-semibold text-sand md:text-3xl">
            Teorija, uzdevumi un testi
          </h1>
          <Link
            to="/teorija"
            className="inline-block rounded-full bg-teal px-8 py-3 font-semibold text-white transition-opacity hover:opacity-90"
          >
            Sākt mācīties
          </Link>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-navy">Tēmas</h2>
          {nonEmptyGroups.map((subjectId, index) => (
            <div key={subjectId}>
              <h3 className={`mb-4 text-2xl font-bold text-navy ${index === 0 ? 'mt-0' : 'mt-10'}`}>
                {SUBJECT_LABELS[subjectId]}
              </h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {groups[subjectId].map((topic) => (
                  <TopicCard key={topic.id} {...topic} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
