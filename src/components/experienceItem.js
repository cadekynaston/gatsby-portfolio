import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"

import { theme, media } from '../styles'
import caret from '../images/caret-right.svg'
import arrow from '../images/arrow.svg'

const ExperienceContainer = styled.div`
  border: 1px solid ${theme.colors.gray};
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  max-width: 900px;
  /* box-shadow: 0px 3px 10px rgba(48, 52, 63, .3); */
  &.open {
    .description {
      display: block;
    }

    .first-row {
      &::after {
        /* background-color: red; */
        transform: rotate(90deg);
      }
    }
  }

`
const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  &::after {
    content : '';
    position: absolute;
    color: ${theme.colors.light};
    right: -20px;
    font-size: 30px;
    height: 20px;
    width: 20px;
    top: 0;
    bottom: 0;
    margin: auto;
    background-image: url('${arrow}');
    background-size: 20px;
    background-repeat: no-repeat;
    transition: transform .2s ease-in-out;
  }

  ${media.small} {
    flex-direction: column;
    align-items: flex-start;
  }

`

const SecondRow = styled.div`
  padding-top: 15px;
  display: none;
`

const Title = styled.h4`
 max-width: 100%;
 text-align: left;
 margin-bottom: 0;
 color: ${theme.colors.yellow};
 margin-right: 15px;
`
const Dates = styled.p`
 color: ${theme.colors.light};

`

const Copy = styled.p`
  color: ${theme.colors.light};
`

const Tech = styled.ul`

  columns: 2;
  max-width: 500px;
  list-style-image: url('${caret}');
  li {
    color: ${theme.colors.light};
    margin-bottom: 5px;
  }

`

const Project = ({ dates, title, classes = '', open }) => {

  const [isOpen, updateIsOpen] = useState(open);


  // useEffect(() => {
  //   console.log(isOpen)
  // })


  return (
    <ExperienceContainer className={`${isOpen ? 'open' : ''} ${classes}`}>
      <FirstRow className='first-row' onClick={() => updateIsOpen(prev => !prev)}>
        <Title>{title}</Title>
        <Dates>{dates}</Dates>
      </FirstRow>
      <SecondRow className='description'>
        <Copy>At Clearlink we create create SEO driven websites to generate new customers for our brand partners. I work closely with SEO specialists, designers and marketers to create responsive sites.</Copy>
        <Tech>
          <li>Handlebars</li>
          <li>PHP</li>
          <li>SCSS</li>
          <li>Sketch</li>
          <li>Javascript</li>
          <li>React</li>
        </Tech>
      </SecondRow>
    </ExperienceContainer>
  )
}

export default Project


