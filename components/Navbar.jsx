"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/leadership", label: "Leadership" },
  { href: "/contact", label: "Contact" },
];

// Keep in sync with the mobile-menu CSS transition duration below.
const MOBILE_MENU_CLOSE_MS = 320;

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close the mobile menu when the user taps anywhere outside the header.
  useEffect(() => {
    if (!open) return;
    const handleOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [open]);

  // Close menu first, wait for the slide/fade out, then navigate — prevents the new page painting behind an open menu.
  const handleMobileNav = (e, href) => {
    e.preventDefault();
    if (href === pathname) {
      setOpen(false);
      return;
    }
    setOpen(false);
    setTimeout(() => {
      router.push(href);
    }, MOBILE_MENU_CLOSE_MS);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "backdrop-blur-xl bg-night/85 border-b border-gold/10"
          : "bg-gradient-to-b from-night/60 via-night/20 to-transparent"
      }`}
    >
      <nav className="mx-auto flex h-24 max-w-[1400px] items-center justify-between px-8 lg:px-14">
        {/* Brand mark — full logo */}
        <Link href="/" className="group flex items-center">
          <Image
            src="/logo.png"
            alt="KeelCrest Holding LTD"
            width={300}
            height={200}
            priority
            quality={90}
            sizes="(min-width: 768px) 96px, 84px"
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
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative h-10 w-10 text-gold"
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

      {/* Mobile menu — transform+opacity keeps the blur layer a constant size, so it doesn't re-blur mid-animation */}
      <div
        className={`md:hidden absolute inset-x-0 top-full bg-night/60 backdrop-blur-xl border-t border-gold/10 transition-[opacity,transform] duration-300 ease-out will-change-[opacity,transform] ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="px-8 py-8">
          <ul className="flex flex-col gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={(e) => handleMobileNav(e, l.href)}
                  tabIndex={open ? 0 : -1}
                  aria-hidden={!open}
                  className={`nav-link block text-lg ${l.href === "/" ? "active" : ""}`}
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
