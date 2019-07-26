import React, { useState } from "react"
import styled from "@emotion/styled"

import { theme, media } from '../styles'
import arrow from '../images/arrow.svg'
import rewind from '../images/rewind.svg'

const ExperienceContainer = styled.div`
  background-color: ${theme.colors.darkBlueLighter};
  border: 1px solid ${theme.colors.gray};
  padding: 20px 40px 20px 20px;
  border-radius: ${theme.borderRadius};
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  max-width: 900px;

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
    transition: ${theme.transition};
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

const Position = styled.h4`
  max-width: 100%;
  text-align: left;
  margin-bottom: 0;
  margin-right: 15px;
  color: ${theme.colors.lightGray};
`

const Company = styled.h5`
  color: ${theme.colors.yellow};
`

const Dates = styled.p`
  margin-bottom: 12px;
  color: ${theme.colors.lightGray};
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
    padding-left: 20px;

    &::before {

      color: ${theme.colors.light};
      position: absolute;
      left: 0;
      height: 12px;
      width: 12px;
      top: 0;
      bottom: 0;
      margin: auto;
      background-image: url('${rewind}');
      background-size: 12px;
      background-repeat: no-repeat;
      content : '';
    }
  }

  ${media.small} {
    padding-left: 0;
  }

`

const Project = React.forwardRef(({ dates, copy, position, company, classes = '', open, jobFeatures }, ref) => {

  const [isOpen, updateIsOpen] = useState(open);

  return (
    <ExperienceContainer ref={ref} className={`${isOpen ? 'open' : ''} ${classes}`}>
      <FirstRow className='first-row' onClick={() => updateIsOpen(prev => !prev)}>
        <Position>{position}</Position>
        <Company>{company}</Company>
      </FirstRow>
      <SecondRow className='description'>
        <Dates>{dates}</Dates>
        <Copy>{copy}</Copy>
        <Tech>
          {jobFeatures.map(feature => <li key={feature}>{feature}</li>)}
        </Tech>
      </SecondRow>
    </ExperienceContainer>
  )
})

export default Project

