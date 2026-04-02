const baseInputClass =
  'w-full rounded-lg border border-sand bg-cream px-4 py-3 pr-10 outline-none focus:border-teal'

function EyeOpenIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  )
}

function EyeClosedIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

/**
 * Password field with visibility toggle. Parent owns `showPassword` state per field.
 */
export default function PasswordInputWithToggle({
  id,
  value,
  onChange,
  autoComplete,
  showPassword,
  onToggle,
  className = '',
  required = true,
  'aria-label': ariaLabel = 'Rādīt vai paslēpt paroli',
}) {
  return (
    <div className={`relative ${className}`}>
      <input
        id={id}
        type={showPassword ? 'text' : 'password'}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        required={required}
        className={baseInputClass}
      />
      <button
        type="button"
        onClick={onToggle}
        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer border-0 bg-transparent p-1 text-muted transition hover:text-navy"
        aria-label={ariaLabel}
      >
        {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
      </button>
    </div>
  )
}
