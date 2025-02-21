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
          700: "#333333",
          800: "#1A1A1A",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
