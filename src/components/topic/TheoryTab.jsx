import { useProgress } from '../../hooks/useProgress'
import MathContent from '../ui/MathContent'

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-sage"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function TheoryTab({ topic, topicId }) {
  const { isTopicRead } = useProgress()
  const sections = topic?.theory?.sections || []

  return (
    <div className="space-y-8">
      {isTopicRead(topicId) ? (
        <div className="mb-6 flex items-center gap-1 border-b border-sand pb-4 text-sm text-sage">
          <CheckIcon />
          <span>Teorija izlasīta</span>
        </div>
      ) : null}
      {sections.map((section, index) => (
        <section key={section.title || index} className="rounded-xl bg-sand p-6">
          <h2 className="mb-4 text-2xl font-bold text-navy">{section.title}</h2>

          {Array.isArray(section.table) && section.table.length > 0 && (
            <div className="mb-6 overflow-x-auto rounded-lg border border-muted/30">
              <table className="min-w-full border-collapse text-left text-sm text-navy">
                <thead>
                  <tr className="bg-sand">
                    <th className="border-b border-muted/40 px-4 py-3 font-semibold">Pazīme</th>
                    <th className="border-b border-muted/40 px-4 py-3 font-semibold">Piemērs</th>
                  </tr>
                </thead>
                <tbody>
                  {section.table.map((row, rowIndex) => (
                    <tr key={`${row.rule}-${rowIndex}`} className="odd:bg-sand even:bg-cream/70">
                      <td className="border-b border-muted/20 px-4 py-3 align-top">
                        <MathContent content={row.rule} />
                      </td>
                      <td className="border-b border-muted/20 px-4 py-3 align-top">
                        <MathContent content={row.example} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <MathContent content={section.content} />
        </section>
      ))}
    </div>
  )
}
