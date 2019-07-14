const theme = {

  colors: {
    light: '#FAFAFF',
    dark: '#30343f',
    darkLight: '#636b83',
    // dark: '#252627',
    purple: '#E4D9FF',
    mayerPurple: '#614685',
    // blue: '#273469',
    darkBlue: '#1E2749',
    darkBlueLighter: '#25315b',
    lightPurple: '#e6e6ff',
    yellow: '#FED766',
    blue: '#009FB7',
    // gray: '#696773',
    gray: '#8892b0',
    redPurple: '#1F1A38',
    pink: '#DD99BB',
    champagne: '#EAD7D1',
    dust: '#DBCDC6',
    blueGray: '#545677',
    blonde: '#FAF0CA',
    lightGray: '#D1D1D1',
    cadetBlue: '#51A3A3',
    tangoPink: '#DD7373',
    peach: '#FFB4A2',
    clearlinkBlue: '#1990ff',
    cadetGray: '#8AA29E',
    yankeeBlue: '#202C39',
    indigo: '#283845',
    orange: '#F29559',
    buff: '#F2D492',
  },

  boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  boxShadowHover: '0 10px 20px rgba(0,0,0,0.25), 0 8px 8px rgba(0,0,0,0.22)',

  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  mediaSizes: {
    small: {
      selector: 'max-width',
      values: '640px'
    },
    medium: {
      selector: 'max-width',
      values: '1023px'
    },
    mediumUp: {
      selector: 'min-width',
      values: '640px'
    },
    mediumOnly: {
      values: ['640px', '1023px']
    },
    largeUp: {
      selector: 'min-width',
      values: '1024px'
    },
  },

  maxWidth: '1100px',
  padding: '20px',
  margin: '20px',

  fonts: {
    Raleway: 'Raleway, sans-serif',
    Roboto: 'Roboto, sans-serif',
  },

  fontSizes: {
    xsmall: '12px',
    smallish: '13px',
    small: '14px',
    medium: '16px',
    large: '18px',
    xlarge: '20px',
    xxlarge: '22px',
    h3: '32px',
  },

  borderRadius: '2px',
  headerHeight: '100px',
  headerScrollHeight: '70px',

  tabHeight: 42,
  tabWidth: 120,

  gradient: `linear-gradient(0.4turn, #64d6ff, #64ffda)`,

  loaderDelay: `6`,

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,
};

export default theme;
