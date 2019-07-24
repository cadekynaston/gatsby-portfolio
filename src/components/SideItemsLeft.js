
import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { media } from '../styles'
import IconGithub from './images/github'
import IconLinkedIn from './images/in'
import IconTwitter from './images/twitter'
import IconInstagram from './images/instagram'
import IconCodepen from './images/codepen'
import IconCodewars from './images/codewars'


const ItemsContainer = styled.div`
  display: none;
  background-color: transparent;
  position: fixed;
  flex-direction: column;
  left: 40px;
  bottom: 0;
  font-size: 40px;
  justify-content: center;
  align-items: center;
  mix-blend-mode: difference;

  ${media.largeUp} {
    display: flex;
  }

  > * {
    margin-bottom: 15px;
  }

  a {
    line-height: 0;
  }

`

const Line = styled.div`
  height: 100px;
  width: 2px;
  background-color: white;
`

const SideItemsLeft = () => {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true) }, 1800);
  });

  return (

    <TransitionGroup>
      {isMounted &&
        <CSSTransition  classNames="fade" timeout={1000}>
          <ItemsContainer>
            <a href="https://github.com/cadekynaston" target="_blank">
              <IconGithub classes="side-icon" />
            </a>
            <a href="https://www.linkedin.com/in/cadekynaston/" target="_blank">
              <IconLinkedIn classes="side-icon"  />
            </a>
            <a href="https://twitter.com/cadekynaston" target="_blank">
              <IconTwitter classes="side-icon"  />
            </a>
            <a href="https://www.instagram.com/cadekynaston" target="_blank">
              <IconInstagram classes="side-icon"  />
            </a>
            <a href="https://codepen.io/cadekynaston/" target="_blank">
              <IconCodepen classes="side-icon"  />
            </a>
            <a href="https://codewars.com/users/ck1" target="_blank">
              <IconCodewars classes="side-icon"  />
            </a>
            <Line />
          </ItemsContainer>
        </CSSTransition>
      }
    </TransitionGroup>

  )
}

export default SideItemsLeft
