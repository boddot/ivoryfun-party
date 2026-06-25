/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          50: '#FFF5F0',
          100: '#FFE8DD',
          200: '#FFC9AD',
          300: '#FFA77D',
          400: '#FF8552',
          500: '#FF6B3D',
          600: '#E5552B',
          700: '#B8401E',
          800: '#8C2E14',
          900: '#5C1C0A',
        },
        mint: {
          50: '#F0FFF8',
          100: '#D6FDE8',
          200: '#A8FAD3',
          300: '#6DF2B4',
          400: '#3EE59A',
          500: '#1EC97E',
          600: '#14A866',
          700: '#108551',
          800: '#0D663F',
          900: '#09472B',
        },
        sunny: {
          50: '#FFFEF5',
          100: '#FFFDE0',
          200: '#FFF9B3',
          300: '#FFF366',
          400: '#FFE825',
          500: '#F5D600',
          600: '#C7AE00',
          700: '#9E8900',
          800: '#756600',
          900: '#4D4200',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans SC"', '"PingFang SC"', '"Microsoft YaHei"', 'system-ui', 'sans-serif'],
        display: ['"Fredoka One"', '"Noto Sans SC"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
    },
  },
  plugins: [],
}
