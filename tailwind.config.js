/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      "dark-blue": "#2a5579",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
