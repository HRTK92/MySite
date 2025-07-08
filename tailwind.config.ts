import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        rounded: ["M PLUS Rounded 1c", "sans-serif"],
      },
      animation: {
        "text-focus-in": "text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both",
        "text-focus-out": "text-focus-out 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        "tracking-in-expand-fwd-bottom": "tracking-in-expand-fwd-bottom 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) both",
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        "text-focus-in": {
          "0%": {
            filter: "blur(12px)",
            opacity: "0",
          },
          "100%": {
            filter: "blur(0)",
            opacity: "1",
          },
        },
        "text-focus-out": {
          "0%": {
            filter: "blur(0)",
            opacity: "1",
          },
          "100%": {
            filter: "blur(12px)",
            opacity: "0",
          },
        },
        "tracking-in-expand-fwd-bottom": {
          "0%": {
            "letter-spacing": "-0.5em",
            transform: "translateZ(-700px) translateY(500px)",
            opacity: "0",
          },
          "40%": {
            opacity: "0.6",
          },
          "100%": {
            transform: "translateZ(0) translateY(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
