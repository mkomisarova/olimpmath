import { useEffect, useMemo, useState } from 'react'
import { getTopicQuiz } from '../../firebase/content'
import MathContent from '../ui/MathContent'
import LoadingSpinner from '../ui/LoadingSpinner'

export default function QuizTab({ topicId }) {
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})

  useEffect(() => {
    let isMounted = true

    async function fetchQuiz() {
      setLoading(true)
      try {
        const data = await getTopicQuiz(topicId)
        if (isMounted) {
          setQuestions(data)
          setCurrentIndex(0)
          setSelectedAnswers({})
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

  const currentQuestion = questions[currentIndex]
  const selectedOption = selectedAnswers[currentIndex]
  const isComplete = questions.length > 0 && currentIndex >= questions.length

  const score = useMemo(
    () =>
      questions.reduce((total, question, idx) => {
        return total + (selectedAnswers[idx] === question.correct ? 1 : 0)
      }, 0),
    [questions, selectedAnswers],
  )

  if (loading) {
    return <LoadingSpinner />
  }

  if (questions.length === 0) {
    return <p className="py-8 text-center text-muted">Viktorīna drīzumā būs pieejama</p>
  }

  if (isComplete) {
    return (
      <div className="rounded-xl bg-sand p-8 text-center">
        <p className="mb-6 text-3xl font-bold text-navy">
          Rezultāts: {score} / {questions.length}
        </p>
        <button
          type="button"
          onClick={() => {
            setCurrentIndex(0)
            setSelectedAnswers({})
          }}
          className="rounded-full bg-teal px-6 py-3 font-semibold text-cream transition-opacity hover:opacity-90"
        >
          Sākt no jauna
        </button>
      </div>
    )
  }

  return (
    <div className="rounded-xl bg-sand p-6">
      <p className="mb-4 text-sm font-semibold text-muted">
        Jautājums {currentIndex + 1} no {questions.length}
      </p>

      <MathContent content={currentQuestion.question} />

      <div className="mt-6 space-y-3">
        {currentQuestion.options?.map((option, optionIndex) => {
          const hasSelected = selectedOption !== undefined
          const isSelected = selectedOption === optionIndex
          const isCorrect = currentQuestion.correct === optionIndex

          let optionClass = 'border-muted/40 bg-cream text-navy hover:border-teal'
          if (hasSelected && isSelected) {
            optionClass = isCorrect
              ? 'border-sage bg-sage/20 text-navy'
              : 'border-coral bg-coral/20 text-navy'
          }

          return (
            <button
              key={`${option}-${optionIndex}`}
              type="button"
              disabled={hasSelected}
              onClick={() =>
                setSelectedAnswers((prev) => ({
                  ...prev,
                  [currentIndex]: optionIndex,
                }))
              }
              className={`block w-full rounded-lg border px-4 py-3 text-left transition-colors ${optionClass}`}
            >
              {option}
            </button>
          )
        })}
      </div>

      {selectedOption !== undefined && (
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={() => setCurrentIndex((prev) => prev + 1)}
            className="rounded-full bg-teal px-5 py-2 font-semibold text-cream transition-opacity hover:opacity-90"
          >
            Nākamais
          </button>
        </div>
      )}
    </div>
  )
}
