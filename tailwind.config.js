/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        youtube: "#0F0F0F",
        "youtube-hover": "#3F3F3F",
      },
      colors: {
        primary: "#F1F1F1",
      },
    },
  },
  plugins: [],
};
