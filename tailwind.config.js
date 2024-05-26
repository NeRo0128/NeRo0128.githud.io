/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    'my-custom-class': {
      // Aplicar estilos personalizados
      'font-size': '1.5rem',
      'font-weight': 'bold',
      'color': 'blue-500',


      // Aplicar clases existentes de Tailwind usando @apply
      '@apply': 'bg-gray-200 px-4 py-2 rounded-lg'
    },
    extend: {},
  },
  plugins: [],
}