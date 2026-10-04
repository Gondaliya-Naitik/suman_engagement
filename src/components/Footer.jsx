import { wedding } from "../config";

/** Sage footer — names, date, heart divider and the credit line. */
export default function Footer() {
  const { footer } = wedding;

  return (
    <footer className="band band--sage site-footer">
      <p className="footer-names">{footer.names}</p>
      {footer.dateLine && <p className="footer-date">{footer.dateLine}</p>}

      <div className="footer-heart" aria-hidden="true">
        <span className="line" />
        <span className="heart">♥</span>
        <span className="line" />
      </div>

      <p className="footer-craft">
        {footer.craftedUrl ? (
          <a href={footer.craftedUrl} target="_blank" rel="noreferrer">
            {footer.craftedBy}
          </a>
        ) : (
          footer.craftedBy
        )}
      </p>
    </footer>
  );
}
