/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-green": "#005828",
        "light-green": "#03A62F",
        "color-dark-red": "#D6236A",
        oxblood: "#7F1D1D",
        "color-bright-red": "#ED0027",
      },
      borderColor: (theme) => ({
        ...theme("colors"),
        "test-border": "red",
      }),
      keyframes: {
        fade: {
          "0%, 100%": { opacity: 0.25 },
          "50%": { opacity: 1 },
        },
      },
      animation: {
        fade: "fade 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
