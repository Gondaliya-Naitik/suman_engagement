import { wedding } from "../config";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";

/** "Hearts & Horizons" — monogram + a short poetic paragraph. */
export default function Hearts() {
  const { hearts } = wedding;

  return (
    <section className="hearts">
      <Reveal className="wrap">
        <h2 className="sect-head">{hearts.heading}</h2>

        {hearts.logo && (
          <SmartImage
            src={hearts.logo}
            alt="Monogram"
            className="hearts-logo"
            label="Add your monogram"
          />
        )}

        {hearts.text && <p className="hearts-text">{hearts.text}</p>}
      </Reveal>
    </section>
  );
}
