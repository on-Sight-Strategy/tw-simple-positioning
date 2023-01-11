const plugin = require('tailwindcss/plugin');

const simplePositioning = plugin(function ({ addUtilities }) {
  addUtilities({
    '.flex-center': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    '.grid-center': {
      display: 'grid',
      placeContent: 'center'
    },
    '.pos-center': {
      top: '50%',
      left: '50%',
      '--tw-translate-x': '-50%',
      '--tw-translate-y': '-50%',
      transform: 'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
    },
    '.pos-x-center': {
      left: '50%',
      '--tw-translate-x': '-50%',
      transform: 'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
    },
    '.pos-y-center': {
      top: '50%',
      '--tw-translate-y': '-50%',
      transform: 'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
    }
  });
});

module.exports = simplePositioning;
