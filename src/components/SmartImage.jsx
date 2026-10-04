import { useState } from "react";

/**
 * Image with a graceful fallback.
 * - When `src` is empty or the image fails to load:
 *   - renders `fallback` if provided, otherwise a dashed placeholder box.
 */
export default function SmartImage({
  src,
  alt = "",
  className = "",
  label = "Add your photo",
  fallback = null,
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    if (fallback) {
      return <span className={className}>{fallback}</span>;
    }
    return (
      <div className={`smart-image ${className}`.trim()} role="img" aria-label={label}>
        <span className="smart-image-icon" aria-hidden="true">
          🖼️
        </span>
        <strong>{label}</strong>
        <small>put the file in public/images</small>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
