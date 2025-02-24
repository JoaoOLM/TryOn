import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brown: {
          600: "#8B4513",
          500: "#A0522D",
        },
        black: {
          500: "#4F4F4F",
          700: "#333333",
          800: "#1A1A1A",
          900: "#000000",
        },
        yellow: {
          400: "#FFD700",
          500: "#FFC107",
          600: "#FFA000",
        },
        white: {
          900: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
