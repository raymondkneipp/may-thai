const { fontFamily, backgroundSize } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        fancy: "clamp(4.5rem, 1.8750rem + 5.8333vw, 8rem)",
      },
      lineHeight: {
        fancy: "clamp(3.5rem, 2.3750rem + 2.5000vw, 5rem)",
      },
      fontFamily: {
        fancy: ["var(--font-ballantines)", ...fontFamily.sans],
      },
      backgroundSize: {
        ...backgroundSize,
        wide: "200%",
      },
    },
  },
  plugins: [],
};
