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
        glow: "0 30px 110px rgba(30, 94, 255, 0.2)",
      },
      colors: {
        ivory: "#f8fbff",
        graphite: "#0c1b33",
        petrol: "#1e5eff",
        saffron: "#7fb7ff",
        mist: "#e7f1ff",
        nocturne: "#081224",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(12,27,51,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(12,27,51,0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
