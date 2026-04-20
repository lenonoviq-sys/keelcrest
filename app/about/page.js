import Image from "next/image";

export const metadata = {
  title: "About, KeelCrest Holding LTD",
  description:
    "KeelCrest Holding LTD is a luxury corporate firm delivering wealth solutions to family offices, corporate, and private clients with discipline and long-term vision.",
};

export default function AboutPage() {
  return (
    <>
      {/* Intro / hero banner */}
      <section className="relative h-[70vh] min-h-[480px] sm:min-h-[560px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/about-hero.png"
            alt="KeelCrest Holding LTD, corporate interior"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
            style={{
              filter:
                "saturate(0.55) contrast(1.12) brightness(0.9) sepia(0.08)",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-hero-overlay pointer-events-none" />

        <div className="relative z-10 h-full flex items-end">
          <div className="mx-auto w-full max-w-[1400px] px-8 lg:px-14 pb-12 sm:pb-20 lg:pb-28">
            <div className="max-w-3xl animate-fade-up">
              <div className="mb-4 sm:mb-8">
                <span className="eyebrow">KeelCrest Holding LTD</span>
              </div>
              <h1 className="section-title text-parchment text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">
                  Strength in{" "}
                  <span className="italic text-gold-gradient">Structure</span>
                </span>
                <span className="block">
                  Power in{" "}
                  <span className="italic text-gold-gradient">Vision</span>
                </span>
              </h1>
              <p className="mt-4 sm:mt-6 font-display text-base sm:text-xl md:text-2xl italic text-parchment/70">
                Refined Excellence In Every Experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership preview — cinematic statement */}
      <section className="relative py-16 sm:py-20 lg:py-40 bg-night">
        <div className="mx-auto max-w-[1400px] px-8 lg:px-14">
          <div className="grid gap-10 sm:gap-16 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6">
              <div className="relative w-full aspect-[3/2]">
                <Image
                  src="/keelcrest-logo.png"
                  alt="KeelCrest Holding LTD, brand mark"
                  fill
                  quality={95}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <span className="eyebrow">KeelCrest Holding LTD</span>
              <h2 className="section-title mt-4 sm:mt-6 text-parchment text-3xl sm:text-4xl md:text-5xl">
                A private house where bold ideas become{" "}
                <span className="italic text-gold-gradient">
                  lasting wealth
                </span>
              </h2>

              <div className="divider-gold my-6 sm:my-8" />

              <p className="text-base lg:text-lg font-light leading-relaxed text-parchment/70">
                KeelCrest Holding LTD is a private corporate firm that identifies,
                builds, and stewards the digital ventures shaping the next
                generation of opportunity. We partner with founders, family
                offices, and private capital to translate considered ambition
                into category-defining products, and to protect them
                with the discipline of a house built for the long horizon.
              </p>

              <p className="mt-4 sm:mt-6 font-display text-lg sm:text-xl italic text-parchment/55">
                &ldquo;Quiet conviction. Patient capital. Exceptional
                craft.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
