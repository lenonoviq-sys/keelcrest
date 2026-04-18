import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[720px] overflow-hidden">
      {/* Full-bleed hero wallpaper with slow cinematic zoom */}
      <div className="absolute inset-0 animate-slow-zoom">
        <Image
          src="/hero.png"
          alt="KeelCrest Holding LTD. — private horizon"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Dark cinematic overlay for readability */}
      <div className="absolute inset-0 bg-hero-overlay pointer-events-none" />

      {/* Hero content — two-column on desktop: text left, logo right */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-[1400px] px-8 lg:px-14">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
            {/* Left — headline */}
            <div className="animate-fade-up">
              <div className="mb-8">
                <span className="eyebrow">Welcome to KeelCrest Holding LTD.</span>
              </div>

              <h1 className="section-title text-parchment text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] leading-[1.08] whitespace-normal">
                <span className="block">
                  Strength in{" "}
                  <span className="italic text-gold-gradient">Structure</span>.
                </span>
                <span className="block">
                  Power in{" "}
                  <span className="italic text-gold-gradient">Vision</span>.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-parchment/70 font-light">
                Refined Excellence In Every Experience.
              </p>
            </div>

            {/* Right — large logo emblem */}
            <div className="flex items-center justify-center animate-fade-in">
              <Image
                src="/logo.png"
                alt=""
                width={1536}
                height={1024}
                priority
                quality={100}
                className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[640px] xl:max-w-[760px] h-auto drop-shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Soft scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 opacity-60">
        <span className="text-[10px] tracking-[0.35em] uppercase text-parchment/60">
          Scroll
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-gold/50 to-transparent" />
      </div>
    </section>
  );
}
