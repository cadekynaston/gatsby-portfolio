import React, { useEffect, useState } from "react"
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
  padding-left: 1rem;
  padding-right: 1rem;

  ${media.largeUp} {
    padding-left: 100px;
    padding-right: 100px;
  }
`;

const HeaderText = styled.h1`
  margin-bottom: 10px;
  max-width: 900px;
  ${media.medium} {
    max-width: 700px;
  }

  ${media.small} {
    max-width: 500px;
  }
`

const HeaderCopy = styled.h5`
  font-size: 20px;
  color: ${theme.colors.lightGray};
  max-width: 900px;

  ${media.medium} {
    font-size: 16px;
  }
`

const HeaderLink = styled.a`
  color: ${theme.colors.clearlinkBlue};

  &:hover {
    color: ${theme.colors.blueGray};
    cursor: pointer;
  }
`
const Header = ({ data, bgColor }) => {

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 1000)
  }, []);

  const one = () => <HeaderText style={{ transitionDelay: '200ms' }}>{data.name}<HeaderLink href="https://www.clearlink.com" target="_blank"> {data.company}</HeaderLink></HeaderText>;
  const two = () => <HeaderCopy style={{ transitionDelay: '300ms' }}>{data.copy}</HeaderCopy>;

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
