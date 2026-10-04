import { wedding } from "../config";
import { useCountdown } from "../hooks/useCountdown";

/** Sage band with a live countdown to the engagement. */
export default function Countdown() {
  const { heading, date, labels } = wedding.countdown;
  const { days, hours, minutes, seconds } = useCountdown(date);

  const parts = [
    [days, labels?.days ?? "Days"],
    [hours, labels?.hours ?? "Hours"],
    [minutes, labels?.minutes ?? "Minutes"],
    [seconds, labels?.seconds ?? "Seconds"],
  ];

  return (
    <section className="band band--sage countdown">
      <div className="wrap">
        <h2 className="countdown-heading">{heading}</h2>
        <div className="countdown-grid">
          {parts.map(([value, label]) => (
            <div className="countdown-box" key={label}>
              <span className="countdown-num">{String(value).padStart(2, "0")}</span>
              <span className="countdown-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
