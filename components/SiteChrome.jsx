"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import IntroAnimation from "./IntroAnimation";
import SwipeNav from "./SwipeNav";
import { I18nProvider } from "./I18nProvider";

// Paths that should render WITHOUT the main nav/footer (e.g. sign-in).
const STANDALONE_PREFIXES = ["/welcome"];

export default function SiteChrome({ children }) {
  const pathname = usePathname() || "/";
  const standalone = STANDALONE_PREFIXES.some((p) => pathname.startsWith(p));

  if (standalone) {
    return (
      <I18nProvider>
        <main className="relative">{children}</main>
      </I18nProvider>
    );
  }

  return (
    <I18nProvider>
      <IntroAnimation />
      <SwipeNav />
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
    </I18nProvider>
  );
}
