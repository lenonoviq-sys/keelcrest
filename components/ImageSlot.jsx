/**
 * ImageSlot — marked placeholder for where an image should be uploaded.
 *
 * Props:
 *  - label: short name of the slot (e.g. "HERO WALLPAPER")
 *  - description: what the image should depict (e.g. "Executive on yacht at sunset")
 *  - filename: suggested filename the user should drop into /public (e.g. "hero-yacht.jpg")
 *  - aspect: Tailwind aspect utility (e.g. "aspect-[21/9]", "aspect-[4/5]"); defaults to aspect-[16/9]
 *  - className: extra classes on the wrapper
 *  - children: optional overlay content (e.g. hero heading that sits on top)
 */
export default function ImageSlot({
  label = "IMAGE",
  description = "",
  filename,
  aspect = "aspect-[16/9]",
  className = "",
  children,
}) {
  return (
    <div
      className={`image-slot relative w-full ${aspect} ${className}`}
      role="img"
      aria-label={`${label}${description ? `, ${description}` : ""}`}
    >
      {/* Centered placeholder info */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <div className="flex items-center gap-3 mb-4 opacity-60">
          <span className="h-px w-8 bg-gold/50" />
          <span className="label-luxury">{label}</span>
          <span className="h-px w-8 bg-gold/50" />
        </div>
        {description && (
          <p className="max-w-sm font-display text-xl text-parchment/70 italic leading-snug">
            {description}
          </p>
        )}
        {filename && (
          <p className="mt-4 text-[10px] tracking-[0.25em] uppercase text-gold/50 font-mono">
            upload as /public/{filename}
          </p>
        )}
      </div>

      {/* Overlay content (e.g. hero heading) renders on top */}
      {children && (
        <div className="relative z-10 h-full w-full">{children}</div>
      )}
    </div>
  );
}
