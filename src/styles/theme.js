const theme = {

  colors: {
    light: '#FAFAFF',
    dark: '#0B132B',
    purple: '#E4D9FF',
    blue: '#273469',
    darkBlue: '#1E2749',
  },

  colorsAlt: {
    light: '#FFFFFF',
    dark: '#272727',
    yellow: '#FED766',
    blue: '#009FB7',
    gray: '#696773',
  },

  colorsAlt: {
    light: '#FFFFFF',
    dark: '#272727',
    yellow: '#FED766',
    blue: '#009FB7',
    gray: '#696773',
  },

  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  get themeColors() {
    return {
      backgroundColor: this.colors.light,
      textColor: '#6FFFE9'
    }
  },

  get altThemeColors() {
    return {
      backgroundColor: this.colors.dark,
      textColor: this.colors.light
    }
  },

  get darkThemeColors() {
    return {
      backgroundColor: this.colors.dark,
      textColor: '#6FFFE9'
    }
  },

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

  maxWidth: '1000px',
  padding: '20px',
  margin: '20px',

  fonts: {
    RobotoMono: 'Roboto Mono, monospace',
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

  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

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
