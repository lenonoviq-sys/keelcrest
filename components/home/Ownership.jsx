import Image from "next/image";

export default function Ownership() {
  return (
    <section className="relative pt-6 pb-16 sm:py-20 lg:py-40 bg-night">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-14">
        <div className="grid gap-10 sm:gap-16 lg:grid-cols-12 lg:gap-20 items-center lg:items-stretch">
          {/* Desktop-only image (left) — stretches full height of text column */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="relative aspect-[3/4] lg:aspect-auto lg:h-full w-full overflow-hidden shadow-frame">
              <Image
                src="/lap-image.jpg"
                alt="Hands at a laptop and phone, daily work in a quiet office"
                fill
                quality={90}
                sizes="40vw"
                className="object-cover object-center"
                style={{
                  filter:
                    "saturate(0.55) contrast(1.12) brightness(0.9) sepia(0.08)",
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(10,8,6,0.85)_100%)]" />
            </div>
          </div>

          {/* Right — text (mobile shows: heading → image → divider → body) */}
          <div className="lg:col-span-7">
            <span className="eyebrow">Ownership &amp; Responsibility</span>
            <h2 className="section-title mt-4 sm:mt-6 text-parchment text-3xl sm:text-4xl md:text-5xl">
              Built with intention,{" "}
              <span className="italic text-gold-gradient">
                structured to last
              </span>
            </h2>

            {/* Mobile-only image, sits between heading and divider */}
            <div className="mt-6 flex justify-center lg:hidden">
              <div className="relative aspect-[3/2] sm:aspect-[4/3] w-full sm:max-w-[340px] overflow-hidden shadow-frame">
                <Image
                  src="/lap-image.jpg"
                  alt="Hands at a laptop and phone, daily work in a quiet office"
                  fill
                  quality={90}
                  sizes="(min-width: 640px) 340px, 100vw"
                  className="object-cover object-center"
                  style={{
                    filter:
                      "saturate(0.55) contrast(1.12) brightness(0.9) sepia(0.08)",
                  }}
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(10,8,6,0.85)_100%)]" />
              </div>
            </div>

            <div className="divider-gold mt-6 sm:mt-8 mx-auto lg:mx-0" />

            <div className="mt-6 sm:mt-8 space-y-5 text-base lg:text-lg font-light leading-relaxed text-parchment/70">
              <p>
                Our portfolio continues to expand through the creation of new
                brands and projects, each developed with intention and
                purpose. Some ventures are built to solve specific problems,
                while others are designed to explore new opportunities.
                Regardless of scale or sector, every project is approached
                with the same level of discipline, focus, and commitment.
              </p>
              <p>
                <span className="font-display tracking-wide text-gold-gradient">
                  At KEELCREST
                </span>
                , ownership is not only about holding assets. It is about
                responsibility. We take full responsibility for what we build,
                how it operates, and how it grows over time. This mindset
                allows us to move with clarity, make confident decisions, and
                build ventures that are structured to last.
              </p>
              <p>
                We are continuously building, refining, and expanding. Our
                work is ongoing, shaped by experience and guided by a
                long-term vision that prioritizes stability, quality, and
                sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
