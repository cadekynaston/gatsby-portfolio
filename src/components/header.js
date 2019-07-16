import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Container, theme, media } from '../styles'

const Head = styled.header`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.bgColor ? props.bgColor : theme.colors.dark };
  padding-left: .975rem;
  padding-right: .975rem;

  ${media.largeUp} {
    padding-left: 100px;
    padding-right: 100px;
  }
`;

const HeaderText = styled.h1`
  max-width: 900px;
  margin-bottom: 10px;
`

const HeaderCopy = styled.h5`
  font-size: 20px;
  color: ${theme.colors.lightGray};
  max-width: 900px;
`

const HeaderLink = styled.a`
  color: ${theme.colors.dark};
  text-shadow: -1px -1px 0 ${theme.colors.light}, 1px -1px 0 ${theme.colors.light}, -1px 1px 0 ${theme.colors.light}, 1px 1px 0 ${theme.colors.light};

  &:hover {
    color: ${theme.colors.clearlinkBlue};
    cursor: pointer;
  }
`

const Description = styled.h5`
  max-width: 900px;
`

const Header = ({ data, bgColor }) => {

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 1000)
  }, []);

  const { frontmatter, html } = data[0].node

  const subItems = frontmatter.subitems.map(item => {
    return <span>item</span>
  })

  const one = () => <HeaderText style={{ transitionDelay: '200ms' }}>{frontmatter.name}<HeaderLink href="https://www.clearlink.com" target="_blank"> {frontmatter.company}</HeaderLink></HeaderText>;
  const two = () => <HeaderCopy style={{ transitionDelay: '300ms' }}>{frontmatter.copy}</HeaderCopy>;

  const items = [one, two];

  return (
    <Head bgColor={bgColor}>
      <Container>
          <TransitionGroup>
            {isMounted &&
              items.map((item, i) => (
                <CSSTransition key={i} classNames="fadeup" timeout={3000}>
                  {item}
                </CSSTransition>
              ))
            }
          </TransitionGroup>
      </Container>
    </Head>
  )


}

export default Header
