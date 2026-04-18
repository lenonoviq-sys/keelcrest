"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-night/95 border-b border-gold/10"
          : "bg-gradient-to-b from-night/60 via-night/20 to-transparent"
      }`}
    >
      <nav className="mx-auto flex h-24 max-w-[1400px] items-center justify-between px-8 lg:px-14">
        {/* Brand mark — full logo */}
        <Link href="/" className="group flex items-center">
          <Image
            src="/logo.png"
            alt="KeelCrest Holding LTD."
            width={600}
            height={400}
            priority
            quality={100}
            className="h-14 md:h-16 w-auto transition-opacity duration-500 group-hover:opacity-90"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-12">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`nav-link ${pathname === l.href ? "active" : ""}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile trigger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative h-10 w-10 text-gold touch-manipulation [-webkit-tap-highlight-color:transparent]"
        >
          <span
            className={`absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 bg-current transition-all duration-500 ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 bg-current transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 bg-current transition-all duration-500 ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-night/90 backdrop-blur-xl border-t border-gold/10 transition-[opacity,transform] duration-300 ease-out will-change-[opacity,transform] ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="px-8 py-8">
          <ul className="flex flex-col gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`nav-link block text-lg ${pathname === l.href ? "active" : ""}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
