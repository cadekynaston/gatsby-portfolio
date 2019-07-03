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

const Header = ({ data, colors, bgColor }) => {

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 1000)
  });

  const { frontmatter, html } = data[0].node

  const subItems = frontmatter.subitems.map(item => {
    return <span>item</span>
  })

  const one = () => <h2 style={{ transitionDelay: '200ms' }}>{frontmatter.title}</h2>;
  const two = () => <h1 style={{ transitionDelay: '300ms' }}>{frontmatter.name}</h1>;
  const three = () => (
    <div style={{ transitionDelay: '400ms' }}>
      <h5 className="subtitle-items">{frontmatter.subtitle}
        <div className="vertical-text-transition">
          {frontmatter.subitems.map(item => <span key={item}>{item}</span>)}
        </div>
      </h5>
    </div>
  );

  const items = [one, two, three];

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
