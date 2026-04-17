import Image from "next/image";

export const metadata = {
  title: "About — Keel Crest",
  description:
    "Keel Crest is a premium digital studio crafting exceptional mobile apps and digital products with design-led precision.",
};

const principles = [
  {
    title: "Craft",
    text: "Every pixel, line of code, and interaction is measured, refined, and considered.",
  },
  {
    title: "Clarity",
    text: "We distill ambition into products that feel inevitable in their simplicity.",
  },
  {
    title: "Longevity",
    text: "We build systems designed to endure — architected for scale, grace, and evolution.",
  },
];

const values = [
  { number: "01", title: "Discovery", text: "We begin by listening — mapping ambition, audience, and architecture." },
  { number: "02", title: "Design", text: "Concepts refined in shadow and light, exploring every considered detail." },
  { number: "03", title: "Development", text: "Engineered in-house by senior craftspeople. No shortcuts, no compromises." },
  { number: "04", title: "Delivery", text: "A quiet launch. A lasting partnership. Continuous elevation." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-24 bg-black">
        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
          <span className="eyebrow">The studio</span>
          <h1 className="section-heading mt-5 text-white">
            Designing the{" "}
            <span className="gold-text italic">quiet luxury</span>{" "}
            <br className="hidden md:block" />
            of modern software.
          </h1>
          <div className="divider-gold mx-auto mt-8 w-40" />
          <p className="mx-auto mt-8 max-w-2xl text-white/70 leading-relaxed">
            Keel Crest is a boutique digital studio serving a small portfolio of
            ambitious founders, heritage brands, and forward-looking
            institutions. We deliver the unseen detail — the millisecond of
            grace that separates the ordinary from the exceptional.
          </p>
        </div>
      </section>

      <section className="relative py-20 bg-black">
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <div className="relative mx-auto w-full max-w-[420px]">
            <Image
              src="/logo.png"
              alt="Keel Crest"
              width={1536}
              height={1024}
              quality={100}
              className="h-auto w-full object-contain"
            />
          </div>

          <div>
            <span className="eyebrow">Our philosophy</span>
            <h2 className="section-heading mt-4 text-white">
              A studio of <span className="gold-text italic">few</span>, for
              clients of <span className="gold-text italic">ambition</span>.
            </h2>
            <div className="divider-gold mt-6 w-32" />
            <p className="mt-6 text-white/70 leading-relaxed">
              We believe great digital products are not manufactured — they are
              cultivated. Rooted in strategy, shaped by design, and delivered by
              hands that care deeply about what they leave behind.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {principles.map((p) => (
                <div
                  key={p.title}
                  className="luxury-card rounded-sm p-5"
                >
                  <h3 className="font-serif text-xl gold-text">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-28 bg-black">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col items-center text-center">
            <span className="eyebrow">How we work</span>
            <h2 className="section-heading mt-4 text-white">
              Our <span className="gold-text italic">Process</span>
            </h2>
            <div className="divider-gold mt-6 w-40" />
          </div>

          <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.number}
                className="luxury-card group relative rounded-sm p-8"
              >
                <p className="font-serif text-5xl gold-text opacity-40 transition-opacity duration-500 group-hover:opacity-100">
                  {v.number}
                </p>
                <h3 className="mt-4 font-serif text-2xl text-white">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28 bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col items-center text-center mb-14">
            <span className="eyebrow">Leadership</span>
            <p className="mt-6 font-serif font-light leading-[1.35] text-2xl md:text-3xl lg:text-4xl max-w-4xl text-white/90">
              Leadership driven by{" "}
              <span className="gold-text italic">expertise</span>, built on{" "}
              <span className="gold-text italic">discipline</span>, and guided
              by <span className="gold-text italic">long-term vision</span>.
            </p>
            <div className="divider-gold mt-8 w-40" />
          </div>

          <div className="relative overflow-hidden rounded-sm border border-gold/25 bg-black">
            <Image
              src="/owners.jpg"
              alt="Keel Crest leadership team"
              width={2048}
              height={820}
              quality={100}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
