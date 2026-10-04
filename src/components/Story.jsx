import { wedding } from "../config";
import Reveal from "./Reveal";
import Divider from "./Divider";

/** Cream section with an ornamental divider, heading and a short poem. */
export default function Story() {
  const { story } = wedding;

  return (
    <section className="story">
      <Reveal className="wrap">
        <Divider />
        <h2 className="sect-head">{story.heading}</h2>
        <div className="story-lines">
          {story.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
