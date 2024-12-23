import fluid, { extract, screens, fontSize } from "fluid-tailwind";
import forms from "@tailwindcss/forms"; // Import the forms plugin

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
  plugins: [fluid, forms], // Use the imported plugin here
};
