/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'bannerColor' : 'rgb(255, 251, 240)',
      'navColor' : 'rgb(60, 60, 60)',  
      'spanColor' : 'rgb(250, 190, 76)',  
      'titleColor' : 'rgb(54, 57, 88)',   
      'subtitleColor' : 'rgb(62, 62, 62)',  
      'cardbgColor' : 'rgb(241, 241, 241)',  
    },
    fontFamily: {
      'Montserrat': 'Montserrat',
      'Roboto': 'Roboto',
      'BebasNeue': 'Bebas Neue'
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(180deg, rgb(164, 188, 70), rgb(133, 160, 25) 100%)',
    },
    boxShadow: {
      'custom-shadow': '0px 10px 30px 0px rgba(0, 0, 0, 0.05)',
    },
  },
  plugins: [],
}