import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E8',
        navy: '#1B2A4A',
        teal: '#2A6B7C',
        sage: '#6B9E78',
        coral: '#E8714A',
        sand: '#E8DCC8',
        muted: '#8A8070',
      },
    },
  },
  plugins: [typography],
}

