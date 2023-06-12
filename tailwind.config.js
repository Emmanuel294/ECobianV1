/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  plugins: [],
  theme: {
    colors: {
      'light-system-blue-1': '#83C3FF',
      'light-system-blue-a1': 'rgba(131, 195, 255, .36)',
      'light-system-gray-1': '#82888C',
      'light-system-lightblue-1': '#77E0FF',
      'light-system-lightblue-a1': 'rgba(119, 224, 255, .80)',
      'light-system-purple-1': '#5994FF',
      'light-system-purple-2': '#2759c4',
      'light-system-purple-3': '#3440ad',
      'light-system-purple-3-t': 'rgba(52, 64, 173, .90)',
    },
    extend: {},
    fontFamily: {
      'share-tech': ['Share Tech'],
    },
  },
}

