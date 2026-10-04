/** Decorative gold divider — a small diamond flanked by two fading lines. */
export default function Divider({ className = "" }) {
  return (
    <div className={`divider ${className}`.trim()} aria-hidden="true">
      <span className="divider-line" />
      <svg className="divider-gem" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2.5 15.5 12 12 21.5 8.5 12Z"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        <circle cx="12" cy="12" r="1.7" fill="currentColor" />
      </svg>
      <span className="divider-line" />
    </div>
  );
}
