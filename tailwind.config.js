/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '39': '9.5rem',
        '65': '17rem',
        '81': '21rem',
        '82': '22rem',
        '83': '23rem',
        '97': '28rem',
        '98': '32rem',
        '99': '36rem',
        '100': '40rem',
        '101': '44rem',
        '102': '48rem',
        '103': '52rem',
        '104': '56rem',
        '105': '60rem',
        '106': '64rem',
        '107': '66rem',
        '108': '70rem',
      },
      height: {
        '29': '7.5rem',
        '39': '9.5rem',
        '65': '17rem',
        '81': '21rem',
        '82': '22rem',
        '83': '23rem',
        '84': '24rem',
        '85': '25rem',
        '86': '26rem',
        '97': '28rem',
        '98': '32rem',
        '99': '36rem',
        '100': '40rem',
        '101': '44rem',
        '102': '48rem',
        '103': '52rem',
        '104': '56rem',
        '105': '60rem'
      },
      margin: {
        '81': '21rem',
        '82': '22rem',
        '95': '27rem',
        '97': '28rem',
        '98': '32rem',
        '99': '36rem',
        '100': '40rem',
        '101': '44rem',
        '102': '48rem',
        '103': '52rem',
        '104': '56rem',
        '105': '60rem'
      },
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-hamburgers')],
};
