import { useState } from 'react'
import MathContent from '../ui/MathContent'

function gradesForExampleIndex(index) {
  if (index <= 2) return [5, 6, 7]
  if (index <= 5) return [7, 8, 9]
  if (index <= 9) return [8, 9, 10]
  return [10, 11, 12]
}

function formatGradeRange(grades) {
  const sorted = [...grades].sort((a, b) => a - b)
  const first = sorted[0]
  const last = sorted[sorted.length - 1]
  return first === last ? `${first}. kl.` : `${first}.–${last}. kl.`
}

export default function ExamplesTab({ topic }) {
  const [openSolutions, setOpenSolutions] = useState({})
  const examples = topic?.solvedExamples || []

  const toggleSolution = (exampleId) => {
    setOpenSolutions((prev) => ({
      ...prev,
      [exampleId]: !prev[exampleId],
    }))
  }

  if (examples.length === 0) {
    return (
      <p className="py-8 text-center text-muted">Atrisinātie piemēri drīzumā būs pieejami</p>
    )
  }

  return (
    <div className="space-y-6">
      {examples.map((example, index) => {
        const exampleId = example.id || `example-${index}`
        const isOpen = Boolean(openSolutions[exampleId])
        const gradeLabel = formatGradeRange(gradesForExampleIndex(index))

        return (
          <article key={exampleId} className="rounded-xl bg-sand p-6">
            <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
              <p className="text-sm font-semibold text-teal">Piemērs {index + 1}</p>
              <span className="rounded-full bg-teal px-2 py-1 text-xs text-white">{gradeLabel}</span>
            </div>
            <MathContent content={example.problem} />

            <button
              type="button"
              onClick={() => toggleSolution(exampleId)}
              className="mt-4 rounded-full bg-navy px-4 py-2 text-sm font-semibold text-cream transition-opacity hover:opacity-90"
            >
              {isOpen ? 'Paslēpt atrisinājumu' : 'Rādīt atrisinājumu'}
            </button>

            {isOpen && (
              <div className="mt-4 border-l-4 border-sage pl-4">
                <MathContent content={example.solution} />
              </div>
            )}
          </article>
        )
      })}
    </div>
  )
}
