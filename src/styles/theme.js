const theme = {

  colors: {
    light: '#FAFAFF',
    dark: '#30343f',
    darkLight: '#636b83',
    mayerPurple: '#614685',
    darkBlue: '#1E2749',
    darkBlueLighter: '#25315b',
    yellow: '#FED766',
    gray: '#8892b0',
    blueGray: '#545677',
    lightGray: '#D1D1D1',
    clearlinkBlue: '#1990ff'
  },

  boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  boxShadowHover: '0 10px 20px rgba(0,0,0,0.25), 0 8px 8px rgba(0,0,0,0.22)',

  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
  specificTransition: '0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

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
  borderRadius: '5px',

  fonts: {
    Raleway: 'Raleway, sans-serif',
    Roboto: 'Roboto, sans-serif',
  },

  scrollRevealConfig: {
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay: 200,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }
};

export default theme;
