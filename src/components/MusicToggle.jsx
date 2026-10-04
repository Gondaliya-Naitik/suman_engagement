/** Floating music play / pause button. */
export default function MusicToggle({ playing, onToggle }) {
  return (
    <button
      type="button"
      className={`music-toggle${playing ? " music-toggle--playing" : ""}`}
      onClick={onToggle}
      aria-label={playing ? "Pause music" : "Play music"}
      title={playing ? "Pause music" : "Play music"}
    >
      {playing ? (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <rect x="6" y="5" width="4" height="14" rx="1.2" />
          <rect x="14" y="5" width="4" height="14" rx="1.2" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
        </svg>
      )}
    </button>
  );
}
