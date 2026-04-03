import { useEffect, useMemo, useState } from 'react'
import MathContent from '../ui/MathContent'

const topicGrades = {
  dalamiba: [5, 6, 7, 8],
  kongruences: [9, 10, 11, 12],
  'vienādojumi-veselos-skaitļos': [5, 6, 7, 8, 9, 10, 11, 12],
  pirmrezinataji: [5, 6, 7, 8, 9, 10, 11, 12],
  dirichlet: [7, 8, 9, 10, 11, 12],
  virknes: [9, 10, 11, 12],
  skaitlapieraksts: [5, 6, 7, 8, 9],
  'induktivi-spriedumi': [5, 6, 7, 8, 9],
  'matematiskas-indukcijas-metode': [10, 11, 12],
  'piemers-pretpiemers': [5, 6, 7, 8, 9],
  polinomi: [10, 11, 12],
  'nevienadibu-pieradisana': [9, 10, 11, 12],
  'videjais-aritmetiskais-geometriskais': [9, 10, 11, 12],
  'kvadrata-atdalisana': [9, 10, 11, 12],
  'invariantu-metode': [5, 6, 7, 8, 9, 10, 11, 12],
}

const exampleGradeOverrides = {
  pirmrezinataji: {
    ex1: [5, 6, 7],
    ex2: [5, 6, 7],
    ex3: [5, 6, 7],
    ex4: [5, 6, 7],
    ex5: [5, 6, 7],
    ex6: [5, 6, 7],
    ex7: [5, 6, 7],
    ex8: [8, 9],
    ex9: [8, 9],
    ex10: [8, 9],
    ex11: [8, 9],
    ex12: [9],
    ex13: [9],
    ex14: [9],
    ex15: [9],
    ex16: [9],
    ex17: [10, 11, 12],
    ex18: [10, 11, 12],
    ex19: [10, 11, 12],
    ex20: [10, 11, 12],
    ex21: [10, 11, 12],
    ex22: [10, 11, 12],
    ex23: [10, 11, 12],
    ex24: [10, 11, 12],
  },
  virknes: {
    ex10: [5, 6, 7, 8, 9],
    ex11: [5, 6, 7, 8],
    ex12: [5, 6, 7, 8],
  },
  dirichlet: {
    ex1: [7, 8, 9],
    ex2: [7, 8, 9],
    ex3: [7, 8, 9],
    ex4: [7, 8, 9],
    ex5: [7, 8, 9],
    ex6: [7, 8, 9],
    ex7: [7, 8, 9],
    ex8: [7, 8, 9],
    ex9: [7, 8, 9],
    ex10: [7, 8, 9],
    ex11: [8, 9, 10, 11, 12],
    ex12: [9, 10, 11, 12],
    ex13: [9, 10, 11, 12],
    ex14: [9, 10, 11, 12],
  },
  'invariantu-metode': {
    ex1: [5, 6, 7, 8],
    ex2: [5, 6, 7, 8],
    ex3: [5, 6, 7, 8],
    ex4: [8, 9],
    ex5: [8, 9],
    ex6: [8, 9],
    ex7: [8, 9],
    ex8: [8, 9],
    ex9: [9, 10, 11, 12],
    ex10: [9, 10, 11, 12],
    ex11: [5, 6, 7, 8],
    ex12: [5, 6, 7, 8],
    ex13: [5, 6, 7, 8],
    ex14: [5, 6, 7, 8],
    ex15: [9, 10, 11, 12],
    ex16: [9, 10, 11, 12],
    ex17: [9, 10, 11, 12],
    ex18: [9, 10, 11, 12],
    ex19: [9, 10, 11, 12],
    ex20: [9, 10, 11, 12],
    ex21: [9, 10, 11, 12],
    ex22: [9, 10, 11, 12],
  },
  'vienādojumi-veselos-skaitļos': {
    ex1: [5, 6, 7, 8],
    ex2: [5, 6, 7, 8],
    ex3: [5, 6, 7, 8],
    ex4: [5, 6, 7, 8],
    ex5: [5, 6, 7, 8],
    ex6: [9, 10, 11, 12],
    ex7: [9, 10, 11, 12],
    ex8: [9, 10, 11, 12],
    ex9: [9, 10, 11, 12],
    ex10: [9, 10, 11, 12],
    ex11: [9, 10, 11, 12],
  },
}

