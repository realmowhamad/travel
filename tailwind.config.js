/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': { 'min': '640px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': { 'min': '768px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': { 'min': '1024px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': { 'min': '1536px' },
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      "sfRegular": "SFRegular",
      "sfMedium": "SFRegular",
      "sfHeavy": "SFHeavy",
      "sfBold": "SFBold",
      "sfsBold": "SFsBold",
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.563rem',
      '2xl': '2rem',
      '2/xl': '2.5rem',
      '3xl': '3rem',
      '3/xl': '3.5rem',
    }
  },
  plugins: [],
}
