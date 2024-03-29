import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/react');

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brandColor: 'var(--brandColor)',
        yellowBg: 'var(--yellowBg)',
        darkBg: 'var(--darkBg)',
      },
    },
  },
  plugins: [nextui()],
};
export default config;
