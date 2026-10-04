import { wedding, getCalendarUrl } from "../config";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";

/** Sage band — a photo, the blessing lines and an "Add to Calendar" button. */
export default function Blessings() {
  const { blessings } = wedding;

  return (
    <section className="band band--sage blessings">
      <Reveal className="blessings-wrap">
        {blessings.image && (
          <SmartImage
            src={blessings.image}
            alt="Blessings"
            className="blessings-img"
            label="Add a photo"
          />
        )}

        {blessings.text && <p className="blessings-text">{blessings.text}</p>}

        <a
          className="btn"
          href={getCalendarUrl()}
          target="_blank"
          rel="noreferrer"
        >
          <span aria-hidden="true">📅</span>{" "}
          {blessings.calendarLabel || "Add to Calendar"}
        </a>
      </Reveal>
    </section>
  );
}
