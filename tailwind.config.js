/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#60B5FF',
        'primary-dark': '#4A9AE8',
        'primary-light': '#AFDDFF',
        secondary: '#FF9149',
        'secondary-dark': '#FF7820',
        cream: '#FFECDB',
        dark: '#333333',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

