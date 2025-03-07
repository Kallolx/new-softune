import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#87CEEB", // skyblue
          light: "#A7DFFF",
          dark: "#5BA3C7",
        },
        secondary: {
          DEFAULT: "#000000", // black
          light: "#333333",
          dark: "#000000",
        },
        background: {
          DEFAULT: "#FFFFFF", // white
          dark: "#F5F5F5",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)"],
        secondary: ["var(--font-chakra-petch)"],
      },
    },
  },
  plugins: [],
};

export default config; 