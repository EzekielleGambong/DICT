import fluid, { extract, screens, fontSize } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./src/**/*.{html,js}"],
    extract,
  },
  theme: {
    extend: {},
    screens,
    fontSize,
  },
  plugins: [fluid, require("@tailwindcss/forms")],
};
