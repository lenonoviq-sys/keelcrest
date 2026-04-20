import Image from "next/image";

export default function Approach() {
  return (
    <section className="relative pt-16 pb-6 sm:py-20 lg:py-40 bg-night">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-14">
        <div className="grid gap-10 sm:gap-16 lg:grid-cols-12 lg:gap-20 items-center">
          {/* Left — text block (mobile order: heading → image → divider → body) */}
          <div className="lg:col-span-6 lg:order-1">
            <span className="eyebrow">Our Approach</span>
            <h2 className="section-title mt-4 sm:mt-6 text-parchment text-3xl sm:text-4xl md:text-5xl">
              Building brands{" "}
              <span className="italic text-gold-gradient">
                from the ground up
              </span>
            </h2>

            {/* Mobile-only image, sits between heading and divider */}
            <div className="mt-6 lg:hidden">
              <div className="relative aspect-[3/2] w-full overflow-hidden shadow-frame">
                <Image
                  src="/developers-image.jpg"
                  alt="KeelCrest team at work in a private office"
                  fill
                  quality={90}
                  sizes="100vw"
                  className="object-cover"
                  style={{
                    filter:
                      "saturate(0.55) contrast(1.12) brightness(0.9) sepia(0.08)",
                  }}
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(10,8,6,0.85)_100%)]" />
              </div>
            </div>

            <div className="divider-gold mt-6 sm:mt-8" />

            <div className="mt-6 sm:mt-8 space-y-5 text-base lg:text-lg font-light leading-relaxed text-parchment/70">
              <p>
                <span className="font-display tracking-wide text-gold-gradient">
                  KEELCREST HOLDING LTD
                </span>{" "}
                is focused on building brands and developing projects from
                the ground up. Our work is defined by a direct, hands-on
                approach. We create, operate, and grow our own ventures
                with a clear long-term perspective.
              </p>
              <p>
                Rather than relying on external opportunities, we focus on
                developing ideas internally and shaping them through
                disciplined execution. Every project begins with a strong
                foundation, then evolves through careful refinement, allowing
                it to grow naturally over time. This approach enables us to
                maintain consistency, protect quality, and ensure that each
                venture reflects our standards.
              </p>
              <p>
                We believe that true value is built gradually. Growth is not
                forced or rushed, but guided by clear decisions and sustained
                effort. By remaining closely involved in every stage, from
                concept to operation, we retain full control over direction,
                structure, and development. This level of involvement allows
                us to adapt when necessary while maintaining a stable
                long-term path.
              </p>
            </div>
          </div>

          {/* Desktop-only image (right) */}
          <div className="hidden lg:col-span-6 lg:block lg:order-2">
            <div className="relative aspect-[3/2] w-full overflow-hidden shadow-frame">
              <Image
                src="/developers-image.jpg"
                alt="KeelCrest team at work in a private office"
                fill
                quality={90}
                sizes="50vw"
                className="object-cover"
                style={{
                  filter:
                    "saturate(0.55) contrast(1.12) brightness(0.9) sepia(0.08)",
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(10,8,6,0.85)_100%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
