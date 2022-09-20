/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainWhite': "#C4CAC6",
        "primary": "#1F2A37",
        "secondary": "#623027",
      },
    },
  },
  plugins: [],
}
