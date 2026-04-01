import { useState } from 'react'
import MathContent from '../ui/MathContent'

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
    return <p className="py-8 text-center text-muted">Atrisināti piemēri drīzumā būs pieejami</p>
  }

  return (
    <div className="space-y-6">
      {examples.map((example, index) => {
        const exampleId = example.id || `example-${index}`
        const isOpen = Boolean(openSolutions[exampleId])

        return (
          <article key={exampleId} className="rounded-xl bg-sand p-6">
            <p className="mb-3 text-sm font-semibold text-teal">Piemērs {index + 1}</p>
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
