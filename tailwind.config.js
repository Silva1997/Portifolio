/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fontjetbrains: ["JetBrains Mono", 'serif']
      },
      animation: {
        'slider-direita': 'slider_direita 1s ease-in-out',
      },
      keyframes: {
        slider_direita: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        }

      },
    },
    screens: {
      // Definindo um intervalo customizado para 360px a 414px
      'xs-min': '360px', // A partir de 360px
      'sm': '648px',
      'md': '768px',  // A partir de 768px
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      "tablet": { min: '800px', max: '1023px' }  //800 a 900px

    }
  },



  plugins: [
    // function ({ addComponents, theme }) {
    //   addComponents({
    //     '@media (orientation: landscape)': {
    //       '.landscape\\:bg-cover': {
    //         backgroundSize: 'cover',
    //         backgroundImage: 'url("./src/assets/figma.png")',
    //         backgroundRepeat: 'no-repeat',
    //       },
    //       '.landscape\\:h-custom': {
    //         height: '60vh',
    //       },
    //     },
    //     '@media (orientation: portrait)': {
    //       '.portrait\\:bg-cover': {
    //         backgroundSize: 'cover',
    //         backgroundImage: 'url("./src/assets/fundo.png")',
    //         backgroundRepeat: 'no-repeat',
    //       },
    //       '.portrait\\:h-custom': {
    //         height: '40vh',
    //       },
    //     },
    //   });
    // },
  ],

}
