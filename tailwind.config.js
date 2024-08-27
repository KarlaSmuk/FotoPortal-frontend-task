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
        mobile: "320px",
        // => @media (min-width: 640px) { ... }

        tablet: "900px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1357px",
        // => @media (min-width: 1357px) { ... }
      },
    },
  },
  plugins: [],
};
