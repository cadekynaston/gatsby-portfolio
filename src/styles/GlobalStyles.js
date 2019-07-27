import React from 'react'
import { Global, css } from '@emotion/core'
import { theme, media } from '../styles'

const GlobalStyles = () => {
  return (
    <Global
    styles={css`

      html {
        background-color: ${theme.colors.darkBlue};
      }

      h1 {
        font-size: 70px;
        line-height: 72px;
        color: ${theme.colors.light};
        font-family: ${theme.fonts.Raleway};
        margin-bottom: 30px;
        text-align: left;
        font-weight: 600;

        ${media.medium} {
          font-size: 54px;
          line-height: 56px;
        }

        ${media.small} {
          font-size: 40px;
          line-height: 42px;
        }
      }

      h2 {
        font-size: 52px;
        line-height: 54px;
        margin-bottom: 15px;
        text-align: left;
        font-weight: 600;
        color: ${theme.colors.light};
        font-family: ${theme.fonts.Raleway};

        ${media.medium} {
          font-size: 42px;
          line-height: 44px;
          text-align: left;
        }

        ${media.small} {
          font-size: 32px;
          line-height: 34px;
        }

      }

      h3 {
        font-size: 36px;
        line-height: 38px;
        margin-bottom: 15px;
        font-weight: 400;
        color: ${theme.colors.gray};
        font-family: ${theme.fonts.Roboto};

        ${media.medium} {
          font-size: 32px;
          line-height: 34px;
        }

        ${media.small} {
          font-size: 26px;
          line-height: 28px;
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
        line-height: 28px;
        color: ${theme.colors.darkLight};
        font-family: ${theme.fonts.Roboto};
        font-weight: 400;

        &.heavy {
          font-weight: 700;
        }
      }

      h5 {
        font-size: 18px;
        line-height: 24px;
        color: ${theme.colors.light};
        font-family: ${theme.fonts.Roboto};
        font-weight: 300;

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

      .side-icon {
        height: 20px;
        width: 20px;
        mix-blend-mode: difference;

        path {
          fill: ${theme.colors.light};
        }

        &:hover {
          opacity: .4;

        }
      }

      .nav-icon {
        height: 22px;
        width: 22px;

        path {
          fill: ${theme.colors.dark};
        }

        &:hover {
          path {
            fill: ${theme.colors.mayerPurple};
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

      vertical-text-transition{
        display: inline;
        text-indent: 8px;
      }
      .vertical-text-transition span{
        animation: topToBottom 12s linear infinite 0s;
        -ms-animation: topToBottom 12s linear infinite 0s;
        -webkit-animation: topToBottom 12s linear infinite 0s;
        opacity: 0;
        overflow: hidden;
        position: absolute;
      }
      .vertical-text-transition span:nth-of-type(2){
        animation-delay: 4s;
        -ms-animation-delay: 4s;
        -webkit-animation-delay: 4s;
      }
      .vertical-text-transition span:nth-of-type(3){
        animation-delay: 8s;
        -ms-animation-delay: 8s;
        -webkit-animation-delay: 8s;
      }



      /*topToBottom Animation*/
      @-moz-keyframes topToBottom{
        0% { opacity: 0; }
        5% { opacity: 0; -moz-transform: translateY(-50px); }
        10% { opacity: 1; -moz-transform: translateY(0px); }
        25% { opacity: 1; -moz-transform: translateY(0px); }
        30% { opacity: 0; -moz-transform: translateY(50px); }
        80% { opacity: 0; }
        100% { opacity: 0; }
      }
      @-webkit-keyframes topToBottom{
        0% { opacity: 0; }
        5% { opacity: 0; -webkit-transform: translateY(-50px); }
        10% { opacity: 1; -webkit-transform: translateY(0px); }
        25% { opacity: 1; -webkit-transform: translateY(0px); }
        30% { opacity: 0; -webkit-transform: translateY(50px); }
        80% { opacity: 0; }
        100% { opacity: 0; }
      }
      @-ms-keyframes topToBottom{
        0% { opacity: 0; }
        5% { opacity: 0; -ms-transform: translateY(-50px); }
        10% { opacity: 1; -ms-transform: translateY(0px); }
        25% { opacity: 1; -ms-transform: translateY(0px); }
        30% { opacity: 0; -ms-transform: translateY(50px); }
        80% { opacity: 0; }
        100% { opacity: 0; }
      }

      .gatsby-sbs-image {
        max-width: 400px;
        margin-left: auto;
        margin-right: auto;
      }
    `}
    />
  )
}

export default GlobalStyles
