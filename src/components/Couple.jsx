import { wedding } from "../config";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";

function PersonBlock({ data }) {
  return (
    <div className="person-block">
      <div className="person-photo">
        <SmartImage src={data.photo} alt={data.name} label="Add a photo" />
      </div>
      <h3 className="person-name">{data.name}</h3>
      {data.parents && <p className="person-parents">{data.parents}</p>}
    </div>
  );
}

/** Couple photo + both families — name and parents for each side. */
export default function Couple() {
  const { couple } = wedding;

  return (
    <section className="couple">
      <div className="wrap">
        {couple.photo && (
          <Reveal className="couple-photo">
            <SmartImage src={couple.photo} alt="The couple" label="Add your photo" />
          </Reveal>
        )}

        <Reveal delay={80}>
          <PersonBlock data={couple.bride} />
        </Reveal>

        <Reveal className="with-row">
          <span className="with-line" />
          <span className="with-word">{couple.withText || "With"}</span>
          <span className="with-line" />
        </Reveal>

        <Reveal delay={80}>
          <PersonBlock data={couple.groom} />
        </Reveal>
      </div>
    </section>
  );
}
