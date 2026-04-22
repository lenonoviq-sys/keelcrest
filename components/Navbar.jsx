"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useI18n } from "./I18nProvider";

// hideOnMobile: shown on desktop only.
// mobileOrder: CSS flex order on mobile (resets on md+), so the mobile nav reads
// Home → Portfolio → Leadership while desktop keeps the DOM order.
const links = [
  { href: "/", tKey: "nav.home" },
  { href: "/about", tKey: "nav.about", hideOnMobile: true },
  { href: "/leadership", tKey: "nav.leadership", mobileOrder: "order-3" },
  { href: "/portfolio", tKey: "nav.portfolio", mobileOrder: "order-2" },
  { href: "/contact", tKey: "nav.contact", hideOnMobile: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const selectLang = (next) => {
    if (next === lang) return;
    setLang(next);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "backdrop-blur-xl bg-night/85 border-b border-gold/10"
          : "bg-gradient-to-b from-night/60 via-night/20 to-transparent"
      }`}
    >
      <nav className="relative mx-auto flex h-16 md:h-24 max-w-[1400px] items-center md:justify-between px-2 sm:px-4 md:px-8 lg:px-14">
        {/* Brand mark — full logo */}
        <Link href="/" className="group flex items-center shrink-0 -ml-1 md:ml-0">
          <Image
            src="/logo.png"
            alt="KeelCrest Holding LTD"
            width={300}
            height={200}
            priority
            quality={90}
            sizes="(min-width: 768px) 96px, 64px"
            className="h-10 md:h-16 w-auto transition-opacity duration-500 group-hover:opacity-90"
          />
        </Link>

        {/* Nav links — centered on mobile, right-aligned on desktop */}
        <ul className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4 md:static md:left-auto md:translate-x-0 md:gap-10 lg:gap-12">
          {links.map((l) => (
            <li
              key={l.href}
              className={`${l.hideOnMobile ? "hidden md:list-item" : ""} ${
                l.mobileOrder ? `${l.mobileOrder} md:order-none` : ""
              }`}
            >
              <Link
                href={l.href}
                className={`nav-link ${pathname === l.href ? "active" : ""}`}
              >
                {t(l.tKey)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Language toggle — right side, desktop + mobile */}
        <div
          className="ml-auto md:ml-0 flex items-center gap-1.5 md:gap-2 shrink-0"
          role="group"
          aria-label="Language"
        >
          <button
            type="button"
            onClick={() => selectLang("en")}
            aria-pressed={lang === "en"}
            className={`lang-btn ${lang === "en" ? "active" : ""}`}
          >
            EN
          </button>
          <span className="lang-sep" aria-hidden="true">|</span>
          <button
            type="button"
            onClick={() => selectLang("ar")}
            aria-pressed={lang === "ar"}
            className={`lang-btn ${lang === "ar" ? "active" : ""}`}
          >
            AR
          </button>
        </div>
      </nav>
    </header>
  );
}
