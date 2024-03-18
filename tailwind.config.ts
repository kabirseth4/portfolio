import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "desktop-dark": "url('/src/assets/wallpapers/macos-monterey-dark.jpg')",
      },
    },
  },
  plugins: [],
};

export default config;
