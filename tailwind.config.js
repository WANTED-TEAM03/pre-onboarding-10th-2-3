/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#1e2025',
      gray: {
        50: '#f4f6fa',
        100: '#edf0f2',
        200: '#d7dce0',
        300: '#a7afb7',
        400: '#6a737b',
      },
      lightblue: '#e6f2fd',
      skyblue: '#cae9ff',
      blue: '#007BE9',
      darkblue: '#00449e',
    },
  },
  plugins: [],
};
