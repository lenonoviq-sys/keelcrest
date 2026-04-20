"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

// Navigation order matches the Navbar. Swipe-left = next, swipe-right = previous.
const order = ["/", "/leadership", "/portfolio"];

// Thresholds chosen to avoid false positives from scrolling, taps, or text selection.
const MIN_X = 80; // px — must travel this far horizontally
const MAX_Y = 60; // px — disqualifies vertical scrolls
const MAX_MS = 600; // ms — disqualifies long drags (selecting, pinching)
const EDGE_GUTTER = 24; // px — leave the edges to the browser's back-swipe gesture

export default function SwipeNav() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Desktop has no touch events that matter; also keeps the listener off when not needed.
    const mql = window.matchMedia("(max-width: 767px)");
    if (!mql.matches) return;

    let startX = 0;
    let startY = 0;
    let startTime = 0;
    let tracking = false;

    const onStart = (e) => {
      if (e.touches.length !== 1) {
        tracking = false;
        return;
      }
      const t = e.touches[0];
      // Skip gestures that begin from the very edge — those belong to the browser (back/forward).
      if (t.clientX < EDGE_GUTTER || t.clientX > window.innerWidth - EDGE_GUTTER) {
        tracking = false;
        return;
      }
      startX = t.clientX;
      startY = t.clientY;
      startTime = Date.now();
      tracking = true;
    };

    const onEnd = (e) => {
      if (!tracking) return;
      tracking = false;
      const t = e.changedTouches[0];
      const dx = t.clientX - startX;
      const dy = t.clientY - startY;
      const dt = Date.now() - startTime;

      if (Math.abs(dx) < MIN_X) return;
      if (Math.abs(dy) > MAX_Y) return;
      if (dt > MAX_MS) return;

      const idx = order.indexOf(pathname);
      if (idx === -1) return;

      if (dx < 0 && idx < order.length - 1) {
        router.push(order[idx + 1]);
      } else if (dx > 0 && idx > 0) {
        router.push(order[idx - 1]);
      }
    };

    document.addEventListener("touchstart", onStart, { passive: true });
    document.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      document.removeEventListener("touchstart", onStart);
      document.removeEventListener("touchend", onEnd);
    };
  }, [pathname, router]);

  return null;
}
