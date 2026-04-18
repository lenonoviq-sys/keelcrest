/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core surfaces — deep blacks
        night: {
          DEFAULT: "#0A0806",
          900: "#050403",
          800: "#0A0806",
          700: "#12100C",
          600: "#1A1712",
          500: "#252017",
        },
        // Dark bronze — the second mood color
        bronze: {
          DEFAULT: "#3D2F1A",
          900: "#241B0E",
          800: "#2E2413",
          700: "#3D2F1A",
          600: "#524024",
          500: "#6B5530",
          400: "#8A6F3F",
        },
        // Soft gold — refined, muted, not vibrant
        gold: {
          DEFAULT: "#C9A961",
          light: "#E0C88A",
          muted: "#A68B47",
          dark: "#7A6837",
          soft: "#B89A54",
        },
        parchment: "#E8DCC4",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        refined: "0.02em",
        eyebrow: "0.35em",
      },
      boxShadow: {
        "gold-soft": "0 0 60px -20px rgba(201, 169, 97, 0.35)",
        "frame": "0 30px 80px -30px rgba(0,0,0,0.8)",
      },
      backgroundImage: {
        "gold-sheen": "linear-gradient(90deg, transparent 0%, rgba(201,169,97,0.5) 50%, transparent 100%)",
        "bronze-fade": "linear-gradient(180deg, #0A0806 0%, #1A1712 50%, #0A0806 100%)",
        "hero-overlay": "linear-gradient(180deg, rgba(10,8,6,0.3) 0%, rgba(10,8,6,0.55) 60%, rgba(10,8,6,0.92) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 1s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fadeIn 1.2s ease-out both",
        "slow-zoom": "slowZoom 20s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
      },
    },
  },
  plugins: [],
};
