import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        alfaBordo: '#8B1A1A',
      },
    },
  },
  plugins: [],
};
export default config;