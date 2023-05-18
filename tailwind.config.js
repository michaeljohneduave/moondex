/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {  
        blink: {
          "0%": {
            opacity: "0",
          },
          "20%": {
            opacity: "0.2",
          },
          "40%": {
            opacity: "0.4",
          },
          "60%": {
            opacity: "0.6",
          },
          "80%": {
            opacity: "0.8",
          },
          "100%": {
            opacity: "1",
          },
        }
      },
      animation: {
        'blinking': 'blink 0.3s linear',
      }
    },
  },
  plugins: [],
}
