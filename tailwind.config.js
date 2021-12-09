const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        kbdw: '1231px',
        kbdh: '540px',
      },
      padding: {
        18.75: '4.6875rem',
      },
      inset: {
        0.125: '0.03125rem',
        0.25: '0.0625rem',
      },
      margin: {
        0.75: '0.1875rem',
        18: '4.5rem',
        19: '4.75rem',
        // 20: '5.1875rem',
        20.75: '5.1875rem',
        40: '10rem',
      },
      height: {
        3.5: '0.875rem',
        9.5: '2.375rem',
        13: '3.1875rem',
        15.5: '3.875rem',
        17.25: '4.3125rem',
        135: '33.75rem',
      },
      width: {
        11.75: '2.9375rem',
        13.75: '3.4375rem',
        17: '4.25rem',
        17.25: '4.3125rem',
        17.75: '4.4375rem',
        18: '4.5rem',
        19: '4.75rem',
        28.5: '7.125rem',
        29: '7.25rem',
        30: '7.5rem',
        38: '9.625rem',
        38.25: '9.6875rem',
        110: '27.5rem',
        111: '27.75rem',
        114.75: '28.6875rem',
        292: '73rem',
        303.75: '75.9375rem',
        307.75: '76.9375rem',
      },
      boxShadow: {
        key: '2px 2px 2px rgba(0, 0, 0, 0.5)',
        keyPress: '2px 0 2px rgba(0, 0, 0, 0.5)',

      },
      lineHeight: {
        9.5: '2.375rem',
        10.5: '2.625rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        17.25: '4.3125rem',
      },
      fontSize: {
        3.4: '0.85rem'
      },
      zIndex: {
        5: '5',
      },
      fontFamily: {
        'sans': ['keyboard']
      },
      colors: {
        coolGray: colors.coolGray

      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      boxShadow: ['active'],
      inset: ['active'],
    },
  },
  plugins: [
    require('@headlessui/vue'),
  ],
}
