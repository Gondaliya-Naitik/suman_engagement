import { wedding } from "../config";

/** Full-screen hero — Ganesh, mantra, couple names and the date. */
export default function Hero() {
  const { hero, couple } = wedding;

  return (
    <section
      className="hero"
      style={hero.background ? { backgroundImage: `url(${hero.background})` } : undefined}
    >
      <div className="hero-inner">
        {hero.ganesh && (
          <span className="hero-ganesh">
            <img src={hero.ganesh} alt="" />
          </span>
        )}

        {hero.mantra && <p className="hero-mantra">{hero.mantra}</p>}
        {hero.kicker && <p className="hero-kicker">{hero.kicker}</p>}

        <h1 className="hero-names">
          <span>{couple.bride.name}</span>
          <span className="hero-amp">&amp;</span>
          <span>{couple.groom.name}</span>
        </h1>

        {hero.dateLabel && <p className="hero-date">{hero.dateLabel}</p>}
      </div>

      <span className="hero-chevron" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
          <path
            d="M5 9l7 7 7-7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </section>
  );
}
