/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mpx-blue": "#3A7AFE",
        "mpx-black": "#0C0C0E",
        "mpx-white": "#FFFFFF",
        "mpx-aqua": "#00E6C3",
        "mpx-yellow": "#F8D34F",
      },
    },
  },
  plugins: [],
};

