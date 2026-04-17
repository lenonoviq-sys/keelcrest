import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-gold/15 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo.png"
                alt="Keel Crest"
                width={360}
                height={240}
                className="h-20 w-auto"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              Crafting digital excellence through premium mobile apps and
              digital products designed to elevate ambitious brands.
            </p>
          </div>

          <div>
            <h4 className="eyebrow mb-5">Navigate</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-gold transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gold transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a
                  href="mailto:hello@keelcrest.com"
                  className="hover:text-gold transition-colors"
                >
                  hello@keelcrest.com
                </a>
              </li>
              <li>+1 (415) 555&#8209;0112</li>
              <li>San Francisco · Remote Worldwide</li>
            </ul>
          </div>
        </div>

        <div className="divider-gold mt-14" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs tracking-[0.2em] uppercase text-white/40">
            © {new Date().getFullYear()} Keel Crest · All rights reserved
          </p>
          <p className="text-xs tracking-[0.2em] uppercase text-white/40">
            Designed with intention
          </p>
        </div>
      </div>
    </footer>
  );
}
