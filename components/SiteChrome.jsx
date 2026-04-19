"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import IntroAnimation from "./IntroAnimation";
import SwipeNav from "./SwipeNav";

// Paths that should render WITHOUT the main nav/footer (e.g. sign-in).
const STANDALONE_PREFIXES = ["/welcome"];

export default function SiteChrome({ children }) {
  const pathname = usePathname() || "/";
  const standalone = STANDALONE_PREFIXES.some((p) => pathname.startsWith(p));

  if (standalone) return <main className="relative">{children}</main>;

  return (
    <>
      <IntroAnimation />
      <SwipeNav />
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
    </>
  );
}
