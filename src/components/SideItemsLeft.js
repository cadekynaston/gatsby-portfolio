
import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { media } from '../styles'
import SocialIconLinks from './socialIconLinks'


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
    setTimeout(() => setIsMounted(true), 1800);
  }, []);

  return (

    <TransitionGroup>
      {isMounted &&
        <CSSTransition  classNames="fade" timeout={1000}>
          <ItemsContainer>
              <SocialIconLinks iconClasses="side-icon" />
            <Line />
          </ItemsContainer>
        </CSSTransition>
      }
    </TransitionGroup>

  )
}

export default SideItemsLeft
