/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#FFF7F2",
          accent: "#E15A29",
          navy: "#1E3A5F",
        },
      },
      fontFamily: {
        sans: ['Instrument Sans', 'ui-sans-serif', 'system-ui'],
        display: ['Island Sans', 'Instrument Sans', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
};
