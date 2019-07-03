import React, { useState, useEffect } from "react"
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import { GlobalStyles, theme } from '../styles'
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

  /* transition: background-color; */

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

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`

const NavLi = styled.li`
  margin-left: 20px;
`

const NavLink = styled.a`
  color: ${theme.colors.light};
`

const Navigation = () => {

  const [scrolledTop, updateScrolledTop] = useState(true);
  const [scrollHeight, updateScrollHeight] = useState(0);
  const [lastScrollPosition, updateLastScrollPosition] = useState(10);
  const [scrollingUp, updateScrollingUp] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    // component will unmount
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
    <NavHeadroom scrollHeight={scrollHeight}>
      <Headroom>
        <Nav className={`${scrolledTop ? 'scrolled': 'top'}`}>
          <NavLogo src={gatsbyLogo} />
          <NavUl>
            <NavLi><NavLink href="#">Experience</NavLink></NavLi>
            <NavLi><NavLink href="#">Projects</NavLink></NavLi>
            <NavLi><NavLink href="#">Contact</NavLink></NavLi>
            <NavLi><NavLink href="#">Resume</NavLink></NavLi>
          </NavUl>
        </Nav>
      </Headroom>
    </NavHeadroom>
  )

}

export default Navigation
