/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Open Sans"],
    },
    extend: {
      colors: {
        black: "#212121",
        white: "#FFFFFF",
        "bg-color": "#F4F5F7",
        "button-grey": "#E8E8E8",
        "border-grey": "#B6B6B6",
        "text-grey": "#7C7C7C",
      },
    },
  },
  plugins: [],
};
