import Image from "next/image";

function StoreButtons() {
  return (
    <div className="mt-8 lg:mt-10 grid grid-cols-2 gap-3 sm:gap-4 max-w-md">
      <button
        type="button"
        aria-label="Download on the App Store (coming soon)"
        className="group inline-flex items-center gap-2 sm:gap-3 rounded-md border border-gold/35 bg-black/40 px-3 py-2.5 sm:px-5 sm:py-3 transition-all duration-500 hover:border-gold hover:bg-gold/10"
      >
        <svg
          className="h-9 w-9 sm:h-12 sm:w-12 md:h-10 md:w-10 text-parchment transition-colors group-hover:text-gold-light"
          viewBox="0 0 22 22"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
        </svg>
        <div className="flex flex-col leading-tight">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-parchment/60">
            Download on the
          </span>
          <span className="font-display text-base sm:text-lg text-parchment group-hover:text-gold-light">
            App Store
          </span>
        </div>
      </button>

      <button
        type="button"
        aria-label="Get it on Google Play (coming soon)"
        className="group inline-flex items-center gap-2 sm:gap-3 rounded-md border border-gold/35 bg-black/40 px-3 py-2.5 sm:px-5 sm:py-3 transition-all duration-500 hover:border-gold hover:bg-gold/10"
      >
        <svg className="h-6 w-6 sm:h-8 sm:w-8" viewBox="0 0 24 24" aria-hidden="true">
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
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-parchment/60">
            Get it on
          </span>
          <span className="font-display text-base sm:text-lg text-parchment group-hover:text-gold-light">
            Google Play
          </span>
        </div>
      </button>
    </div>
  );
}

function PhoneImage({ src, alt, filter, className = "" }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1024}
      height={1536}
      quality={100}
      className={`h-auto ${className}`}
      style={{ filter }}
    />
  );
}

export default function Apps() {
  return (
    <>
      {/* Findtable */}
      <section className="relative py-16 sm:py-20 lg:py-40 bg-night">
        <div className="mx-auto max-w-[1400px] px-8 lg:px-14">
          <div className="grid gap-6 md:gap-10 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <span className="eyebrow">Findtable</span>
              <h2 className="section-title mt-4 sm:mt-6 text-parchment text-3xl sm:text-4xl md:text-5xl">
                Your guide to the best{" "}
                <span className="italic text-gold-gradient">fine dining</span>{" "}
                restaurants
              </h2>

              {/* Mobile-only phone, sits between heading and body */}
              <div className="mt-6 flex justify-center lg:hidden">
                <PhoneImage
                  src="/findtable-phone.png"
                  alt="Findtable app preview on iPhone"
                  filter="brightness(0.82) contrast(1.1) saturate(1.2) sepia(0.25) hue-rotate(-8deg)"
                  className="w-full max-w-[200px] sm:max-w-[280px] md:max-w-[400px]"
                />
              </div>

              <div className="divider-gold mt-4 mx-auto lg:mt-8 lg:mx-0" />

              <p className="mt-4 lg:mt-8 text-base lg:text-lg font-light leading-relaxed text-parchment/70">
                Findtable provides you with a comprehensive guide to the
                finest restaurants around the world.
              </p>

              <StoreButtons />
            </div>

            {/* Desktop-only phone */}
            <div className="hidden lg:col-span-7 lg:flex lg:justify-end">
              <PhoneImage
                src="/findtable-phone.png"
                alt="Findtable app preview on iPhone"
                filter="brightness(0.82) contrast(1.1) saturate(1.2) sepia(0.25) hue-rotate(-8deg)"
                className="w-full max-w-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ADDHOTEL — reversed layout on desktop */}
      <section className="relative py-16 sm:py-20 lg:py-40 bg-night">
        <div className="mx-auto max-w-[1400px] px-8 lg:px-14">
          <div className="grid gap-6 md:gap-10 lg:grid-cols-12 lg:gap-20 items-center">
            {/* Desktop-only phone on the left */}
            <div className="hidden lg:col-span-7 lg:flex lg:justify-start">
              <PhoneImage
                src="/addhotel-phone.png"
                alt="ADDHOTEL app preview on iPhone"
                filter="brightness(0.82) contrast(1.1) saturate(1.2) sepia(0.25) hue-rotate(-8deg)"
                className="w-full max-w-[500px]"
              />
            </div>

            <div className="lg:col-span-5">
              <span className="eyebrow">ADDHOTEL</span>
              <h2 className="section-title mt-4 sm:mt-6 text-parchment text-3xl sm:text-4xl md:text-5xl">
                Your gateway to the world&rsquo;s{" "}
                <span className="italic text-gold-gradient">finest hotels</span>
              </h2>

              {/* Mobile-only phone, sits between heading and body */}
              <div className="mt-6 flex justify-center lg:hidden">
                <PhoneImage
                  src="/addhotel-phone.png"
                  alt="ADDHOTEL app preview on iPhone"
                  filter="brightness(0.82) contrast(1.1) saturate(1.2) sepia(0.25) hue-rotate(-8deg)"
                  className="w-full max-w-[200px] sm:max-w-[280px] md:max-w-[400px]"
                />
              </div>

              <div className="divider-gold mt-4 mx-auto lg:mt-8 lg:mx-0" />

              <p className="mt-4 lg:mt-8 text-base lg:text-lg font-light leading-relaxed text-parchment/70">
                ADDHOTEL connects you with a curated selection of luxury hotels
                worldwide real time availability, verified amenities, and
                refined details that elevate every stay.
              </p>

              <StoreButtons />
            </div>
          </div>
        </div>
      </section>

      {/* FindSalad */}
      <section className="relative py-16 sm:py-20 lg:py-40 bg-night">
        <div className="mx-auto max-w-[1400px] px-8 lg:px-14">
          <div className="grid gap-6 md:gap-10 lg:grid-cols-12 lg:gap-20 items-center">
            <div className="lg:col-span-5">
              <span className="eyebrow">FindSalad</span>
              <h2 className="section-title mt-4 sm:mt-6 text-parchment text-3xl sm:text-4xl md:text-5xl">
                Fresh choices for a{" "}
                <span className="italic text-gold-gradient">
                  refined appetite
                </span>
              </h2>

              {/* Mobile-only phone, sits between heading and body */}
              <div className="mt-6 flex justify-center lg:hidden">
                <PhoneImage
                  src="/findsalad-phone.png"
                  alt="FindSalad app preview on iPhone"
                  filter="brightness(0.9) contrast(1.05) saturate(1.1) sepia(0.12) hue-rotate(-4deg)"
                  className="w-full max-w-[200px] sm:max-w-[280px] md:max-w-[400px]"
                />
              </div>

              <div className="divider-gold mt-4 mx-auto lg:mt-8 lg:mx-0" />

              <p className="mt-4 lg:mt-8 text-base lg:text-lg font-light leading-relaxed text-parchment/70">
                FindSalad guides you to thoughtfully crafted salads and
                wholesome dishes from the finest kitchens, with detailed
                ingredients, nutritional insight, and locations tailored to
                your taste.
              </p>

              <StoreButtons />
            </div>

            {/* Desktop-only phone */}
            <div className="hidden lg:col-span-7 lg:flex lg:justify-end">
              <PhoneImage
                src="/findsalad-phone.png"
                alt="FindSalad app preview on iPhone"
                filter="brightness(0.9) contrast(1.05) saturate(1.1) sepia(0.12) hue-rotate(-4deg)"
                className="w-full max-w-[500px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
