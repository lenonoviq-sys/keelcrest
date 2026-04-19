import Image from "next/image";
import Solutions from "@/components/home/Solutions";
import Leadership from "@/components/home/Leadership";

export const metadata = {
  title: "Leadership, KeelCrest Holding LTD",
  description:
    "The leadership of KeelCrest Holding LTD, a private firm shaping the digital ventures of tomorrow.",
};

export default function LeadershipPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative w-full h-screen min-h-[640px] overflow-hidden">
        <div className="absolute inset-0 animate-slow-zoom">
          <Image
            src="/leadership-hero.png"
            alt="Private boardroom at dusk, city skyline at golden hour"
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
                <span className="eyebrow">Leadership</span>
              </div>
              <h1 className="section-title text-parchment text-5xl md:text-6xl lg:text-7xl">
                At the head of every{" "}
                <span className="italic text-gold-gradient">decision</span>
              </h1>
              <p className="mt-6 font-display text-xl md:text-2xl italic text-parchment/70">
                Disciplined counsel. Unwavering judgement. Long-horizon thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Solutions />
      <Leadership />
    </>
  );
}
