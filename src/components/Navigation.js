import React, { useState, useEffect } from "react"
import styled from '@emotion/styled';

import { GlobalStyles, theme } from '../styles'
import gatsbyLogo from '../images/gatsby-icon.png'

const Nav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;
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

  return (
    <Nav>
      <NavLogo className={`test-class ${ false && 'false-class'} ${ true && 'true-class'}`} src={gatsbyLogo} />
      <NavUl>
        <NavLi><NavLink href="#">Experience</NavLink></NavLi>
        <NavLi><NavLink href="#">Projects</NavLink></NavLi>
        <NavLi><NavLink href="#">Contact</NavLink></NavLi>
        <NavLi><NavLink href="#">Resume</NavLink></NavLi>
      </NavUl>
    </Nav>
  )

}

export default Navigation
