import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"

import { theme, media } from '../styles'
import caret from '../images/caret.svg'
import arrow from '../images/arrow.svg'
import rewind from '../images/rewind.svg'

const ExperienceContainer = styled.div`
  background-color: ${theme.colors.darkBlueLighter};
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

const Position = styled.p`
  color: ${theme.colors.lightGray};
`

const Dates = styled.p`
  margin-bottom: 12px;
  color: ${theme.colors.purple};
`

const Copy = styled.p`
  color: ${theme.colors.light};
`

const Tech = styled.ul`

  columns: 2;
  max-width: 500px;
  list-style-type: none;

  li {
    color: ${theme.colors.light};
    margin-bottom: 5px;
    position: relative;

    &::before {
      content : '';
      position: absolute;
      color: ${theme.colors.light};
      left: -17px;
      height: 12px;
      width: 12px;
      top: 0;
      bottom: 0;
      margin: auto;
      background-image: url('${rewind}');
      background-size: 12px;
      background-repeat: no-repeat;
    }
  }

`

const Project = ({ dates, copy, position, title, classes = '', open }) => {

  const [isOpen, updateIsOpen] = useState(open);


  // useEffect(() => {
  //   console.log(isOpen)
  // })


  return (
    <ExperienceContainer className={`${isOpen ? 'open' : ''} ${classes}`}>
      <FirstRow className='first-row' onClick={() => updateIsOpen(prev => !prev)}>
        <Title>{title}</Title>
        <Position>{position}</Position>
      </FirstRow>
      <SecondRow className='description'>
        <Dates>{dates}</Dates>
        <Copy>{copy}</Copy>
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


