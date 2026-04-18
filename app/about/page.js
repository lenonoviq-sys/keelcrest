import Image from "next/image";

export const metadata = {
  title: "About — Keel Crest Ltd.",
  description:
    "Keel Crest Ltd. is a luxury corporate firm delivering wealth solutions to family offices, corporate, and private clients with discipline and long-term vision.",
};

const pillars = [
  {
    label: "Vision",
    text: "We look beyond the moment to spot the digital ventures that will shape tomorrow. Every idea we back is chosen for its potential to lead its market, not simply follow it.",
  },
  {
    label: "Trust",
    text: "Our partners entrust us with ambition, capital, and reputation. We honour that trust with discretion, candour, and the disciplined judgement of a private firm.",
  },
  {
    label: "Excellence",
    text: "We treat every product as a signature work — refined, tested, and taken to market with the precision that turns a promising concept into a lasting leader.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Intro / hero banner */}
      <section className="relative h-[70vh] min-h-[560px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/about-hero.png"
            alt="Keel Crest — corporate interior"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-hero-overlay pointer-events-none" />

        <div className="relative z-10 h-full flex items-end">
          <div className="mx-auto w-full max-w-[1400px] px-8 lg:px-14 pb-20 lg:pb-28">
            <div className="max-w-3xl animate-fade-up">
              <div className="mb-8">
                <span className="eyebrow">Keel Crest Ltd.</span>
              </div>
              <h1 className="section-title text-parchment text-5xl md:text-6xl lg:text-7xl">
                From Vision to{" "}
                <span className="italic text-gold-gradient">Reality</span>.
              </h1>
              <p className="mt-6 font-display text-xl md:text-2xl italic text-parchment/70">
                Turning ideas into market leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy — two column narrative */}
      <section className="relative py-28 lg:py-40 bg-night">
        <div className="mx-auto max-w-[1400px] px-8 lg:px-14">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <span className="eyebrow">Findtable</span>
              <h2 className="section-title mt-6 text-parchment text-4xl md:text-5xl">
                Your guide to the best{" "}
                <span className="italic text-gold-gradient">
                  fine dining
                </span>{" "}
                restaurants.
              </h2>

              <div className="divider-gold mt-8" />

              <p className="mt-8 text-base lg:text-lg font-light leading-relaxed text-parchment/70">
                Findtable provides you with a comprehensive guide to the
                finest restaurants around the world — with updated menus,
                precise locations, and details that make it easier for you to
                choose your ideal destination.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4 max-w-md">
                <a
                  href="#"
                  aria-label="Download on the App Store"
                  className="group inline-flex items-center gap-3 rounded-md border border-gold/35 bg-black/40 px-5 py-3 transition-all duration-500 hover:border-gold hover:bg-gold/10"
                >
                  <svg
                    className="h-8 w-8 text-parchment transition-colors group-hover:text-gold-light"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-parchment/60">
                      Download on the
                    </span>
                    <span className="font-display text-lg text-parchment group-hover:text-gold-light">
                      App Store
                    </span>
                  </div>
                </a>

                <a
                  href="#"
                  aria-label="Get it on Google Play"
                  className="group inline-flex items-center gap-3 rounded-md border border-gold/35 bg-black/40 px-5 py-3 transition-all duration-500 hover:border-gold hover:bg-gold/10"
                >
                  <svg
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="#E8DCC4"
                      d="M3.609 1.814 13.79 12 3.609 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .61-.92z"
                    />
                    <path
                      fill="#C9A961"
                      d="m16.81 15.02-2.62-2.62 2.62-2.62 3.44 1.98a1 1 0 0 1 0 1.72l-3.44 1.54z"
                    />
                    <path
                      fill="#E0C88A"
                      d="M3.609 1.814 14.19 12.4l2.62-2.62-12.81-7.38a1 1 0 0 0-.39.41z"
                    />
                    <path
                      fill="#A68B47"
                      d="M3.609 22.186 14.19 11.6l2.62 2.62-12.81 7.38a1 1 0 0 1-.39-1.41z"
                    />
                  </svg>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-parchment/60">
                      Get it on
                    </span>
                    <span className="font-display text-lg text-parchment group-hover:text-gold-light">
                      Google Play
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 flex justify-center lg:justify-end">
              <Image
                src="/findtable-phone.png"
                alt="Findtable app preview on iPhone"
                width={1024}
                height={1536}
                quality={100}
                className="w-full max-w-[440px] lg:max-w-[500px] h-auto"
                style={{
                  filter:
                    "brightness(0.82) contrast(1.1) saturate(1.2) sepia(0.25) hue-rotate(-8deg)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ADDHOTEL — reversed layout */}
      <section className="relative py-28 lg:py-40 bg-night">
        <div className="mx-auto max-w-[1400px] px-8 lg:px-14">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1 flex justify-center lg:justify-start">
              <Image
                src="/addhotel-phone.png"
                alt="ADDHOTEL app preview on iPhone"
                width={1024}
                height={1536}
                quality={100}
                className="w-full max-w-[440px] lg:max-w-[500px] h-auto"
                style={{
                  filter:
                    "brightness(0.82) contrast(1.1) saturate(1.2) sepia(0.25) hue-rotate(-8deg)",
                }}
              />
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <span className="eyebrow">ADDHOTEL</span>
              <h2 className="section-title mt-6 text-parchment text-4xl md:text-5xl">
                Your gateway to the world&rsquo;s{" "}
                <span className="italic text-gold-gradient">
                  finest hotels
                </span>
                .
              </h2>

              <div className="divider-gold mt-8" />

              <p className="mt-8 text-base lg:text-lg font-light leading-relaxed text-parchment/70">
                ADDHOTEL connects you with a curated selection of luxury hotels
                worldwide real time availability, verified amenities, and
                refined details that elevate every stay.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4 max-w-md">
                <a
                  href="#"
                  aria-label="Download on the App Store"
                  className="group inline-flex items-center gap-3 rounded-md border border-gold/35 bg-black/40 px-5 py-3 transition-all duration-500 hover:border-gold hover:bg-gold/10"
                >
                  <svg
                    className="h-8 w-8 text-parchment transition-colors group-hover:text-gold-light"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-parchment/60">
                      Download on the
                    </span>
                    <span className="font-display text-lg text-parchment group-hover:text-gold-light">
                      App Store
                    </span>
                  </div>
                </a>

                <a
                  href="#"
                  aria-label="Get it on Google Play"
                  className="group inline-flex items-center gap-3 rounded-md border border-gold/35 bg-black/40 px-5 py-3 transition-all duration-500 hover:border-gold hover:bg-gold/10"
                >
                  <svg
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="#E8DCC4"
                      d="M3.609 1.814 13.79 12 3.609 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .61-.92z"
                    />
                    <path
                      fill="#C9A961"
                      d="m16.81 15.02-2.62-2.62 2.62-2.62 3.44 1.98a1 1 0 0 1 0 1.72l-3.44 1.54z"
                    />
                    <path
                      fill="#E0C88A"
                      d="M3.609 1.814 14.19 12.4l2.62-2.62-12.81-7.38a1 1 0 0 0-.39.41z"
                    />
                    <path
                      fill="#A68B47"
                      d="M3.609 22.186 14.19 11.6l2.62 2.62-12.81 7.38a1 1 0 0 1-.39-1.41z"
                    />
                  </svg>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-parchment/60">
                      Get it on
                    </span>
                    <span className="font-display text-lg text-parchment group-hover:text-gold-light">
                      Google Play
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FindSalad */}
      <section className="relative py-28 lg:py-40 bg-night">
        <div className="mx-auto max-w-[1400px] px-8 lg:px-14">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20 items-center">
            <div className="lg:col-span-5">
              <span className="eyebrow">FindSalad</span>
              <h2 className="section-title mt-6 text-parchment text-4xl md:text-5xl">
                Fresh choices for a{" "}
                <span className="italic text-gold-gradient">
                  refined appetite
                </span>
                .
              </h2>

              <div className="divider-gold mt-8" />

              <p className="mt-8 text-base lg:text-lg font-light leading-relaxed text-parchment/70">
                FindSalad guides you to thoughtfully crafted salads and
                wholesome dishes from the finest kitchens, with detailed
                ingredients, nutritional insight, and locations tailored to
                your taste.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4 max-w-md">
                <a
                  href="#"
                  aria-label="Download on the App Store"
                  className="group inline-flex items-center gap-3 rounded-md border border-gold/35 bg-black/40 px-5 py-3 transition-all duration-500 hover:border-gold hover:bg-gold/10"
                >
                  <svg
                    className="h-8 w-8 text-parchment transition-colors group-hover:text-gold-light"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-parchment/60">
                      Download on the
                    </span>
                    <span className="font-display text-lg text-parchment group-hover:text-gold-light">
                      App Store
                    </span>
                  </div>
                </a>

                <a
                  href="#"
                  aria-label="Get it on Google Play"
                  className="group inline-flex items-center gap-3 rounded-md border border-gold/35 bg-black/40 px-5 py-3 transition-all duration-500 hover:border-gold hover:bg-gold/10"
                >
                  <svg
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="#E8DCC4"
                      d="M3.609 1.814 13.79 12 3.609 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .61-.92z"
                    />
                    <path
                      fill="#C9A961"
                      d="m16.81 15.02-2.62-2.62 2.62-2.62 3.44 1.98a1 1 0 0 1 0 1.72l-3.44 1.54z"
                    />
                    <path
                      fill="#E0C88A"
                      d="M3.609 1.814 14.19 12.4l2.62-2.62-12.81-7.38a1 1 0 0 0-.39.41z"
                    />
                    <path
                      fill="#A68B47"
                      d="M3.609 22.186 14.19 11.6l2.62 2.62-12.81 7.38a1 1 0 0 1-.39-1.41z"
                    />
                  </svg>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-parchment/60">
                      Get it on
                    </span>
                    <span className="font-display text-lg text-parchment group-hover:text-gold-light">
                      Google Play
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 flex justify-center lg:justify-end">
              <Image
                src="/findsalad-phone.png"
                alt="FindSalad app preview on iPhone"
                width={1024}
                height={1536}
                quality={100}
                className="w-full max-w-[440px] lg:max-w-[500px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="relative py-28 lg:py-36 bg-night">
        <div className="mx-auto max-w-[1400px] px-8 lg:px-14">
          <div className="flex flex-col items-center text-center mb-20">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-gold/60" />
              <span className="eyebrow">What guides us</span>
              <span className="h-px w-10 bg-gold/60" />
            </div>
            <h2 className="section-title text-parchment text-4xl md:text-5xl">
              The principles behind every{" "}
              <span className="italic text-gold-gradient">
                venture we build
              </span>
              .
            </h2>
          </div>

          <div className="grid gap-px bg-gold/10 md:grid-cols-3 border-y border-gold/10">
            {pillars.map((p) => (
              <div
                key={p.label}
                className="bg-night px-8 py-12 lg:px-12 lg:py-16 transition-colors duration-700 hover:bg-bronze-900"
              >
                <p className="label-luxury mb-6">{p.label}</p>
                <p className="text-base leading-relaxed text-parchment/70">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership preview — cinematic statement */}
      <section className="relative py-28 lg:py-40 bg-night">
        <div className="mx-auto max-w-[1400px] px-8 lg:px-14">
          <div className="grid gap-16 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative w-full aspect-[3/2]">
                <Image
                  src="/keelcrest-logo.png"
                  alt="Keel Crest Ltd. — brand mark"
                  fill
                  quality={95}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <span className="eyebrow">Keel Crest Holding Ltd.</span>
              <h2 className="section-title mt-6 text-parchment text-4xl md:text-5xl">
                A private house where bold ideas become{" "}
                <span className="italic text-gold-gradient">
                  lasting wealth
                </span>
                .
              </h2>

              <div className="divider-gold my-8" />

              <p className="text-base lg:text-lg font-light leading-relaxed text-parchment/70">
                Keel Crest Ltd. is a private corporate firm that identifies,
                builds, and stewards the digital ventures shaping the next
                generation of opportunity. We partner with founders, family
                offices, and private capital to translate considered ambition
                into category-defining products &mdash; and to protect them
                with the discipline of a house built for the long horizon.
              </p>

              <p className="mt-6 font-display text-xl italic text-parchment/55">
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
