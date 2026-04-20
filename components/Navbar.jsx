"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// hideOnMobile: shown on desktop only; mobile nav keeps just Home/Leadership/Portfolio
const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About", hideOnMobile: true },
  { href: "/leadership", label: "Leadership" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact", hideOnMobile: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
              className={l.hideOnMobile ? "hidden md:list-item" : ""}
            >
              <Link
                href={l.href}
                className={`nav-link text-[14px] sm:text-[15px] md:text-[0.95rem] tracking-[0.04em] md:tracking-normal ${
                  pathname === l.href ? "active" : ""
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
