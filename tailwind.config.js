/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}' // Inclui todos os arquivos HTML e JS dentro de src
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          600: '#8B4513', // Adicionando uma cor personalizada
          500: '#A0522D', // Tom mais claro
        },
        salmao: {
          600: '#F1DFDA',
        }
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
