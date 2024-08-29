/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        black: {
          lighter: "#212121",
          default: "#000000",
        },
        white: "#FFFFFF",
        "bg-color": "#F4F5F7",
        "button-grey": "#E8E8E8",
        "border-grey": "#B6B6B6",
        "text-grey": "#7C7C7C",
        "border-divide-grey": "#E8E8E8",
        "border-checkbox": "#AAAAAA",
      },
      screens: {
        s: "425px",
        sm: "640px",
        md: "768px",
        lg: "900px",
      },
    },
  },
  plugins: [],
};
