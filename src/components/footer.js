import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Container, theme, media } from '../styles'

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.bgColor ? props.bgColor : theme.colors.dark };
  padding-left: 1rem;
  padding-right: 1rem;

  ${media.largeUp} {
    padding-left: 100px;
    padding-right: 100px;
  }
`;

const StyledContainer = styled(Container)`
  padding-top: 25px;
  padding-bottom: 25px;

  ${media.medium} {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`

const FooterCopy = styled.h5`
  font-size: 14px;
  color: ${theme.colors.lightGray};
  text-align: center;

  ${media.medium} {
    font-size: 16px;
  }
`


const Footer = ({ data, bgColor }) => {

  return (
    <StyledFooter bgColor={bgColor}>
      <StyledContainer>
        <FooterCopy>Cade Kynaston 2019</FooterCopy>
      </StyledContainer>
    </StyledFooter>
  )


}

export default Footer
