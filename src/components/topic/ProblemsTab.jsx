import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { getTopicProblems } from '../../firebase/content'
import { useAuth } from '../../contexts/AuthContext'
import { useProgress } from '../../hooks/useProgress'
import MathContent from '../ui/MathContent'
import LoadingSpinner from '../ui/LoadingSpinner'

export default function ProblemsTab({ topicId }) {
  const { userData } = useAuth()
  const { markProblemSolved, isLoggedIn } = useProgress()
  const [problems, setProblems] = useState([])
  const [loading, setLoading] = useState(true)
  const [openSolutions, setOpenSolutions] = useState({})
  const [solvedIds, setSolvedIds] = useState(new Set())
  const [guestToastVisible, setGuestToastVisible] = useState(false)
  const guestToastShownRef = useRef(false)

  const solvedCount = useMemo(() => {
    return problems.filter((problem) => solvedIds.has(problem.id)).length
  }, [problems, solvedIds])

  useEffect(() => {
    let isMounted = true

    async function fetchProblems() {
      setLoading(true)
      try {
        const data = await getTopicProblems(topicId)
        const sorted = [...data].sort((a, b) => {
          const gradesA = Array.isArray(a.grades) && a.grades.length > 0 ? a.grades : []
          const gradesB = Array.isArray(b.grades) && b.grades.length > 0 ? b.grades : []
          const minA = gradesA.length ? Math.min(...gradesA) : 999
          const minB = gradesB.length ? Math.min(...gradesB) : 999
          if (minA !== minB) return minA - minB
          const dA = Number(a.difficulty) || 0
          const dB = Number(b.difficulty) || 0
          return dA - dB
        })
        if (isMounted) {
          setProblems(sorted)
          setOpenSolutions({})
          setSolvedIds(new Set())
          guestToastShownRef.current = false
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

  useEffect(() => {
    if (loading || problems.length === 0) return
    const fromServer = userData?.progress?.problemsSolved ?? []
    const validIds = new Set(problems.map((p) => p.id).filter(Boolean))
    setSolvedIds((prev) => {
      const next = new Set(prev)
      fromServer.forEach((id) => {
        if (validIds.has(id)) next.add(id)
      })
      return next
    })
  }, [loading, problems, userData])

  useEffect(() => {
    if (!guestToastVisible) return
    const id = window.setTimeout(() => setGuestToastVisible(false), 4000)
    return () => window.clearTimeout(id)
  }, [guestToastVisible])

  if (loading) {
    return <LoadingSpinner />
  }

  if (problems.length === 0) {
    return (
      <div className="py-12 text-center text-muted">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="mx-auto mb-3 h-8 w-8"
          aria-hidden="true"
        >
          <path d="M7 3h10M7 21h10M8 3v4a4 4 0 0 0 1.3 2.9L12 12l2.7-2.1A4 4 0 0 0 16 7V3M8 21v-4a4 4 0 0 1 1.3-2.9L12 12l2.7 2.1A4 4 0 0 1 16 17v4" />
        </svg>
        <p>Uzdevumi drīzumā tiks pievienoti</p>
      </div>
    )
  }

  const formatGrades = (grades) => {
    if (!Array.isArray(grades) || grades.length === 0) {
      return 'Nav norādīts'
    }

    const sorted = [...grades].sort((a, b) => a - b)
    const first = sorted[0]
    const last = sorted[sorted.length - 1]

    return first === last ? `${first}. kl.` : `${first}.–${last}. kl.`
  }

  return (
    <div>
      {guestToastVisible ? (
        <div className="fixed bottom-4 right-4 z-50 max-w-xs rounded-xl bg-navy p-4 text-white shadow-lg">
          <p className="text-sm">Izveido kontu, lai saglabātu progresu!</p>
          <Link to="/registreties" className="mt-2 inline-block text-sm font-semibold text-teal hover:underline">
            Reģistrēties
          </Link>
        </div>
      ) : null}

      <div className="mb-6 rounded-xl bg-sand p-4">
        <p className="mb-3 text-sm font-semibold text-navy">
          Atrisināti: {solvedCount} / {problems.length} uzdevumi
        </p>
        <div className="h-2 w-full rounded-full bg-muted/30">
          <div
            className="h-2 rounded-full bg-sage transition-all duration-300"
            style={{ width: `${(solvedCount / problems.length) * 100}%` }}
          />
        </div>
      </div>

      {problems.map((problem, index) => {
        const difficulty = Math.max(1, Math.min(5, Number(problem.difficulty) || 1))
        const isSolved = solvedIds.has(problem.id)
        const hasSolution = Boolean(problem.solution && problem.solution.trim())
        const isOpen = Boolean(openSolutions[problem.id])

        return (
          <article key={problem.id || index} className="mb-4 rounded-xl bg-sand p-6 shadow-sm">
            <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
              <p className="text-lg font-bold text-navy">Uzdevums {index + 1}</p>

              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-teal px-2 py-1 text-xs text-white">
                  {formatGrades(problem.grades)}
                </span>

                <div className="flex items-center gap-1" aria-label={`Grūtība: ${difficulty} no 5`}>
                  {Array.from({ length: 5 }).map((_, dotIndex) => {
                    const isFilled = dotIndex < difficulty
                    return (
                      <svg
                        key={dotIndex}
                        viewBox="0 0 12 12"
                        className={isFilled ? 'h-3 w-3 text-teal' : 'h-3 w-3 text-muted'}
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <circle cx="6" cy="6" r="5" />
                      </svg>
                    )
                  })}
                </div>

                {problem.source && (
                  <span className="rounded-full bg-amber-100 px-2 py-1 text-xs text-navy">
                    {problem.source}
                  </span>
                )}
              </div>
            </div>

            <MathContent content={problem.problem || problem.text} />

            {problem.imageUrl && (
              <img
                src={problem.imageUrl}
                alt={`Uzdevuma ${index + 1} ilustrācija`}
                className="my-4 w-full max-w-md rounded-lg"
              />
            )}

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              {hasSolution ? (
                <button
                  type="button"
                  onClick={() =>
                    setOpenSolutions((prev) => ({
                      ...prev,
                      [problem.id]: !prev[problem.id],
                    }))
                  }
                  className="rounded-lg border border-teal px-4 py-2 text-sm text-teal transition hover:bg-teal hover:text-cream"
                >
                  {isOpen ? 'Paslēpt atrisinājumu' : 'Rādīt atrisinājumu'}
                </button>
              ) : (
                <div />
              )}

              <div className="text-right">
                <button
                  type="button"
                  onClick={() => {
                    setSolvedIds((prev) => {
                      const next = new Set(prev)
                      const wasSolved = next.has(problem.id)
                      if (wasSolved) {
                        next.delete(problem.id)
                      } else {
                        next.add(problem.id)
                        if (isLoggedIn) {
                          markProblemSolved(problem.id)
                        } else if (!guestToastShownRef.current) {
                          guestToastShownRef.current = true
                          setGuestToastVisible(true)
                        }
                      }
                      return next
                    })
                  }}
                  className={[
                    'rounded-lg px-4 py-2 text-sm transition',
                    isSolved
                      ? 'bg-sage text-cream'
                      : 'border border-sage text-sage hover:bg-sage hover:text-cream',
                  ].join(' ')}
                >
                  Atrisināju ✓
                </button>
                <p
                  className={[
                    'mt-1 text-xs text-sage transition-opacity duration-500',
                    isSolved ? 'opacity-100' : 'opacity-0',
                  ].join(' ')}
                >
                  Labi izdarīts! 🎉
                </p>
              </div>
            </div>

            {hasSolution && (
              <div
                className={[
                  'overflow-hidden transition-all duration-300',
                  isOpen ? 'mt-3 max-h-[1200px]' : 'max-h-0',
                ].join(' ')}
              >
                <div className="rounded-lg border-l-4 border-sage bg-amber-50 p-4">
                  <MathContent content={problem.solution} />
                </div>
              </div>
            )}
          </article>
        )
      })}
    </div>
  )
}
