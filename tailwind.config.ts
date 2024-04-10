import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "monterey-light": "url('/src/assets/wallpapers/monterey-light.jpg')",
        "monterey-dark": "url('/src/assets/wallpapers/monterey-dark.jpg')",
        "sonoma-light": "url('/src/assets/wallpapers/sonoma-light.png')",
        "sonoma-dark": "url('/src/assets/wallpapers/sonoma-dark.png')",
      },
    },
  },
  plugins: [],
};

export default config;
