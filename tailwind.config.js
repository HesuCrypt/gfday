/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'diary-black': '#1a1a1a',
        'diary-gray-dark': '#2d2d2d',
        'diary-gray': '#4a4a4a',
        'diary-gray-light': '#6b6b6b',
        'diary-gray-lighter': '#9ca3af',
        'diary-white': '#f9fafb',
        'diary-off-white': '#f3f4f6',
      },
      fontFamily: {
        'serif': ['Crimson Text', 'Times New Roman', 'serif'],
        'handwriting': ['Dancing Script', 'cursive'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'heart-beat': 'heartBeat 2s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        heartBeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}