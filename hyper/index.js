// standard ANSI Colours
const black = '#2d2d2d';
const red = '#f2777a';
const green = '#92d192';
const yellow = '#ffd479';
const blue = '#6ab0f3';
const magenta = '#e1a6f2';
const cyan = '#76d4d6';
const white = '#b3b9c5';
const lightBlack = '#777c85';
const lightRed = '#f2777a';
const lightGreen = '#76d4d6';
const lightYellow = '#ffeea6';
const lightBlue = '#6ab0f3';
const lightMagenta = '#e1a6f2';
const lightCyan = '#76d4d6';
const lightWhite = '#ffffff';

const accentColor = blue;

exports.decorateConfig = config =>
  Object.assign({}, config, {
    cursorColor: accentColor,
    cursorAccentColor: lightWhite,
    foregroundColor: white,
    backgroundColor: black,
    borderColor: 'rgba(255,255,255, 0.1)',
    selectionColor: 'rgba(255,255,255, 0.1)',
    css: `
    ${config.css || ''}
    .tab_tab {
      border: 0;
      background-color: rgba(255, 255, 255, 0.02);
    }
    .tab_text {
      background-color: rgba(255, 255, 255, 0.02);
    }
    .tab_active {
      background-color: ${black};
    }
    .tab_textActive {
      background-color: ${black};
      border-top: 2px solid ${accentColor} !important;
    }
  `,
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      lightBlack,
      lightRed,
      lightGreen,
      lightYellow,
      lightBlue,
      lightMagenta,
      lightCyan,
      lightWhite
    }
  });
