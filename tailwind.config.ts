import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "none",
      },
      colors: {
        ivory: "#f2ede6",
        graphite: "#1a1108",
        petrol: "#c84b31",
        "petrol-dark": "#a33a22",
        saffron: "#d4a574",
        mist: "#e8e0d5",
        nocturne: "#0e0c0a",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(26,17,8,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(26,17,8,0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
