import Image from "next/image";
import Leadership from "@/components/home/Leadership";
import Ownership from "@/components/home/Ownership";

export const metadata = {
  title: "Leadership, KeelCrest Holding LTD",
  description:
    "The leadership of KeelCrest Holding LTD, a private firm shaping the digital ventures of tomorrow.",
};

export default function LeadershipPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative w-full h-[60vh] min-h-[420px] sm:h-screen sm:min-h-[640px] overflow-hidden">
        <div className="absolute inset-0 animate-slow-zoom">
          <Image
            src="/leadership-hero.png"
            alt="Private boardroom at dusk, city skyline at golden hour"
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

        <div className="relative z-10 h-full flex items-center sm:items-end">
          <div className="mx-auto w-full max-w-[1400px] px-8 lg:px-14 sm:pb-20 lg:pb-28">
            <div className="max-w-3xl animate-fade-up">
              <div className="mb-4 sm:mb-8">
                <span className="eyebrow">Leadership</span>
              </div>
              <h1 className="section-title text-parchment text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                At the head of every{" "}
                <span className="italic text-gold-gradient">decision</span>
              </h1>
              <p className="mt-4 sm:mt-6 font-display text-base sm:text-xl md:text-2xl italic text-parchment/70">
                Disciplined counsel. Unwavering judgement.{" "}
                <span className="whitespace-nowrap sm:whitespace-normal">
                  Long-horizon
                </span>{" "}
                thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Ownership />
      <Leadership />
    </>
  );
}
