import React from "react"
import styled from "@emotion/styled"

import { Container, theme, media } from '../styles'

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.bgColor ? props.bgColor : theme.colors.darkBlue };
  padding-left: 1rem;
  padding-right: 1rem;

  ${media.largeUp} {
    padding-left: 100px;
    padding-right: 100px;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding-top: 25px;
  padding-bottom: 25px;

  ${media.medium} {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  ${media.small} {
    flex-direction: column;
  }

`

const FooterCopy = styled.h5`
  font-size: 14px;
  color: ${theme.colors.light};
  text-align: center;

  &:first-of-type {
    text-align: left;
    ${media.small} {
      margin-bottom: 20px;
    }
  }

  &:last-of-type {
    text-align: right;
  }

  ${media.medium} {
    font-size: 16px;
  }

  a {
    color: ${theme.colors.yellow};
    text-decoration: underline;

    &:hover {
      color: ${theme.colors.light};
    }
  }
`


const Footer = ({ bgColor }) => {

  return (
    <StyledFooter bgColor={bgColor}>
      <StyledContainer>
        <FooterCopy>Cade Kynaston 2019</FooterCopy>
        <FooterCopy>Made using <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby</a> + <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> + <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a></FooterCopy>
      </StyledContainer>
    </StyledFooter>
  )


}

export default Footer
