"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function IntroAnimation() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // On refresh: if user landed on a non-home page, swap to home behind the intro overlay. Deferred one frame so hydration/first paint stabilizes before the route change.
    const path = window.location.pathname;
    let rafId;
    if (path !== "/" && path !== "") {
      rafId = requestAnimationFrame(() => router.replace("/"));
    }

    const fadeTimer = setTimeout(() => setFading(true), 2500);
    const unmountTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = originalOverflow;
    }, 3400);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, [router]);

  if (!visible) return null;

  return (
    <div
      className={`intro-overlay fixed inset-0 z-[100] flex items-center justify-center bg-night transition-opacity duration-[900ms] ease-out ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* Soft gold halo behind the logo */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,169,97,0.18)_0%,transparent_65%)] animate-intro-halo" />

      {/* Horizontal gold line that draws in then recedes before the logo appears */}
      <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[28vh] h-px bg-gradient-to-r from-transparent via-gold-light to-transparent animate-intro-line" />

      {/* Logo */}
      <div className="relative animate-intro-logo">
        <Image
          src="/keelcrest-logo.png"
          alt="KeelCrest Holding LTD"
          width={1536}
          height={1024}
          priority
          quality={100}
          className="w-[85vw] max-w-[520px] md:max-w-[620px] h-auto"
        />
      </div>

    </div>
  );
}
