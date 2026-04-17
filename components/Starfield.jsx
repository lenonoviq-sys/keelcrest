"use client";

import { useMemo } from "react";

export default function Starfield({ count = 60, className = "" }) {
  const stars = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 4,
      duration: 2.5 + Math.random() * 4,
      opacity: 0.3 + Math.random() * 0.7,
    }));
  }, [count]);

  return (
    <div className={`stars ${className}`} aria-hidden="true">
      {stars.map((s) => (
        <span
          key={s.id}
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            opacity: s.opacity,
          }}
        />
      ))}
    </div>
  );
}
