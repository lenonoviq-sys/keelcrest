import Image from "next/image";
import ImageSlot from "@/components/ImageSlot";

const leaders = [
  {
    name: "Ahmad Haidar",
    role: "Founder & CEO",
    bio: "Strategic leadership with a forward-thinking approach.",
    image: "/leader-01.png",
  },
  {
    name: "Aisha Al Wayel",
    role: "COO",
    bio: "Driving operational excellence and innovation.",
    image: "/leader-02.png",
    scale: 1.2,
  },
  {
    name: "Khaled Abdulaziz Aljasem",
    role: "Director",
    bio: "Guiding strategic direction across client engagements.",
    image: "/leader-03.png",
    transform: "translateY(-8%) scale(1.18)",
    origin: "center top",
  },
  {
    name: "Hesham Al Emadi",
    role: "Co-Founder & Director",
    bio: "Building long-term client relationships with disciplined stewardship.",
    image: "/leader-04.png",
  },
  {
    name: "Majid Dalvi",
    role: "CTO",
    bio: "Architecting secure, resilient systems for modern wealth.",
    image: "/leader-05.png",
    scale: 1.2,
  },
];

export default function Leadership() {
  return (
    <section className="relative py-28 lg:py-40 bg-night">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold-sheen opacity-30" />

      <div className="mx-auto max-w-[1400px] px-8 lg:px-14">
        {/* Section header — centered */}
        <div className="flex flex-col items-center text-center mb-20">
          <Image
            src="/logo.png"
            alt="Keel Crest Ltd."
            width={600}
            height={400}
            quality={100}
            className="h-24 md:h-28 w-auto -mb-2"
          />

          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-10 bg-gold/60" />
            <span className="eyebrow">Leadership</span>
            <span className="h-px w-10 bg-gold/60" />
          </div>

          <h2 className="section-title text-parchment text-4xl md:text-5xl lg:text-6xl">
            The{" "}
            <span className="italic text-gold-gradient">Visionaries</span>{" "}
            of Keel Crest
          </h2>

          <p className="mt-6 font-display italic text-xl md:text-2xl text-parchment/65">
            Defined by vision. Driven by excellence.
          </p>
        </div>

        {/* Leadership grid — 5 columns at xl, matched sizing */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {leaders.map((leader, i) => (
            <article key={i} className="leader-card group overflow-hidden">
              {/* Portrait — identical aspect across all cards */}
              <div className="relative aspect-[3/4] overflow-hidden bg-black">
                {leader.image ? (
                  <Image
                    src={leader.image}
                    alt={`${leader.name} — ${leader.role}`}
                    fill
                    quality={95}
                    sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    style={{
                      objectPosition: leader.position ?? "center 25%",
                      transform:
                        leader.transform ??
                        (leader.scale ? `scale(${leader.scale})` : undefined),
                      transformOrigin: leader.origin ?? "center 25%",
                      filter:
                        "contrast(1.06) saturate(0.82) brightness(0.94) sepia(0.08)",
                    }}
                    className="object-cover"
                  />
                ) : (
                  <ImageSlot
                    label={`PORTRAIT ${String(i + 1).padStart(2, "0")}`}
                    description={`${leader.role} — formal corporate portrait, matched lighting and background across all five leaders.`}
                    filename={leader.filename}
                    aspect="aspect-auto h-full"
                    className="h-full transition-transform duration-[1500ms] group-hover:scale-105"
                  />
                )}

                {/* Soft dark fade at bottom so text block reads cleanly */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>

              {/* Text block */}
              <div className="p-7">
                <h3 className="font-display text-2xl font-light text-parchment">
                  {leader.name}
                </h3>
                <p className="mt-1 text-sm tracking-[0.15em] uppercase text-gold/80">
                  {leader.role}
                </p>
                <div className="mt-5 h-px w-10 bg-gold/40" />
                <p className="mt-5 text-sm leading-relaxed text-parchment/55">
                  {leader.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
