import { wedding, getCalendarUrl } from "../config";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";

/** Sage band — a looping video (or photo), the blessing lines and a calendar button. */
export default function Blessings() {
  const { blessings } = wedding;

  return (
    <section className="band band--sage blessings">
      <Reveal className="blessings-wrap">
        {blessings.video ? (
          <video
            className="blessings-video"
            src={blessings.video}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
            onContextMenu={(e) => e.preventDefault()}
            aria-label="Blessings video"
          />
        ) : (
          blessings.image && (
            <SmartImage
              src={blessings.image}
              alt="Blessings"
              className="blessings-img"
              label="Add a photo"
            />
          )
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
