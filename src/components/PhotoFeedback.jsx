import { useState } from "react";
import { wedding } from "../config";

/**
 * The question a guest is asked before the card opens.
 * "Achhe" hands over to the card, "Bure" fills the screen with one image and
 * the invitation stays closed.
 */
export default function PhotoFeedback({ onGood }) {
  const { feedback } = wedding;
  // null = the question is showing, "bad" = the full-page answer
  const [answer, setAnswer] = useState(null);

  if (answer === "bad") {
    return (
      <div className="feedback-blocked" role="dialog" aria-modal="true">
        <img
          className="feedback-blocked-img"
          src={feedback.badImage}
          alt=""
          aria-hidden="true"
        />
        {feedback.badText && (
          <p className="feedback-blocked-text">{feedback.badText}</p>
        )}
        {feedback.retry && (
          <button
            type="button"
            className="feedback-retry"
            onClick={() => setAnswer(null)}
          >
            {feedback.retry}
          </button>
        )}
      </div>
    );
  }

  return (
    <div
      className="feedback-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={feedback.question}
    >
      <div className="feedback-card">
        <p className="feedback-kicker">Card kholne se pehle</p>
        <h2 className="feedback-question">{feedback.question}</h2>

        <div className="feedback-actions">
          <button
            type="button"
            className="feedback-btn feedback-btn--good"
            onClick={onGood}
          >
            {feedback.good}
          </button>
          <button
            type="button"
            className="feedback-btn feedback-btn--bad"
            onClick={() => setAnswer("bad")}
          >
            {feedback.bad}
          </button>
        </div>
      </div>
    </div>
  );
}
