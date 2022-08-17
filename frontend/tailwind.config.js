const { blue } = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    screens: {
      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      blueRYB: {
        "50": "#ADADFF",
        "100": "#9999FF",
        "200": "#8585FF",
        "300": "#7070FF",
        "400": "#5C5CFF",
        "500": "#4747FF", // Orignial Color
        "600": "#3333FF",
        "700": "#1F1FFF",
        "800": "#0A0AFF",
        "900": "#0000F5",
      },
      sunray: {
        "50": "#F9E4C8",
        "100": "#F7DBB6",
        "200": "#F5D1A3",
        "300": "#F3C891",
        "400": "#F1BF7E",
        "500": "#EFB86C", // Orignial Color
        "600": "#EDAF5A",
        "700": "#EBA747",
        "800": "#E99E35",
        "900": "#E79523"
      },
      salmonPink: {
        "50": "#FFEBEE",
        "100": "#FFD6DC",
        "200": "#FFC2CB",
        "300": "#FFADBA",
        "400": "#FF99AA", // Orignial Color
        "500": "#FF8599",
        "600": "#FF7088",
        "700": "#FF5C77",
        "800": "#FF4766",
        "900": "#FF3355"
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
