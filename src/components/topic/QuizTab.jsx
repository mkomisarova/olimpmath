import { useCallback, useEffect, useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import { getTopicQuiz } from '../../firebase/content'
import MathContent from '../ui/MathContent'
import LoadingSpinner from '../ui/LoadingSpinner'

function InlineOptionMath({ text }) {
  return (
    <span className="inline text-left [&_p]:m-0 [&_p]:inline [&_p]:max-w-none [&_.katex-display]:m-0 [&_.katex-display]:inline [&_.katex]:text-[1em]">
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          p: ({ children }) => (
            <span className="m-0 inline max-w-none text-inherit">{children}</span>
          ),
        }}
      >
        {text || ''}
      </ReactMarkdown>
    </span>
  )
}

export default function QuizTab({ topicId }) {
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true)
  const [answeredQuestions, setAnsweredQuestions] = useState(() => new Map())

  useEffect(() => {
    let isMounted = true

    async function fetchQuiz() {
      setLoading(true)
      try {
        const data = await getTopicQuiz(topicId)
        if (isMounted) {
          const sorted = [...data].sort((a, b) =>
            String(a.id).localeCompare(String(b.id), undefined, { numeric: true }),
          )
          setQuestions(sorted)
          setAnsweredQuestions(new Map())
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    if (topicId) {
      fetchQuiz()
    }

    return () => {
      isMounted = false
    }
  }, [topicId])

  const selectAnswer = useCallback((questionId, optionIndex, correctIndex) => {
    setAnsweredQuestions((prev) => {
      const next = new Map(prev)
      next.set(questionId, {
        selectedIndex: optionIndex,
        isCorrect: optionIndex === correctIndex,
      })
      return next
    })
  }, [])

  const retryQuestion = useCallback((questionId) => {
    setAnsweredQuestions((prev) => {
      const next = new Map(prev)
      next.delete(questionId)
      return next
    })
  }, [])

  const resetQuiz = useCallback(() => {
    setAnsweredQuestions(new Map())
  }, [])

  const correctCount = useMemo(() => {
    let n = 0
    for (const q of questions) {
      const entry = answeredQuestions.get(q.id)
      if (entry?.isCorrect) n += 1
    }
    return n
  }, [questions, answeredQuestions])

  const progressPct =
    questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0

  if (loading) {
    return <LoadingSpinner />
  }

  if (questions.length === 0) {
    return <p className="py-8 text-center text-muted">Viktorīna drīzumā būs pieejama</p>
  }

  return (
    <div className="flex flex-col">
      <div>
        {questions.map((q, qIndex) => {
          const entry = answeredQuestions.get(q.id)
          const answered = entry !== undefined

          return (
            <div
              key={q.id}
              className="mb-6 rounded-xl bg-sand p-6 shadow-sm"
            >
              <p className="mb-2 text-sm font-bold text-teal">
                Jautājums {qIndex + 1}
              </p>
              <div className="mb-4 text-lg text-navy">
                <MathContent content={q.question} />
              </div>

              <div className="space-y-0">
                {q.options?.map((option, optionIndex) => {
                  const isCorrectOption = q.correct === optionIndex
                  const isSelected = entry?.selectedIndex === optionIndex
                  const showCorrectReveal = answered && isCorrectOption
                  const showWrongSelected = answered && isSelected && !entry.isCorrect

                  let btnClass =
                    'flex w-full items-center justify-between gap-3 border px-4 py-3 text-left transition rounded-xl mb-2 '

                  if (!answered) {
                    btnClass +=
                      'border-sand bg-cream text-navy hover:border-teal hover:text-teal'
                  } else if (showCorrectReveal) {
                    btnClass += 'border-sage bg-sage text-white'
                  } else if (showWrongSelected) {
                    btnClass += 'border-coral bg-coral text-white'
                  } else {
                    btnClass += 'pointer-events-none cursor-default border-sand/50 bg-cream/60 text-navy/50'
                  }

                  const showCheckSelectedCorrect = answered && isSelected && entry.isCorrect
                  const showCheckRevealCorrect = answered && showCorrectReveal && !isSelected

                  return (
                    <button
                      key={`${q.id}-${optionIndex}`}
                      type="button"
                      disabled={answered}
                      onClick={() => selectAnswer(q.id, optionIndex, q.correct)}
                      className={btnClass}
                    >
                      <span className="min-w-0 flex-1">
                        <InlineOptionMath text={option} />
                      </span>
                      {showCheckSelectedCorrect && (
                        <span className="shrink-0 text-lg leading-none" aria-hidden>
                          ✓
                        </span>
                      )}
                      {showWrongSelected && (
                        <span className="shrink-0 text-lg leading-none" aria-hidden>
                          ✗
                        </span>
                      )}
                      {showCheckRevealCorrect && (
                        <span className="shrink-0 text-lg leading-none" aria-hidden>
                          ✓
                        </span>
                      )}
                    </button>
                  )
                })}
              </div>

              {answered && (
                <button
                  type="button"
                  onClick={() => retryQuestion(q.id)}
                  className="mt-3 cursor-pointer border-0 bg-transparent p-0 text-sm text-teal underline"
                >
                  Mēģināt vēlreiz
                </button>
              )}
            </div>
          )
        })}
      </div>

      <div className="sticky bottom-4 z-10 mt-8 rounded-xl bg-navy p-6 text-white shadow-md">
        <p className="text-2xl font-bold">
          Rezultāts: {correctCount} / {questions.length}
        </p>
        <div className="mt-4 h-3 w-full rounded-full bg-white/20">
          <div
            className="h-3 rounded-full bg-sage transition-[width] duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <button
          type="button"
          onClick={resetQuiz}
          className="mt-4 rounded-lg bg-teal px-4 py-2 text-white transition-opacity hover:opacity-90"
        >
          Atiestatīt viktorīnu
        </button>
      </div>
    </div>
  )
}
