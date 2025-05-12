/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#03001C",
        secondary: "#301E67",
        tertiary: "#5B8FB9",
        quaternary: "#BFD3C1",
        quinary: "#E6F9AF",
      },
    },
  },
  plugins: [],
}