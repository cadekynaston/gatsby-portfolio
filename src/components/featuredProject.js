import React from "react"
import styled from "@emotion/styled"

import { theme, media } from '../styles'
import Fade from 'react-reveal/Fade';
import TechList from './TechList';
import Image from './image'

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

const ImgContainer = styled.div`
  width: 80%;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;

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
  margin-bottom: 15px;
`

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.small} {
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

const ProjectLinks = styled.div`
  justify-content: flex-end;
  display: flex;

  ${media.small} {
    width: 100%;
    margin-bottom: 15px;
    justify-content: center;
  }
`

const ProjectLink = styled.a`
  padding: 12px 20px;
  color: ${theme.colors.light};
  background-color: ${theme.colors.mayerPurple};
  border-radius: 5px;
  white-space: nowrap;
  box-shadow: ${theme.boxShadow};
  transition: ${theme.transition};

  :nth-of-type(2) {
    margin-left: 10px;
  }

  &:hover {
    box-shadow: ${theme.boxShadowHover};
  }

  ${media.small} {
    width: 50%;
    margin-left: 0;
    text-align: center;
    flex-grow: 1;
  }
`

const FeaturedProject = ({ img, title, classes, description, techList, siteLink, codeLink }) => {

  return (
    <FeaturedProjectContainer className={classes}>
      <ImgContainer>
        <Image filename={img} alt={`${title}`} className="gatsby-sbs-image"/>
      </ImgContainer>
      <Title>{title}</Title>
      <Description>
        {description}
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


