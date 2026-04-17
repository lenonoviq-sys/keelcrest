import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-sm border border-gold/25 bg-gradient-to-br from-ink-700 via-ink to-black p-12 md:p-20 text-center shadow-gold-lg">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 right-1/3 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.6)_100%)]" />

          <div className="relative">
            <span className="eyebrow">Ready to begin</span>
            <h2 className="section-heading mt-5 text-white">
              Let&rsquo;s Build Your{" "}
              <span className="gold-text italic">Next App</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-white/60">
              Partner with a studio that treats your product like an heirloom —
              refined, considered, and built to last.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="gold-btn-solid">
                Start Your Project
              </Link>
              <Link href="/about" className="gold-btn">
                Our Approach
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
