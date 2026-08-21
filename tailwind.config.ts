import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Deep navy, not pure black — keeps warmth out of the "hacker" cliché
        base: {
          950: "#050B14",
          900: "#0A121E",
          800: "#101B2B",
          700: "#1A2740",
        },
        line: "#1E2C42",
        ink: {
          DEFAULT: "#F3F6FA",
          muted: "#96A7BC",
          faint: "#5C6D82",
        },
        signal: {
          cyan: "#4CD3FF",
          blue: "#2F6BFF",
          amber: "#F5A623",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(5,11,20,0) 0%, #050B14 85%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(76, 211, 255, 0.35)",
      },
      keyframes: {
        pulseline: {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "1" },
        },
        drift: {
          "0%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(-10px,-6px)" },
          "100%": { transform: "translate(0,0)" },
        },
      },
      animation: {
        pulseline: "pulseline 3.2s ease-in-out infinite",
        drift: "drift 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
