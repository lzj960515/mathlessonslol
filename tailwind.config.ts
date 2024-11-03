import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: '#f0f9f0',
          100: '#dcefdc',
          200: '#bce0bc',
          300: '#92cc92',
          400: '#64b264',
          500: '#48994c',
          600: '#3d7c3f',
          700: '#366436',
          800: '#2f4f2f',
          900: '#1a3320',
        }
      },
    },
  },
  plugins: [],
};
export default config;
