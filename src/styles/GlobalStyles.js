import React from 'react'
import { Global, css } from '@emotion/core'
import { theme, media } from '../styles'

const GlobalStyles = ({ colors }) => {
  // console.log(colors)
  return (
    <Global
    styles={css`

      h1 {
        font-size: 60px;
        line-height: 62px;
        color: ${colors.textColor};
        font-family: ${theme.fonts.RobotoMono};
        margin-bottom: 30px;
        text-align: left;
        font-weight: 400;

        ${media.medium} {
          font-size: 50px;
          line-height: 52px;
        }

        ${media.small} {
          font-size: 40px;
          line-height: 42px;
        }
      }

      h2 {
        font-size: 48px;
        line-height: 50px;
        margin-bottom: 15px;
        text-align: left;
        font-weight: 400;
        color: ${colors.textColor};
        font-family: ${theme.fonts.Roboto};

        ${media.medium} {
          font-size: 42px;
          line-height: 44px;
          text-align: left;
        }

        ${media.small} {
          font-size: 36px;
          line-height: 38px;
        }
      }

      h3 {
        font-size: 36px;
        line-height: 38px;
        margin-bottom: 15px;
        font-weight: 400;
        color: ${colors.textColor};
        font-family: ${theme.fonts.Roboto};

        ${media.medium} {
          font-size: 32px;
          line-height: 34px;
        }

        ${media.small} {
          font-size: 28px;
          line-height: 30px;
        }

        &.heavy {
          font-weight: 700;
        }

        &.white {
          color: ${theme.colors.white};
        }
      }

      h4 {
        font-size: 24px;
        line-height: 30px;
        color: ${theme.colors.dark};
        font-family: ${theme.fonts.Roboto};
        font-weight: 400;

        &.heavy {
          font-weight: 700;
        }
      }

      h5 {
        font-size: 18px;
        line-height: 24px;
        color: ${theme.colors.dark};
        font-family: ${theme.fonts.Roboto};
        font-weight: 700;

        &.light {
          font-weight: 400;
        }
      }

      html {
        font-family: ${theme.fonts.Roboto};
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }

      body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        position: relative;
      }

      * {
        box-sizing: border-box;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin: 0;
      }

      p {
        font-size: 16px;
        /* line-height: 24px; */
        font-family: ${theme.fonts.Roboto};
        color: ${theme.colors.dark};

        &.legal {
          font-size: 10px;
          line-height: 12px;
          color: ${theme.colors.legalGray};
        }
      }

      a {
        text-decoration: none;
      }

      .text-center { text-align: center; }
      .margin-bottom-45 { margin-bottom: 45px; }
      .margin-bottom-25 { margin-bottom: 25px; }

      ul {
        color: ${theme.colors.dark};
        li {
          margin-bottom: 25px;
        }
      }

      .text-center {
        text-align: center;
      }

      .no-margin-bottom {
        margin-bottom: 0;
      }

      .heavy {
        font-weight: 700;
      }

      .max-width-500 {
        ${media.largeUp} {
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }
      }

      .gatsby-sbs-image {
        max-width: 400px;
        margin-left: auto;
        margin-right: auto;
      }

      .gatsby-header-img {
        height: 100%;
        width: 100%;
      }

      .mix-mode {
        .react-reveal {
          mix-blend-mode: difference;
          background-color: transparent;
        }
      }

      .side-icon {
        height: 20px;
        width: 20px;
        mix-blend-mode: difference;

        path {
          fill: #FAFAFF;
        }

        &:hover {
          opacity: .4;
          path {
            fill: #222;
          }
        }
      }

      .fadeup-enter {
        background-color: transparent;
        opacity: 0.01;
        transform: translateY(20px);
        transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
      }

      .fadeup-enter-active {
        background-color: transparent;
        opacity: 1;
        transform: translateY(0px);
        transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
      }

      .fadedown-enter {
        background-color: transparent;

        opacity: 0.01;
        transform: translateY(-20px);
        transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
      }

      .fadedown-enter-active {
        background-color: transparent;

        opacity: 1;
        transform: translateY(0px);
        transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
      }

      .fade-enter {
        background-color: transparent;

        opacity: 0.01;
        transition: opacity 1000ms ${theme.easing};
      }

      .fade-enter-active {
        opacity: 1;
        transition: opacity 1000ms ${theme.easing};
      }

    `}
    />
  )
}


export default GlobalStyles
