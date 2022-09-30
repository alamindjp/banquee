/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5BB5A2",
          secondary: "#E8F2EE",
          accent: "#F1DFDF",
          neutral: "#DFE1F1",
          success: "#1a191e",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
}