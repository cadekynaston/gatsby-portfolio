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
  background-color: ${props => props.bgColor ? props.bgColor : theme.colors.darkBlue };
  padding-left: 1rem;
  padding-right: 1rem;

  ${media.largeUp} {
    padding-left: 100px;
    padding-right: 100px;
  }
`;

const HeaderText = styled.h1`
  margin-bottom: 5px;
  max-width: 900px;
  ${media.medium} {
    max-width: 700px;
  }

  ${media.small} {
    max-width: 500px;
  }
`

const HeaderCopy = styled.h3`

  max-width: 900px;
  margin-bottom: 15px;

  ${media.medium} {
    font-size: 30px;
  }
`

const HeaderSubCopy = styled.h5`
  font-size: 20px;
  color: ${theme.colors.gray};
  max-width: 480px;
  margin-bottom: 10px;

  ${media.medium} {
    font-size: 18px;
  }
`

const HeaderLink = styled.a`
  color: ${theme.colors.yellow};
  /* text-shadow: -1px -1px 0 ${theme.colors.yellow}, 1px -1px 0 ${theme.colors.yellow}, -1px 1px 0 ${theme.colors.yellow}, 1px 1px 0 ${theme.colors.yellow}; */

  line-height: 44px;


  ${media.medium} {
    font-size: 32px;
  }

  &:hover {
    color: ${theme.colors.darkBlue};
    text-shadow: -1px -1px 0 ${theme.colors.yellow}, 1px -1px 0 ${theme.colors.yellow}, -1px 1px 0 ${theme.colors.yellow}, 1px 1px 0 ${theme.colors.yellow};
    cursor: pointer;
  }
`
const Header = ({ data, bgColor }) => {

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 1000)
  }, []);

  const one = () => <HeaderSubCopy style={{ transitionDelay: '100ms', color:'white' }}>{data.intro}</HeaderSubCopy>;
  const two = () => <HeaderText style={{ transitionDelay: '200ms' }}>{data.name}</HeaderText>;
  const three = () => <HeaderCopy style={{ transitionDelay: '300ms' }}>{data.copy} <HeaderLink href="https://www.clearlink.com" target="_blank"> {data.company}</HeaderLink></HeaderCopy>;
  const four = () => <HeaderSubCopy style={{ transitionDelay: '400ms' }}>{data.subCopy}</HeaderSubCopy>;

  const items = [one, two, three, four];

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
