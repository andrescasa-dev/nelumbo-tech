import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#EBEFF4",
        primary: {
          100: "#0E6BFD",
          200: "#004AC1",
          300: "#0744A8",
          400: "#0038AE",
          500: "#013E9B",
        },
        secondary: {
          400: "#FFD300",
          500: "#D2AE00",
        },
        accent: {
          400: "#E6406D",
        },
        muted: {
          300: "#D8E0E9",
          400: "#7D879C",
          500: "#4B566B",
        },
        foreground: {
          400: "#2B3445",
          500: "#080808",
        },
      },
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        "3xl": "1639px",
      },
      boxShadow: {
        soft: "0px 3px 6px #00000029",
      },
      // @ts-expect-error override the md key is intended
      screens: {
        md: "880px",
      },
    },
  },
  plugins: [],
};
export default config;
