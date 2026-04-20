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
    text: "We treat every product as a signature work, refined, tested, and taken to market with the precision that turns a promising concept into a lasting leader.",
  },
];

export default function Principles() {
  return (
    <section className="relative pt-6 pb-16 sm:py-20 lg:py-36 bg-night">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-14">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-10 bg-gold/60" />
            <span className="eyebrow">What guides us</span>
            <span className="h-px w-10 bg-gold/60" />
          </div>
          <h2 className="section-title text-parchment text-3xl sm:text-4xl md:text-5xl">
            The principles behind every{" "}
            <span className="italic text-gold-gradient">venture we build</span>
          </h2>
        </div>

        <div className="grid gap-px bg-gold/10 md:grid-cols-3 border-y border-gold/10">
          {pillars.map((p) => (
            <div
              key={p.label}
              className="bg-night px-6 py-10 text-center sm:px-8 sm:py-12 md:text-left lg:px-12 lg:py-16 transition-colors duration-700 hover:bg-bronze-900"
            >
              <p className="label-luxury">{p.label}</p>
              <div className="divider-gold mx-auto mt-4 mb-5 md:mx-0 md:mt-5 md:mb-6" />
              <p className="text-base leading-relaxed text-parchment/70">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
