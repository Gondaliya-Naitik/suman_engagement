import { wedding } from "../config";
import Reveal from "./Reveal";

/** "Sharing The Joy" — hosts and family compliments list. */
export default function Joy() {
  const { joy } = wedding;
  // host takes one name or a list: "Suman" / ["Mr. X", "Miss. Y"]
  const hosts = (Array.isArray(joy.host) ? joy.host : [joy.host]).filter(Boolean);

  return (
    <section className="joy">
      <Reveal className="wrap">
        <h2 className="sect-head">{joy.heading}</h2>

        {hosts.length > 0 && (
          <div className="joy-hosts">
            {hosts.map((name) => (
              <p className="joy-host" key={name}>
                {name}
              </p>
            ))}
          </div>
        )}
        {joy.hostNote && <p className="joy-note">{joy.hostNote}</p>}

        <div className="joy-names">
          {joy.compliments.map((name) => (
            <p key={name}>{name}</p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
