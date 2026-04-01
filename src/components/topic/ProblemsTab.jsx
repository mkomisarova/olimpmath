import { useEffect, useState } from 'react'
import { getTopicProblems } from '../../firebase/content'
import MathContent from '../ui/MathContent'
import LoadingSpinner from '../ui/LoadingSpinner'

export default function ProblemsTab({ topicId }) {
  const [problems, setProblems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    async function fetchProblems() {
      setLoading(true)
      try {
        const data = await getTopicProblems(topicId)
        if (isMounted) {
          setProblems(data)
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    if (topicId) {
      fetchProblems()
    }

    return () => {
      isMounted = false
    }
  }, [topicId])

  if (loading) {
    return <LoadingSpinner />
  }

  if (problems.length === 0) {
    return <p className="py-8 text-center text-muted">Uzdevumi drīzumā tiks pievienoti</p>
  }

  return (
    <div className="space-y-6">
      {problems.map((problem, index) => {
        const difficulty = Math.max(1, Math.min(5, Number(problem.difficulty) || 1))
        return (
          <article key={problem.id || index} className="rounded-xl bg-sand p-6 shadow-sm">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-semibold text-teal">Uzdevums {index + 1}</p>
              {problem.source && (
                <span className="rounded-full bg-teal/20 px-3 py-1 text-xs font-semibold text-teal">
                  {problem.source}
                </span>
              )}
            </div>

            <MathContent content={problem.problem} />

            <div className="mt-5 flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, dotIndex) => (
                <span
                  key={dotIndex}
                  className={[
                    'h-3 w-3 rounded-full',
                    dotIndex < difficulty ? 'bg-teal' : 'bg-muted/30',
                  ].join(' ')}
                />
              ))}
            </div>
          </article>
        )
      })}
    </div>
  )
}
