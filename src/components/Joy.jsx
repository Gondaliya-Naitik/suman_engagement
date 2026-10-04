import { wedding } from "../config";
import Reveal from "./Reveal";

/** "Sharing The Joy" — host and family compliments list. */
export default function Joy() {
  const { joy } = wedding;

  return (
    <section className="joy">
      <Reveal className="wrap">
        <h2 className="sect-head">{joy.heading}</h2>

        {joy.host && <p className="joy-host">{joy.host}</p>}
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
