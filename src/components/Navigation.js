import React, { useState, useEffect } from "react"
import styled from '@emotion/styled';
import { Link , Events } from 'react-scroll'

import { theme, media } from '../styles'
import logoLight from '../images/ck-logo-light.svg'
import logoDark from '../images/ck-logo-dark.svg'
import SocialIconLinks from './socialIconLinks';

const Nav = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;
  top: 0px;

  ${media.medium} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const NavContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
  transition: ${theme.transition};
  box-shadow: ${theme.boxShadow};

  &.not-mounted {
    transform: translateY(-70px);
  }

  &.scrolled {
    background-color: ${theme.colors.light};
  }

  &.top {
    background-color: transparent;
    box-shadow: none;
  }
`

const NavLogo = styled.img`
  height: 30px;
  width: 30px;
`

const MobileNavContainer = styled.div`
  position: fixed;

  &.closed {
    visibility: hidden;
  }
`

const MobileNavOverlay = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  background-color: rgba(0,0,0,.3);
  opacity: 0;
  z-index: -1;
  transition: ${theme.transition};
  transition-delay: .3s;

  &.open {
    opacity: 1;
    transition-delay: 0s;
  }

`

const MobileNav = styled.div`
  max-height: 500px;
  width: 100vw;
  transform: translateY(-100vh);
  background-color: ${theme.colors.light};
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 4rem;
  padding-right: 4rem;
  opacity: 1;
  z-index: 10000;
  transition: ${theme.transition};
  box-shadow: ${theme.boxShadow};
  transition-delay: .4s;

  &.open {
    transform: translateY(0);
    transition-delay: 0s;

    .nav-link {
      opacity: 1;
    }
  }

  ${media.medium} {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .nav-link {
    color: ${theme.colors.light};
    text-shadow: -1px -1px 0 ${theme.colors.dark}, 1px -1px 0 ${theme.colors.dark}, -1px 1px 0 ${theme.colors.dark}, 1px 1px 0 ${theme.colors.dark};
    font-size: 44px;
    margin-top: 15px;
    transition: opacity ${theme.specificTransition};
    opacity: 0;
    font-weight: 600;

    ${media.medium} {
      font-size: 36px;
    }

    &:hover {
      color: ${theme.colors.yellow};
      cursor: pointer;
    }
  }
`

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 25px;
  opacity: 0;
  transition: opacity ${theme.specificTransition};

  ${media.largeUp} {
    justify-content: flex-end;
  }

  ${media.small} {
    justify-content: center;
    margin-top: 50px;
  }

  &.open {
    opacity: 1;
  }

  a {
    margin-right: 20px;
    color: ${theme.colors.mayerPurple};
    font-weight: 600;
    font-size: 18px;

    &:last-of-type {
      margin-right: 0;
    }
  }
`

const NavButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 30px;
  width: 30px;

  > div {
    transition: background-color ${theme.specificTransition} .3s, width ${theme.specificTransition} 0s, transform ${theme.specificTransition};
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

  &.scrolled,
  &.open {
    > div {
      background-color: ${theme.colors.dark};
      transition-delay: 0s;
    }
  }

  &.open {
    > div {
      transition: background-color ${theme.specificTransition} 0s, width ${theme.specificTransition} 0s, transform ${theme.specificTransition} .2s;

      &:first-of-type {
        transform: translateY(6px) rotate(45deg);
        width: 100%;
      }

      &:nth-of-type(2) {
        transform: translateY(-6px) rotate(-45deg);
        width: 100%;
      }
    }
  }
`

const Navigation = () => {

  const [scrolledTop, updateScrolledTop] = useState(true)
  const [scrollHeight, updateScrollHeight] = useState(0)
  const [openNav, updateOpenNav] = useState(false)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    Events.scrollEvent.register('begin', () => {
      updateOpenNav(false)
    });
    setTimeout(() => setIsMounted(true), 400);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (window.pageYOffset < 100) {
      updateScrollHeight(window.pageYOffset);
    }
    updateScrolledTop(window.pageYOffset < 100);
  }

  return (
    <NavContainer className={`${scrolledTop ? 'top' : 'scrolled'} ${openNav ? 'open' : 'closed'} ${isMounted ? 'mounted' : 'not-mounted'}`}
    scrollHeight={scrollHeight}>
        <MobileNavContainer className={`${openNav ? 'open' : 'closed'}`}>
          <MobileNav className={`${openNav ? 'open' : 'closed'}`}>
            <NavLinks>
              <Link href="#projects" className="nav-link" style={{ transitionDelay: `${openNav ? '100ms' : '250ms'}` }} offset={-30} to="projects" spy={true} smooth={true} delay={400} duration={500} >Projects</Link>
              <Link href="#experience" className="nav-link" style={{ transitionDelay: `${openNav ? '150ms' : '200ms'}` }} offset={-30} to="experience" spy={true} smooth={true} delay={400} duration={500} >Experience</Link>
              <Link href="#contact" className="nav-link" style={{ transitionDelay: `${openNav ? '200ms' : '150ms'}` }} offset={-30} to="contact" spy={true} smooth={true} delay={400} duration={500} >Contact</Link>
              <a className="nav-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ transitionDelay: `${openNav ? '250ms' : '100ms'}` }} >Resume</a>
            </NavLinks>
            <SocialLinks style={{ transitionDelay: `${openNav ? '300ms' : '50ms'}` }} className={`${openNav ? 'open' : 'closed'}`}>
              <SocialIconLinks iconClasses="nav-icon" />
            </SocialLinks>
          </MobileNav>
        <MobileNavOverlay onClick={() => updateOpenNav(false)} className={`${openNav ? 'open' : 'closed'}`} />
      </MobileNavContainer>
      <Nav className={`${scrolledTop ? 'top' : 'scrolled'}`}>
        <NavLogo src={scrolledTop ? logoLight : logoDark} alt="Cade Kynaston Logo" />
        <NavButton
          onClick={() => updateOpenNav(prevState => !prevState)}
          className={`${openNav ? 'open' : 'closed'} ${scrolledTop ? 'top' : 'scrolled'}`} >
          <div></div>
          <div></div>
        </NavButton>
      </Nav>
    </NavContainer>
  )
}

export default Navigation
