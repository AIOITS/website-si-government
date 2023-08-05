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
      "primary-gray": "#3c4856",
      "secondary-gray": "#727887",
      "third-gray": "#a0a3a8",
      "fourth-gray": "#eceff5",
      "secondary-white": "#f6f9ff",
      "primary-yellow": "#d5a419",
      "primary-green": "#00b595",
      "secondary-green": "#e0f1f0",
      "primary-blue": "#00bdf7",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
