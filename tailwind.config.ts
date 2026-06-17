import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#3B82F6",
          hover: "#2563EB",
        },
        night: {
          DEFAULT: "#0D0E12",
          soft: "#15161C",
        },
        ink: {
          DEFAULT: "#0F172A",
          soft: "#6B7280",
          light: "#9CA3AF",
        },
        card: {
          DEFAULT: "#FAFAFA",
          border: "#E5E7EB",
        },
        success: "#10B981",
        warning: "#F59E0B",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        display: [
          "var(--font-grotesk)",
          "var(--font-jakarta)",
          "system-ui",
          "sans-serif",
        ],
      },
      maxWidth: {
        "8xl": "88rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", opacity: "0.7" },
          "70%": { transform: "scale(1.3)", opacity: "0" },
          "100%": { transform: "scale(1.3)", opacity: "0" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        shimmer: "shimmer 1.6s infinite",
        float: "float 5s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.4,0,0.6,1) infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
