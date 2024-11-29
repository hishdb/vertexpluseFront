/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  
  theme: {
    extend: {
      rotate: {
        '20': '20deg',
      },
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
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-fade-in': 'slideFadeIn 1.2s ease-out',
      },
    },
  },
  plugins: [],
}

