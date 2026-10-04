import { wedding } from "../config";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";

function EventLine({ icon, children }) {
  if (!children) return null;
  return (
    <p className="event-line">
      <span className="ico" aria-hidden="true">
        {icon}
      </span>
      <span className="txt">{children}</span>
    </p>
  );
}

/** Illustrated event cards — photo on top, sage info panel below. */
export default function Events() {
  const { events, venue } = wedding;

  return (
    <section className="events">
      <div className="events-list">
        {events.items.map((ev) => (
          <Reveal className="event-card" key={ev.name}>
            <SmartImage
              src={ev.img}
              alt={ev.name}
              className="event-img"
              label={`${ev.name} illustration`}
            />
            <div className="event-info">
              <h3 className="event-name">{ev.name}</h3>
              <div className="event-lines">
                <EventLine icon="📅">{ev.date}</EventLine>
                <EventLine icon="🕐">{ev.time}</EventLine>
                <EventLine icon="📍">{ev.venue || venue.name}</EventLine>
                <EventLine icon="👕">{ev.dress}</EventLine>
                <EventLine icon="👕">{ev.theme}</EventLine>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
