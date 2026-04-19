import Image from "next/image";

export default function Solutions() {
  return (
    <section className="relative py-28 lg:py-40 bg-night">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-14">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20 items-center">
          {/* Left — text block */}
          <div className="lg:col-span-6">
            <div className="mb-8">
              <span className="eyebrow">Portfolio</span>
            </div>

            <h2 className="section-title text-parchment text-4xl md:text-5xl lg:text-6xl">
              A Private Group Focused On{" "}
              <span className="italic text-gold-gradient">
                Long-Term Value
              </span>
            </h2>

            <div className="divider-gold my-10" />

            <div className="max-w-lg">
              <p className="font-display text-xl md:text-2xl italic text-parchment/55 leading-relaxed">
                We are a privately held group focused on strategic investments
                and long-term value creation. Our portfolio reflects a
                commitment to quality, discipline, and sustainable growth.
              </p>
            </div>
          </div>

          {/* Right — image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[3/2] w-full overflow-hidden shadow-frame">
              <Image
                src="/solutions.png"
                alt="Private office at dusk, city skyline at golden hour"
                fill
                quality={90}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                style={{
                  filter:
                    "brightness(0.7) contrast(1.08) saturate(1.1) sepia(0.25) hue-rotate(-8deg)",
                }}
              />
              {/* Edge fade into page background */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(10,8,6,0.85)_100%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
