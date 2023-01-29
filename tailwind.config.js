/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,jsx}"],
  theme:{
    extend:{
      colors:{
        'primary':'#f3c614',
        'secondary':'#353535'
      }
    }
  },
  variants:['responsive'],
  plugins:[]
}
