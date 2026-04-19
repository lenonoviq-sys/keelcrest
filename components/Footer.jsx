import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-night border-t border-gold/10">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-14 py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand + tagline */}
          <div className="md:col-span-5 flex flex-col items-center text-center md:items-start md:text-left">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo.png"
                alt="KeelCrest Holding LTD"
                width={600}
                height={400}
                quality={100}
                className="h-20 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-parchment/50">
              Strategic Direction Across Every Venture
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <p className="label-luxury mb-6">Navigation</p>
            <ul className="space-y-3 text-sm text-parchment/70">
              <li>
                <Link href="/" className="transition-colors hover:text-gold-light">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-gold-light">
                  About
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="transition-colors hover:text-gold-light">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-gold-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="label-luxury mb-6">Contact</p>
            <ul className="space-y-3 text-sm text-parchment/70">
              <li>
                <a
                  href="mailto:info@keelcrest.com"
                  className="transition-colors hover:text-gold-light"
                >
                  info@keelcrest.com
                </a>
              </li>
              <li className="text-parchment/50">Private Office · By Appointment</li>
            </ul>
          </div>
        </div>

        {/* Soft gold divider */}
        <div className="mt-16 h-px w-full bg-gold-sheen opacity-40" />

        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-center text-[10px] leading-relaxed text-parchment/35 md:flex-row md:items-center md:gap-2 md:text-left md:text-xs">
          <p className="tracking-[0.12em] uppercase md:tracking-[0.15em]">
            © {new Date().getFullYear()} KeelCrest Holding LTD <span className="block md:inline">All rights reserved</span>
          </p>
          <p className="tracking-[0.12em] uppercase md:tracking-[0.15em]">
            Defined by vision · Driven by excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
