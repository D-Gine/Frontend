import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./interfaces/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        contrast: "rgb(var(--contrast) / <alpha-value>)",
        "bg-primary": "rgb(var(--color-background-primary) / <alpha-value>)",
        "bg-secondary":
          "rgb(var(--color-background-secondary) / <alpha-value>)",
        "bg-contrast": "rgb(var(--color-background-contrast) / <alpha-value>)",
        "text-primary": "rgb(var(--color-text-primary) / <alpha-value>)",
        "text-secondary": "rgb(var(--color-text-secondary) / <alpha-value>)",
        "text-contrast": "rgb(var(--color-text-contrast) / <alpha-value>)",
      },
    },
  },
};

export default config;
