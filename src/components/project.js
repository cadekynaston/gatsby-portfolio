import React from "react"
import styled from "@emotion/styled"

import { theme, media } from '../styles'
import Fade from 'react-reveal/Fade';

const ProjectContainer = styled.div`
  /* border: 1px solid ${theme.colors.gray}; */
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: 0px 3px 10px rgba(48, 52, 63, .3);

  &.featured {
    justify-content: flex-start;

    h5 {
      font-size: 30px;
      line-height: 38px;
    }
    img {
      max-width: 80%;
    }
  }
`

const Img = styled.img`
 max-width: 100%;
 display: block;
 margin-left: auto;
 margin-right: auto;
 margin-bottom: 15px;
`

const Separator = styled.div`

`

const Title = styled.h5`
 max-width: 100%;
 text-align: left;
 margin-bottom: 10px;
`

const Description = styled.p`
 max-width: 100%;
 text-align: left;
`

const Project = ({ img, title, classes, description }) => {

  return (
    <ProjectContainer className={classes}>
      <Img src={img} alt="" />
      <Separator>
        <Title>{title}</Title>
        <Description>
          {description ? description : "A super cool game I created to practice using react."}
        </Description>
      </Separator>
    </ProjectContainer>
  )
}

export default Project


