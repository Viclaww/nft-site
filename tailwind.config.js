/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "san-serif"],
        "stretch-pro": ["Stretch Pro", "san-serif"],
      },
      colors: {
        "blue-main": "#010125",
        "nft-card-blue-1": "#2E2F4D",
        "nft-card-blue-2": "#262745",
        "purple-primary": "#7531CB",
      },
    },
  },
  plugins: [],
};
