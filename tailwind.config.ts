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
      },
      backgroundImage:{
        'light-gradient': 'linear-gradient(to bottom, rgba(206,220,231,1) 0%,rgba(89,106,114,1) 100%)'
      }
    },
  },
  plugins: [],
} satisfies Config;
