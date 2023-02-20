/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          95: '#00BB8F',
        },
        'pale-blue': '#EAF1FF',
        'dark-navy': '#303B59',
        'light-red': '#FF5555',
        'green-teal': '#00BC90',
        'cobalt-blue': '#1125D6',
        'light-lavender': '#CAC9FF',
        'dark-gray-blue': '#303B59',
        'orangey-yellow': '#FFB01E',
        'light-slate-blue': '#7856FF',
        'light-royal-blue': '#2D2AE8',
        'violet-blue': 'hsla(256, 72%, 46%, 1)',
        'persian-blue': 'hsla(241, 72%, 46%, 0)',
      },
    },
  },
  plugins: [],
}
