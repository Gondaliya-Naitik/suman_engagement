import { useReveal } from "../hooks/useReveal";

/** Wraps children in a fade-up-on-scroll container. */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
}) {
  const ref = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
