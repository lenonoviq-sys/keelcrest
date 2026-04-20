import Image from "next/image";
import Solutions from "@/components/home/Solutions";

export const metadata = {
  title: "Portfolio, KeelCrest Holding LTD",
  description:
    "The portfolio of KeelCrest Holding LTD — private investments and long-term value creation across digital ventures.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative w-full h-screen min-h-[520px] sm:min-h-[640px] overflow-hidden">
        <div className="absolute inset-0 animate-slow-zoom">
          <Image
            src="/portfolio-hero.png"
            alt="Private office, city skyline at golden hour"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-hero-overlay pointer-events-none" />

        <div className="relative z-10 h-full flex items-end">
          <div className="mx-auto w-full max-w-[1400px] px-8 lg:px-14 pb-12 sm:pb-20 lg:pb-28">
            <div className="max-w-3xl animate-fade-up">
              <div className="mb-4 sm:mb-8">
                <span className="eyebrow">Portfolio</span>
              </div>
              <h1 className="section-title text-parchment text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                A private group focused on{" "}
                <span className="italic text-gold-gradient">
                  long-term value
                </span>
              </h1>
              <p className="mt-4 sm:mt-6 font-display text-base sm:text-xl md:text-2xl italic text-parchment/70">
                Strategic investments. Quiet conviction. Patient capital.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Solutions />
    </>
  );
}
