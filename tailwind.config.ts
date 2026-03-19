import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0f",
        bg2: "#111118",
        bg3: "#16161f",
        card: "#1a1a26",
        accent: "#6c63ff",
        accent2: "#a78bfa",
        accent3: "#38bdf8",
        "text-primary": "#f0f0f8",
        "text-secondary": "#9090b0",
        "text-muted": "#5a5a7a",
        green: "#34d399",
        amber: "#fbbf24",
        pink: "#f472b6",
        border: "rgba(255,255,255,0.07)",
        border2: "rgba(255,255,255,0.12)",
      },
      fontFamily: {
        head: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      fontSize: {
        "fluid-hero":  ["clamp(40px, 8vw, 96px)",  { lineHeight: "1.0" }],
        "fluid-h2":    ["clamp(28px, 4vw, 48px)",   { lineHeight: "1.1" }],
        "fluid-h3":    ["clamp(20px, 2.5vw, 32px)", { lineHeight: "1.2" }],
        "fluid-body":  ["clamp(13px, 1.5vw, 16px)", { lineHeight: "1.75" }],
        "fluid-sm":    ["clamp(11px, 1.2vw, 13px)", { lineHeight: "1.6" }],
        "fluid-badge": ["clamp(10px, 1.1vw, 12px)", { lineHeight: "1" }],
      },
      borderRadius: {
        card: "12px",
        card2: "20px",
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #a78bfa 0%, #38bdf8 100%)",
        "accent-gradient-h": "linear-gradient(90deg, #6c63ff, #38bdf8)",
      },
    },
  },
  plugins: [],
};
export default config;
