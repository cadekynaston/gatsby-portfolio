import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Container, theme } from '../styles'

const Head = styled.header`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.bgColor ? props.bgColor : theme.colors.dark };
`;

const Header = ({ data, colors }) => {

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 1000)
  });

  const { frontmatter, html } = data[0].node

  const one = () => <h2 style={{ transitionDelay: '200ms' }}>{frontmatter.title}</h2>;
  const two = () => <h1 style={{ transitionDelay: '300ms' }}>{frontmatter.name}</h1>;
  const three = () => (
    <h3 style={{ transitionDelay: '400ms' }}>{frontmatter.subtitle}</h3>
  );

  const items = [one, two, three];

  return (
    <Head>
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
