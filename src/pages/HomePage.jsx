import { Link } from 'react-router-dom'
import { useTopics } from '../hooks/useTopics'
import ErrorMessage from '../components/ui/ErrorMessage'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import TopicCard from '../components/ui/TopicCard'

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

  return (
    <>
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-cream md:text-5xl">
            Teorija un prakse matemātikas olimpiādēm
          </h1>
          <p className="mb-8 text-lg text-sand">
            Teorija, uzdevumi un viktorīnas latviešu valodā
          </p>
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
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <TopicCard key={topic.id} {...topic} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
