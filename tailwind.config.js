/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#2196f3',
        mainAltColor: '#1787e0',
        bgColor: '#ececec'
      },
      padding: {
        mainPadding : '40px',
      },
      gap: {
        mainGap : '40px',
      },
      keyframes : {
        upAndDown : {
          '0%, 100%': { bottom: '40px'},
          '50%': { bottom: '20px' },
        },
        boucing: {
          '0%, 10%, 20%, 50%, 80%, 100%': {transform: 'translateY(0)'},
          '40%, 60%': {transform: 'translateY(-15px)'},
        },
        next: {
          '0%': {right: '20px'},
          '100%': {right: '10px'},
        },
        full: {
          '0%': {width: '0%', height : '0%'},
          '100%': {width: '100%', height : '100%'},
        },
      },
      animation: {
        upAndDown: 'upAndDown 5s linear infinite',
        boucing: 'boucing 1s ease-in-out infinite',
        next: 'next 1s infinite',
        full: 'full .3s ease-out',
      }
    },
  },
  plugins: [],
}
