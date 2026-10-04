import { wedding, getMapUrl } from "../config";
import Reveal from "./Reveal";

/** Venue card with a "Get Direction" button. */
export default function Venue() {
  const { venue } = wedding;

  return (
    <section className="venue">
      <Reveal className="wrap">
        <h2 className="sect-head">The Venue</h2>

        <div className="venue-card">
          <p className="venue-name">{venue.name}</p>
          {venue.address && <p className="venue-addr">{venue.address}</p>}

          <a
            className="btn"
            href={getMapUrl()}
            target="_blank"
            rel="noreferrer"
          >
            <span aria-hidden="true">📍</span> Get Direction
          </a>
        </div>
      </Reveal>
    </section>
  );
}
