import { useEffect, useState } from "react";
import { wedding } from "../config";

/** Drafting symbols + code tokens that drift across the blueprint backdrop. */
const MARKS = [
  { text: "</>", kind: "code", x: 9, y: 24, t: 17, d: 0, s: 1.15 },
  { text: "◇", kind: "plan", x: 21, y: 70, t: 21, d: 3, s: 1 },
  { text: "{ }", kind: "code", x: 33, y: 15, t: 19, d: 6, s: 0.9 },
  { text: "∠", kind: "plan", x: 78, y: 26, t: 23, d: 1.5, s: 1.1 },
  { text: "//", kind: "code", x: 88, y: 62, t: 18, d: 4.5, s: 1 },
  { text: "△", kind: "plan", x: 68, y: 82, t: 22, d: 2.5, s: 0.95 },
  { text: "⊕", kind: "plan", x: 48, y: 9, t: 20, d: 7, s: 0.85 },
  { text: "<div>", kind: "code", x: 11, y: 88, t: 24, d: 5, s: 0.9 },
  { text: "°", kind: "plan", x: 92, y: 36, t: 16, d: 8, s: 1.2 },
  { text: "=>", kind: "code", x: 60, y: 91, t: 21, d: 1, s: 0.9 },
];

/**
 * The site plan. Every shape carries pathLength="100" so the inked copy can
 * draw itself in evenly. Rendered twice — faint pencil, then inked over it.
 */
function Plan({ className, heart = false }) {
  return (
    <svg className={className} viewBox="0 0 260 170" fill="none" aria-hidden="true">
      <rect x="10" y="10" width="240" height="150" pathLength="100" strokeWidth="2.4" />
      <path d="M150 10v150" pathLength="100" strokeWidth="1.6" />
      <path d="M10 104h140" pathLength="100" strokeWidth="1.6" />
      <rect x="30" y="28" width="54" height="36" pathLength="100" strokeWidth="1.2" />
      <rect x="170" y="30" width="62" height="46" pathLength="100" strokeWidth="1.2" />
      <path d="M150 62a36 36 0 0 1 36 36" pathLength="100" strokeWidth="1.1" />
      <path d="M34 122h46M120 118h26" pathLength="100" strokeWidth="1.1" />
      <path d="M30 152h92M30 147v10M122 147v10" pathLength="100" strokeWidth="1" />
      <path d="M224 138v-26M224 112l-7 11M224 112l7 11" pathLength="100" strokeWidth="1.1" />
      {heart && (
        <path
          className="gate-heart"
          d="M78 134c-12-8.6-17.4-14.6-17.4-20.8a8.9 8.9 0 0 1 17.4-3.9 8.9 8.9 0 0 1 17.4 3.9c0 6.2-5.4 12.2-17.4 20.8z"
        />
      )}
    </svg>
  );
}

/**
 * How long the sanction sequence plays before the card is handed over:
 * ink draws in (0-2.9s) > pencil fades (1.9s) > monogram pops (2.1s) >
 * heart (2.45s) > stamp lands (3.4-4.4s) > the sheet lifts and the overlay
 * fades (4.5-5.65s). The hero then eases up behind it.
 */
const SEQUENCE_MS = 5800;
const QUICK_MS = 500; // for guests who asked for reduced motion

/**
 * Full-screen opening screen: Suman's drawing sheet, taped to the board.
 * Tapping it inks the plan, lands the sanction stamp, then lifts the sheet
 * away to reveal the invitation.
 */
export default function Gate({ onOpen }) {
  const { seal, hint, sheetTitle, roles, stampText } = wedding.envelope;
  const [opening, setOpening] = useState(false);

  // Lock scrolling while the gate is showing
  useEffect(() => {
    document.body.classList.add("locked");
    return () => document.body.classList.remove("locked");
  }, []);

  const open = () => {
    if (opening) return;
    setOpening(true);
    // Let the ink + stamp sequence play out slowly, then reveal the card
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(() => onOpen(), reduced ? QUICK_MS : SEQUENCE_MS);
  };

  const site = wedding.venue.name.split(",")[0];

  return (
    <div
      className={`gate${opening ? " is-opening" : ""}`}
      onClick={open}
      role="button"
      tabIndex={0}
      aria-label="Open the invitation"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      }}
    >
      <span className="gate-grid" aria-hidden="true" />
      <span className="gate-marks" aria-hidden="true">
        {MARKS.map((m) => (
          <span
            key={m.text}
            className={`gate-mark gate-mark--${m.kind}`}
            style={{
              "--x": m.x,
              "--y": m.y,
              "--t": `${m.t}s`,
              "--d": `${m.d}s`,
              "--s": m.s,
            }}
          >
            {m.text}
          </span>
        ))}
      </span>
      <span className="gate-corner gate-corner--tl" aria-hidden="true">
        {"// sheet 01 · drawn by Suman, deployed by Naitik"}
      </span>
      <span className="gate-corner gate-corner--br" aria-hidden="true">
        {`site · ${wedding.venue.name}`}
      </span>

      {sheetTitle && <p className="gate-title">{sheetTitle}</p>}

      <button
        type="button"
        className={`gate-sheet${opening ? " is-opening" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          open();
        }}
        aria-label="Open the invitation"
      >
        <span className="gate-tape gate-tape--l" aria-hidden="true" />
        <span className="gate-tape gate-tape--r" aria-hidden="true" />

        <span className="gate-drawing">
          <Plan className="gate-plan gate-plan--ghost" />
          <Plan className="gate-plan gate-plan--ink" heart />
          <span className="gate-stamp">
            <b>{stampText}</b>
            <i>{wedding.footer.dateLine}</i>
          </span>
        </span>

        <span className="gate-block">
          <span className="gate-mono">
            {seal}
            <span className="gate-ring" aria-hidden="true" />
          </span>
          <span className="gate-rows">
            <span>
              <i>project</i>
              <b>{seal}</b>
            </span>
            <span>
              <i>scale</i>
              <b>1 : forever</b>
            </span>
            <span>
              <i>site</i>
              <b>{site}</b>
            </span>
            <span>
              <i>date</i>
              <b>{wedding.footer.dateLine}</b>
            </span>
          </span>
          <span className="gate-note">
            {"// sanctioned by family & friends, built to last"}
          </span>
        </span>
      </button>

      {roles?.length > 0 && (
        <ul className="gate-roles">
          {roles.map((r) => (
            <li key={r.name}>
              <i>{r.glyph}</i>
              <b>{r.name}</b>
              <span>{r.role}</span>
            </li>
          ))}
        </ul>
      )}

      <span className="gate-hint">{hint}</span>
    </div>
  );
}
