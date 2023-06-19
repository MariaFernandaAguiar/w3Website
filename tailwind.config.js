/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*',
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem', // Exemplo de valor de margem personalizado
        '160': '40rem', // Exemplo de valor de margem personalizado
      },
    },
  },
  variants: {},
  plugins: [],
};

