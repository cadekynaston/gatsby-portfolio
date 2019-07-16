import React, { useState, useEffect } from "react"
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import { theme } from '../styles'
import gatsbyLogo from '../images/gatsby-icon.png'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;

  &.top {

    background-color: ${theme.colors.light};
    box-shadow: rgba(0, 0, 0, 0.19) 0px 4px 10px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    a {
      color: ${theme.colors.dark};
    }
  }
`

const NavHeadroom = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;

  top: -${props => props.scrollHeight}px;

  .headroom-wrapper {
    width: 100%;
  }
`

const NavLogo = styled.img`
  height: 30px;
  width: 30px;
`

const MobileNavContainer = styled.div`
  /* display: none; */
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,.3);
  position: fixed;
  z-index: 10;

  &.open {
    display: flex;
  }
`

const MobileNav = styled.div`

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-height: 500px;
  width: 100vw;
  transform: translateY(-100vh);
  background-color: ${theme.colors.light};
  padding: 100px;
  opacity: 1;
  z-index: 10000;
  transition: ${theme.transition};
  transition-delay: .5s;

  &.open {
    transform: translateY(0);
    transition-delay: 0s;

    p {
      opacity: 1;
    }
  }

  p {
    color: ${theme.colors.dark};
    font-size: 40px;
    margin-top: 15px;
    transition: ${theme.transition};
    opacity: 0;
    transition-delay: .2s;
  }

`

const NavButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 30px;
  width: 30px;

  > div {
    transition: ${theme.transition};
    background-color: ${theme.colors.light};

    &:first-of-type {
      width: 100%;
      height: 2px;
      margin-bottom: 10px;
    }

    &:nth-of-type(2) {
      width: 50%;
      height: 2px;
      align-self: flex-end;

    }
  }

  &:hover {
    cursor: pointer;
    > div {
      &:first-of-type {
        align-self: flex-start;
        width: 50%;
      }

      &:nth-of-type(2) {
        width: 100%;
      }
    }
  }

  &.open {
    > div {
      background-color: ${theme.colors.dark};
    }
  }
`

const Navigation = () => {

  const [scrolledTop, updateScrolledTop] = useState(true)
  const [scrollHeight, updateScrollHeight] = useState(0)
  const [openNav, updateOpenNav] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = e => {
    if (window.pageYOffset < 100) {
      updateScrollHeight(window.pageYOffset);
    }
    updateScrolledTop(window.pageYOffset < 80);
  }

  return (
    <>
    <NavHeadroom scrollHeight={scrollHeight}>
      <Headroom>
        <Nav className={`${scrolledTop ? 'scrolled': 'top'}`}>
          <NavLogo src={gatsbyLogo} />
          <NavButton
            onClick={() => updateOpenNav(prevState => !prevState)}
            className={`${openNav ? 'open' : 'closed'}`} >
            <div></div>
            <div></div>
          </NavButton>
        </Nav>

      </Headroom>
    </NavHeadroom>
    <MobileNavContainer className={`${openNav ? 'open' : 'closed'}`}>
      <MobileNav className={`${openNav ? 'open' : 'closed'}`}>
        <p style={{ transitionDelay: '200ms' }}>Experience</p>
        <p style={{ transitionDelay: '250ms' }}>Projects</p>
        <p style={{ transitionDelay: '300ms' }}>Contact</p>
        <p style={{ transitionDelay: '350ms' }}>Resume</p>
      </MobileNav>
    </MobileNavContainer>
  </>
  )

}

export default Navigation
