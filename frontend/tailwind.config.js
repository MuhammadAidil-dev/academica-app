/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#001F3F',
        background: '#F5F7F8',
        dark: '#0f172a',
      },
      fontFamily: {
        lora: ['Lora', 'sans-serif'],
      },
      backgroundImage: {
        decorative: "url('/assets/decorative-bg.png')",
      },
    },
  },
  plugins: [],
};
