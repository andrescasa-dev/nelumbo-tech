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
      },
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
