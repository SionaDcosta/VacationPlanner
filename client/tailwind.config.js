/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D7A79',
        hover: '#0b6b6a',
      },
      fontFamily: {
        'playwrite-au-vic': ['"Playwrite AU VIC"', 'cursive'],
        'roboto-medium': ["Roboto", 'sans-serif'],
        'merriweather-regular':["Merriweather", 'serif'],
        'merriweather-bold-italic':["Merriweather", 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

