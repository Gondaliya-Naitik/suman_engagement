import { useEffect, useState } from "react";
import { wedding } from "../config";

/**
 * Full-screen opening screen: a cream envelope with a sage wax seal.
 * Tapping it plays the opening sequence (seal pops, flap opens, the
 * card rises out) and then reveals the invitation.
 */
export default function Envelope({ onOpen }) {
  const { seal, hint } = wedding.envelope;
  const [opening, setOpening] = useState(false);

  // Lock scrolling while the envelope is showing
  useEffect(() => {
    document.body.classList.add("locked");
    return () => document.body.classList.remove("locked");
  }, []);

  const open = () => {
    if (opening) return;
    setOpening(true);
    // Let the flap + card animation play, then reveal the card
    window.setTimeout(() => onOpen(), 2350);
  };

  return (
    <div
      className={`envelope-overlay${opening ? " is-opening" : ""}`}
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
      <button
        type="button"
        className={`envelope${opening ? " is-opening" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          open();
        }}
        aria-label="Open the invitation"
      >
        <span className="envelope-card" aria-hidden="true">
          <span className="envelope-card-mono">{seal}</span>
        </span>
        <span className="envelope-body" aria-hidden="true">
          <span className="envelope-flap" />
          <span className="envelope-seal">{seal}</span>
        </span>
      </button>

      <span className="envelope-hint">{hint}</span>
    </div>
  );
}
