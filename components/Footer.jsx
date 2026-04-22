"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "./I18nProvider";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="relative bg-night border-t border-gold/10">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-14 py-12 sm:py-16 lg:py-20">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-12">
          {/* Brand + tagline */}
          <div className="md:col-span-5 flex flex-col items-center text-center md:items-start md:text-left">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo.png"
                alt="KeelCrest Holding LTD"
                width={600}
                height={400}
                quality={100}
                className="h-16 sm:h-20 w-auto"
              />
            </Link>
            <p className="mt-4 sm:mt-5 max-w-sm text-sm leading-relaxed text-parchment/50">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <p className="label-luxury mb-4 sm:mb-6">{t("footer.navigation")}</p>
            <ul className="space-y-3 text-sm text-parchment/70">
              <li>
                <Link href="/" className="transition-colors hover:text-gold-light">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-gold-light">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="transition-colors hover:text-gold-light">
                  {t("nav.leadership")}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="transition-colors hover:text-gold-light">
                  {t("nav.portfolio")}
                </Link>
              </li>
              <li className="hidden md:list-item">
                <Link href="/contact" className="transition-colors hover:text-gold-light">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="label-luxury mb-4 sm:mb-6">{t("footer.contact_us")}</p>
            <ul className="space-y-3 text-sm text-parchment/70">
              <li className="md:hidden">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-2.5 py-1 border border-gold/40 text-sm text-gold transition-colors hover:text-gold-light hover:border-gold/70"
                >
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@keelcrest.com"
                  className="transition-colors hover:text-gold-light"
                >
                  info@keelcrest.com
                </a>
              </li>
              <li className="text-parchment/50">{t("footer.appointment")}</li>
            </ul>

            {/* Social icons — placeholder hrefs, swap when accounts are live */}
            <ul className="mt-5 flex items-center gap-4">
              {[
                { name: "Facebook", src: "/social-facebook.png", size: "h-5 w-5", href: "#" },
                { name: "X", src: "/social-twitter.png", size: "h-5 w-5", href: "#" },
                { name: "LinkedIn", src: "/social-linkedin.png", size: "h-5 w-5", href: "#" },
                { name: "Instagram", src: "/social-instagram.png", size: "h-6 w-6", href: "#" },
              ].map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    aria-label={s.name}
                    className="block opacity-70 transition-opacity duration-300 hover:opacity-100"
                  >
                    <Image
                      src={s.src}
                      alt=""
                      width={512}
                      height={512}
                      quality={95}
                      className={`${s.size} object-contain`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Soft gold divider */}
        <div className="mt-10 sm:mt-16 h-px w-full bg-gold-sheen opacity-40" />

        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-center text-[10px] leading-relaxed text-parchment/35 md:flex-row md:items-center md:gap-2 md:text-left md:text-xs">
          <p className="tracking-[0.12em] uppercase md:tracking-[0.15em]">
            © {new Date().getFullYear()} KeelCrest Holding LTD <span className="block md:inline">{t("footer.rights")}</span>
          </p>
          <p className="tracking-[0.12em] uppercase md:tracking-[0.15em]">
            {t("footer.motto")}
          </p>
        </div>
      </div>
    </footer>
  );
}
