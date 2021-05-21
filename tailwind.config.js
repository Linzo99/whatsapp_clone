module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './pages/**/*.{js,jsx,ts,tsx,vue}',
    './components/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        dark:{
          DEFAULT: '#131c21',
          light : '#d5d4d7',
          lighter : '#222e37'
        }
      },
      backgroundImage: theme=>({
        chat: "url('/images/background.png')",
      })
    },
    boxShadow:{
      'all': '30px 30px 60px 10px rgba(0, 0, 0, 0.5)',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-scrollbar')
  ],
}
