import { wedding } from "../config";
import Reveal from "./Reveal";

/** "Assistance & Coordination" — phone numbers + blessings-only note. */
export default function Contacts() {
  const { contacts } = wedding;

  return (
    <section className="contacts">
      <Reveal className="wrap">
        <h2 className="sect-head">{contacts.heading}</h2>

        <div className="contact-list">
          {contacts.people.map((person) => (
            <div className="contact-item" key={person.phone}>
              {person.name && <span className="contact-name">{person.name}</span>}
              <a className="contact-phone" href={`tel:${person.phone.replace(/\s/g, "")}`}>
                {person.phone}
              </a>
            </div>
          ))}
        </div>

        {contacts.note && <p className="contacts-note">{contacts.note}</p>}
      </Reveal>
    </section>
  );
}