export function getTopicGrades(topicId) {
  if (!topicId) return []
  return topicGrades[topicId] ?? []
}

export function getGradesForExample(topicId, exampleId, example) {
  if (Array.isArray(example?.grades) && example.grades.length > 0) {
    return example.grades
  }
  const override = exampleGradeOverrides[topicId]?.[exampleId]
  if (override) return override
  return getTopicGrades(topicId)
}

/** Latvian school grade label: "5. kl.", "10.–12. kl.", etc. Uses en dash in ranges. */
export function formatGradeRange(grades) {
  if (!grades?.length) return ''
  const sorted = [...grades].sort((a, b) => a - b)
  const first = sorted[0]
  const last = sorted[sorted.length - 1]
  const dash = '\u2013'
  return first === last ? `${first}. kl.` : `${first}.${dash}${last}. kl.`
}

export default function ExamplesTab({ topic, onAllRead }) {
  const [openSolutions, setOpenSolutions] = useState({})
  const [readExamples, setReadExamples] = useState(() => new Set())
  const rawExamples = topic?.solvedExamples || []
  const topicId = topic?.id

  const examples = useMemo(() => {
    return [...rawExamples]
      .map((ex, idx) => ({ ex, idx }))
      .sort((A, B) => {
        const ida = A.ex.id || `example-${A.idx}`
        const idb = B.ex.id || `example-${B.idx}`
        const ga = getGradesForExample(topicId, ida, A.ex)
        const gb = getGradesForExample(topicId, idb, B.ex)
        const minA = ga.length ? Math.min(...ga) : 999
        const minB = gb.length ? Math.min(...gb) : 999
        if (minA !== minB) return minA - minB
        return A.idx - B.idx
      })
      .map(({ ex }) => ex)
  }, [rawExamples, topicId])

  useEffect(() => {
    setReadExamples(new Set())
    setOpenSolutions({})
  }, [topicId])

  useEffect(() => {
    if (!onAllRead) return
    const total = examples.length
    if (total === 0) {
      onAllRead(false)
      return
    }
    onAllRead(readExamples.size === total)
  }, [readExamples, examples.length, onAllRead])

  const toggleSolution = (exampleId) => {
    setOpenSolutions((prev) => {
      const nextOpen = !prev[exampleId]
      if (nextOpen) {
        setReadExamples((rs) => new Set(rs).add(exampleId))
      }
      return { ...prev, [exampleId]: nextOpen }
    })
  }

  if (examples.length === 0) {
    return (
      <p className="py-8 text-center text-muted">Atrisinātie piemēri drīzumā būs pieejami</p>
    )
  }

  const total = examples.length
  const readCount = readExamples.size
  const allRead = total > 0 && readCount === total

  return (
    <div className="space-y-6">
      {examples.map((example, index) => {
        const exampleId = example.id || `example-${index}`
        const isOpen = Boolean(openSolutions[exampleId])
        const grades = example.id ? getGradesForExample(topicId, example.id, example) : getTopicGrades(topicId)
        const gradeLabel = formatGradeRange(grades)

        return (
          <article key={exampleId} className="rounded-xl bg-sand p-6">
            <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
              <p className="text-sm font-semibold text-teal">Piemērs {index + 1}</p>
              {gradeLabel ? (
                <span className="rounded-full bg-teal px-2 py-1 text-xs text-white">{gradeLabel}</span>
              ) : null}
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

      {total > 0 ? (
        <div className="mt-8 space-y-2 border-t border-sand pt-6">
          <p className="text-sm text-muted">
            Izlasīts: {readCount} / {total} piemēri
          </p>
          <div className="h-2 w-full rounded-full bg-sand">
            <div
              className="h-2 rounded-full bg-sage transition-all duration-300"
              style={{ width: `${(readCount / total) * 100}%` }}
            />
          </div>
          {allRead ? (
            <p className="text-sm font-medium text-sage">✓ Visi piemēri izlasīti!</p>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
