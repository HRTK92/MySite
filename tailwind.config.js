/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'text-focus-in': 'text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both',
        'text-focus-in-slow': 'text-focus-in 2s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both',
        'text-focus-out': 'text-focus-out 1s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both',
        'bounce-slow': 'bounce 3s infinite',
        'tracking-in-expand-fwd-bottom':
          'tracking-in-expand-fwd-bottom 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both',
        'bg-pan-tr': 'bg-pan-tr 8s ease   both',
      },
      keyframes: {
        'text-focus-in': {
          '0%': {
            filter: 'blur(12px)',
            opacity: '0',
          },
          to: {
            filter: 'blur(0)',
            opacity: '1',
          },
        },
        'text-focus-out': {
          '0%': {
            filter: 'blur(0)',
            opacity: '1',
          },
          to: {
            filter: 'blur(12px)',
            opacity: '0',
          },
        },
        'tracking-in-expand-fwd-bottom': {
          '0%': {
            'letter-spacing': '-.5em',
            transform: 'translateZ(-700px) translateY(500px)',
            opacity: '0',
          },
          '40%': {
            opacity: '.6',
          },
          to: {
            transform: 'translateZ(0) translateY(0)',
            opacity: '1',
          },
        },
        'bg-pan-tr': {
          '0%': {
            'background-position': '0% 100%',
          },
          to: {
            'background-position': '100% 0%',
          },
        },
      },
    },
  },
  plugins: [],
}
