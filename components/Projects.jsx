import Link from "next/link";

const projects = [
  {
    title: "SmartFinance",
    tag: "Fintech · iOS & Android",
    description: "A bespoke wealth management platform for discerning investors.",
    accent: "from-gold/20 via-ink to-ink",
    mock: FinanceMock,
  },
  {
    title: "Luxia Beauty",
    tag: "Luxury Commerce",
    description: "A couture beauty marketplace with an editorial soul.",
    accent: "from-gold/15 via-ink to-ink",
    mock: BeautyMock,
  },
  {
    title: "Aurum Travel",
    tag: "Hospitality · Concierge",
    description: "A private concierge companion for the modern jet-setter.",
    accent: "from-gold/25 via-ink to-ink",
    mock: TravelMock,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 bg-black">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <span className="eyebrow">Portfolio</span>
          <h2 className="section-heading mt-4 text-white">
            Highlighted <span className="gold-text italic">Projects</span>
          </h2>
          <div className="divider-gold mt-6 w-40" />
          <p className="mt-6 max-w-2xl text-white/60">
            A glimpse into the work we quietly craft for founders, brands, and
            institutions who hold design to a higher standard.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {projects.map(({ title, tag, description, accent, mock: Mock }) => (
            <article
              key={title}
              className="luxury-card group relative overflow-hidden rounded-sm"
            >
              <div
                className={`relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-b ${accent}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_110%,_rgba(212,175,55,0.25),_transparent_60%)]" />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <Mock />
                </div>
              </div>
              <div className="relative p-7">
                <p className="text-[10px] uppercase tracking-[0.35em] text-gold/70">
                  {tag}
                </p>
                <h3 className="mt-3 font-serif text-2xl text-white">{title}</h3>
                <p className="mt-3 text-sm text-white/60">{description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link href="/contact" className="gold-btn">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

function PhoneShell({ children }) {
  return (
    <div className="relative h-[85%] w-[58%] transform transition-transform duration-700 group-hover:-translate-y-1">
      <div className="absolute -inset-3 rounded-[2.4rem] bg-gold/20 blur-2xl opacity-50" />
      <div className="relative h-full w-full rounded-[2rem] border border-gold/30 bg-ink shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
        <div className="absolute left-1/2 top-2 h-4 w-16 -translate-x-1/2 rounded-full bg-black/70" />
        <div className="relative h-full w-full p-3 pt-7">
          <div className="h-full w-full rounded-[1.5rem] overflow-hidden bg-gradient-to-b from-ink-700 to-black p-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function FinanceMock() {
  return (
    <PhoneShell>
      <div className="flex h-full flex-col text-[8px]">
        <div className="flex items-center justify-between">
          <span className="text-white/70">Balance</span>
          <span className="gold-text font-semibold">$5,102.23</span>
        </div>
        <div className="mt-3 grid grid-cols-4 gap-1">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-square rounded-md border border-gold/20 bg-gold/5"
            />
          ))}
        </div>
        <div className="mt-3 rounded-md border border-gold/20 bg-gold/5 p-2">
          <div className="h-1 w-full rounded bg-gold/10" />
          <div className="mt-2 h-10 w-full rounded bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-60" />
          <div className="relative mt-1 h-10">
            <svg
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <defs>
                <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 30 L15 22 L30 26 L45 15 L60 18 L75 8 L100 12 L100 40 L0 40 Z"
                fill="url(#g1)"
              />
              <path
                d="M0 30 L15 22 L30 26 L45 15 L60 18 L75 8 L100 12"
                fill="none"
                stroke="#E9C96B"
                strokeWidth="1.2"
              />
            </svg>
          </div>
        </div>
        <div className="mt-auto space-y-1.5">
          <div className="h-2 w-4/5 rounded bg-white/10" />
          <div className="h-2 w-3/5 rounded bg-white/5" />
        </div>
      </div>
    </PhoneShell>
  );
}

function BeautyMock() {
  return (
    <PhoneShell>
      <div className="flex h-full flex-col text-[8px]">
        <div className="gold-text font-semibold text-center">Luxia Beauty</div>
        <div className="mt-2 flex-1 rounded-md bg-gradient-to-b from-gold/30 via-gold/10 to-transparent p-2">
          <div className="mx-auto h-full w-10 rounded-md bg-gradient-to-b from-gold-soft via-gold to-gold-dark opacity-80 shadow-gold" />
        </div>
        <div className="mt-2 text-center font-serif italic text-gold">
          Couture
        </div>
        <div className="mt-2 h-1.5 w-full rounded bg-white/10" />
        <div className="mt-1 h-1.5 w-4/5 rounded bg-white/5" />
        <div className="mt-3 rounded border border-gold/40 bg-gold/10 py-1 text-center text-gold">
          Add to Bag
        </div>
      </div>
    </PhoneShell>
  );
}

function TravelMock() {
  return (
    <PhoneShell>
      <div className="flex h-full flex-col text-[8px]">
        <div className="flex items-center justify-between">
          <span className="text-white/70">Aurum</span>
          <span className="gold-text">Concierge</span>
        </div>
        <div className="mt-2 aspect-video w-full rounded-md bg-gradient-to-br from-gold/30 via-gold/5 to-ink relative overflow-hidden">
          <div className="absolute bottom-1 left-1 right-1 h-4 rounded bg-black/40 backdrop-blur-sm" />
        </div>
        <div className="mt-3 space-y-1.5">
          <div className="h-2 w-full rounded bg-white/10" />
          <div className="h-2 w-4/5 rounded bg-white/5" />
          <div className="h-2 w-3/5 rounded bg-white/5" />
        </div>
        <div className="mt-auto grid grid-cols-3 gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="aspect-square rounded border border-gold/20 bg-gold/5"
            />
          ))}
        </div>
      </div>
    </PhoneShell>
  );
}
