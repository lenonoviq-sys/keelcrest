"use client";

import { useMemo } from "react";

export default function FloatingParticles({ count = 24, className = "" }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const radius = 35 + Math.random() * 35;
      return {
        id: i,
        top: 50 + Math.sin(angle) * radius,
        left: 50 + Math.cos(angle) * radius,
        size: 1.5 + Math.random() * 3,
        delay: Math.random() * 6,
        duration: 5 + Math.random() * 6,
        drift: Math.random() * 20 - 10,
        opacity: 0.3 + Math.random() * 0.6,
      };
    });
  }, [count]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute block rounded-full"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: "radial-gradient(circle, #F4E4A1 0%, #D4AF37 55%, transparent 75%)",
            boxShadow: "0 0 10px 1px rgba(244, 228, 161, 0.6)",
            opacity: p.opacity,
            animation: `particleFloat ${p.duration}s ease-in-out ${p.delay}s infinite`,
            "--drift": `${p.drift}px`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes particleFloat {
          0%, 100% {
            transform: translate(0, 0) scale(0.9);
            opacity: 0.2;
          }
          50% {
            transform: translate(var(--drift), -24px) scale(1.2);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
