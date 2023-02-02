/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      margin: {
        26: '26px'
      },

      padding: {
        18: '18px'
      },

      boxShadow: {
        custom: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 188px 52px rgba(0, 0, 0, 0.01), 0px 120px 48px rgba(0, 0, 0, 0.04), 0px 68px 41px rgba(0, 0, 0, 0.15), 0px 30px 30px rgba(0, 0, 0, 0.26), 0px 8px 17px rgba(0, 0, 0, 0.29), inset 0px 6px 8px rgba(255, 255, 255, 0.1), inset 0px -4px 5px rgba(0, 0, 0, 0.22)',
        custom2: '0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.06);'
      },
      width: {
        292: '292px',
        288: '288px',
        widthCalculator: '356px'
      },
      borderRadius: {
        borderCalculator: '48px'
      },
      height: {
        368: '368px',
        86: '86px',
        heightCalculator: '34.75rem'
      },
      colors: {
        whiteCustom: '#EBEBEB',
        purpleCustom3: '#7F45E2',
        purpleCustom2: '#462878',
        purpleCustom: '#975DFA',
        grayCustom: '#6B6B6B',
        backgroundPurple: '#907ECE',
        backgroundCalculator: '#2D2A37'
      }
    },
  },
  plugins: [],
}
