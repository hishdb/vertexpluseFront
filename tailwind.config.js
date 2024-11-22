/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  
  theme: {
    extend: {
      keyframes: {
        slideFadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        'slide-fade-in': 'slideFadeIn 1.2s ease-out',
      },
    },
  },
  plugins: [],
}

