import type { Config } from "tailwindcss";

const config: Config = {
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
        navy: {
          DEFAULT: '#0a0e27',
          dark: '#05070f',
          light: '#141938',
        },
        pink: {
          DEFAULT: '#ff0080',
          light: '#ff3399',
          dark: '#cc0066',
        },
        purple: {
          DEFAULT: '#7928ca',
          light: '#9945ff',
          dark: '#5b1fa3',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-pink-purple': 'linear-gradient(135deg, #ff0080 0%, #7928ca 100%)',
      },
    },
  },
  plugins: [],
};
export default config;

