/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./docs/**/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'hidden',
    'bg-slate-400',
    'bg-gray-200',
    'bg-gray-400',
    'bg-white',
    'hover:bg-gray-100',
    'hover:cursor-pointer',
    'w-1/2',
    'h-1/2',
    'z-10',
    'absolute'
  ]
}
