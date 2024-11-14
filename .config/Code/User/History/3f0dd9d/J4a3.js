/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        1: "url('/src/Components/Data/pics/1.webp')",
        "gradient-white": "linear-gradient(45deg, #ff8a00, #e52e71, #6026d4)",
      },
      opacity: {
        67: ".67",
      },
      height: {
        93: "93.2vh",
      },
      colors: {
        blue: "#54defd",
        violet: "#826aed",
        dark_violet: "#200e71",
      },
      keyframes: {
        animatedgradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
      animation: {
        gradient: "animatedgradient 10s ease-in-out infinite alternate",
      },
      minHeight: {
        custom: "30rem",
        mobile: "25rem",
      },
      minWidth: {
        custom: "25rem",
      },
    },
    fontFamily: {
      // pop: ["poppins", "sans-serif"],
      // ail: ["Aileron", "sans-serif"],
      jet: ["JetBrainsMonoNerdFontMono", "monospace"],
      // "jet": ["JetBrainsMonoNerdFontMono-Bold", "monospace"],
      // "jet": ["JetBrainsMonoNerdFontMono-Medium", "monospace"],
      // jet: ["JetBrainsMonoNerdFontMono-SemiBold", "monospace"],
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwind-scrollbar")],
};

// ui - sans - serif,
//   system - ui,
//   sans - serif,
//   "Apple Color Emoji",
//   "Segoe UI Emoji",
//   "Segoe UI Symbol",
//   "Noto Color Emoji";
