import { text } from "stream/consumers";
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
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        textTertiary: "var(--text-tertiary)",
        buttonBackground: "var(--button-background)",
      },
      fontFamily: {
        manrope: ["Manrope", "serif"],
        openSans: ["Open Sans", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
