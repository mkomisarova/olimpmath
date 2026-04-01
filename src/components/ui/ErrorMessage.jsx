export default function ErrorMessage({ message }) {
  return (
    <div className="mx-auto flex w-full max-w-2xl items-start gap-3 rounded-lg bg-coral/20 p-4 text-navy">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="mt-0.5 h-5 w-5 shrink-0"
        aria-hidden="true"
      >
        <path d="M12 3 2.5 20h19L12 3z" />
        <line x1="12" y1="9" x2="12" y2="14" />
        <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
      </svg>
      <p className="text-sm">{message}</p>
    </div>
  )
}
