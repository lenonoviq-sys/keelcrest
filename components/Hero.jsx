import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 bg-black">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1fr_1.35fr] lg:px-10">
        <div className="animate-fade-up">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gold/60" />
            <span className="eyebrow">Premium digital studio</span>
          </div>

          <h1 className="section-heading mt-6 text-white text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-normal">
            Crafting{" "}
            <span
              className="gold-text italic font-medium inline-block"
              style={{ paddingRight: "0.18em", marginRight: "-0.12em" }}
            >
              Digital Excellence
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-white/70">
            We design and develop premium mobile apps and digital products that
            drive success — pairing refined craftsmanship with technology built
            to endure.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="gold-btn-solid">
              Get Started
              <ArrowIcon />
            </Link>
            <Link href="/about" className="gold-btn">
              Discover Our Craft
            </Link>
          </div>

          <div className="mt-16 grid max-w-lg grid-cols-3 gap-8">
            <Stat value="120+" label="Projects" />
            <Stat value="40+" label="Clients" />
            <Stat value="8 yrs" label="Craft" />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[1080px] animate-fade-in lg:ml-auto lg:mr-0 lg:mt-12">
          <Image
            src="/tree.png"
            alt="Keel Crest"
            width={1024}
            height={1024}
            priority
            quality={100}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="font-serif text-3xl font-light gold-text">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/50">
        {label}
      </p>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
