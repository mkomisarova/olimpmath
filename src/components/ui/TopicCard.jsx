import { Link } from 'react-router-dom'

const SUBJECT_LABELS = {
  skaitlu_teorija: 'Skaitļu teorija',
  ģeometrija: 'Ģeometrija',
  algebra: 'Algebra',
  kombinatorika: 'Kombinatorika',
  citi: 'Citi',
}

export default function TopicCard({ displayName, subject, slug, order }) {
  const subjectLabel = SUBJECT_LABELS[subject] || 'Citi'

  return (
    <Link
      to={`/teorija/${slug}`}
      className="flex h-full cursor-pointer flex-col rounded-xl bg-sand p-5 shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md"
      data-order={order}
    >
      <div className="mb-4 flex justify-end">
        <span className="rounded-full bg-teal px-3 py-1 text-xs font-medium text-cream">
          {subjectLabel}
        </span>
      </div>

      <h3 className="mb-6 text-xl font-bold text-navy">{displayName}</h3>
    </Link>
  )
}
