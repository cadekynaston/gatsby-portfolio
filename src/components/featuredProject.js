import React from "react"
import styled from "@emotion/styled"

import { theme, media } from '../styles'
import Fade from 'react-reveal/Fade';
import TechList from './TechList';

const FeaturedProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 5px;
  background-color: ${theme.colors.light};
  box-shadow: ${theme.boxShadow};

  &.featured {
    h5 {
      font-size: 30px;
      line-height: 38px;
    }
  }
`

const Img = styled.img`
  height: auto;
  max-height: 400px;
  max-width: 400px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

  ${media.small} {
    max-width: 100%;
  }
`

const Title = styled.h3`
  max-width: 100%;
  text-align: left;
  margin-bottom: 10px;
  color: ${theme.colors.darkLight};
`

const Description = styled.p`
  color: ${theme.colors.darkLight};
`

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ProjectLinks = styled.div`
  justify-content: flex-end;
  display: flex;
`

const ProjectLink = styled.a`
  padding: 12px 20px;
  color: ${theme.colors.light};
  background-color: ${theme.colors.mayerPurple};
  margin-left: 10px;
  border-radius: 5px;
  white-space: nowrap;

  &:hover {
    opacity: .7;
  }
`

const FeaturedProject = ({ img, title, classes, description, techList, siteLink, codeLink }) => {

  return (
    <FeaturedProjectContainer className={classes}>
      <Img src={img} alt="" />
      <Title>{title}</Title>
      <Description>
        {description ? description : "A super cool game I created to practice using react."}
      </Description>
      <FlexRow>
        <TechList items={techList} />
        <ProjectLinks>
            { siteLink &&
              <ProjectLink href={siteLink} target='_blank'>Visit Site</ProjectLink>
            }
            { codeLink &&
              <ProjectLink href={codeLink} target='_blank'>View Code</ProjectLink>
            }
        </ProjectLinks>
      </FlexRow>
    </FeaturedProjectContainer>
  )
}

export default FeaturedProject


