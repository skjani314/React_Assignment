/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // Adjust if using other file extensions
  ],
  theme: {
    extend: {colors: {
      popover: 'hsl(0, 0%, 100%)', // light mode bg
      'popover-foreground': 'hsl(222.2, 47.4%, 11.2%)', // light mode text
    },},
  },
  plugins: [],
}