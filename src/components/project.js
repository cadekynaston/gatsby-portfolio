import React, { useState } from 'react'
import styled from '@emotion/styled'
import Fade from 'react-reveal/Fade'

import { theme, media } from '../styles'
import TechList from './TechList'
import Image from './image'


const ProjectInner = styled.div`
  background-color: ${theme.colors.light};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 20px;
  box-shadow: ${theme.boxShadow};
  border-radius: 5px;


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

`;
const ProjectContainer = styled.div`

  transition: ${theme.transition};
  position: relative;

  ${media.largeUp} {
    &.hovered {
      transform: translateY(-25px);

      .project-links {
        transform: translateY(25px);
        opacity: 1;
        z-index: unset;
      }
    }
  }
`

const ImageContainer = styled.div`
  width: 50px;
  height: 50px;
  margin-bottom: 15px;
  margin-right: 15px;
`

const Title = styled.h4`
 max-width: 100%;
 text-align: left;
 margin-bottom: 10px;
`

const Description = styled.p`
 max-width: 100%;
 text-align: left;
 margin-bottom: 15px;
 color: ${theme.colors.darkLight};

  a {

    color: ${theme.colors.mayerPurple};
    text-decoration: underline;

    &:visited {
      color: ${theme.colors.mayerPurple};
    }
  }

`

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ProjectLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;

  ${media.largeUp} {
    display: flex;
    position: absolute;
    flex-direction: row;
    margin-bottom: 0;
    z-index: -1;
    bottom: -18px;
    left: 0;
    right: 0;
    opacity: 0;
    transition: ${theme.transition};
  }
`

const ProjectLink = styled.a`

  color: ${theme.colors.mayerPurple};
  text-align: center;
  padding: 12px 20px;
  flex-grow: 1;

  &:hover {
    color: ${theme.colors.dark};
  }

  ${media.medium} {
    width: 50%;
    border-radius: 5px;
    background-color: ${theme.colors.mayerPurple};
    color: ${theme.colors.light};
    white-space: nowrap;
    box-shadow: ${theme.boxShadow};
    transition: ${theme.transition};

    :nth-of-type(2) {
      margin-left: 10px;
    }

    &:hover {
      color: ${theme.colors.light};
      box-shadow: ${theme.boxShadowHover};
    }

  }
`


const Project = ({ icon, title, classes, description, techList, codeLink, siteLink }) => {

  const [packageCardHover, updatePackageCardHover] = useState(false)

  return (
    <ProjectContainer className={`${classes} ${packageCardHover ? 'hovered': ''}`}>
      <ProjectInner
        onMouseEnter={() => updatePackageCardHover(true)}
        onMouseLeave={() => updatePackageCardHover(false)} >
        <Fade>
        <div>
          <FlexRow>
            <ImageContainer>
              <Image filename={`${icon}`} classes='gatsby-sbs-image' alt={`${title}`} />
            </ImageContainer>
            <Title>{title}</Title>
          </FlexRow>
          <Description dangerouslySetInnerHTML={{__html: description}} />
        </div>
        <div>
          <ProjectLinks className='project-links'>
              { siteLink &&
                <ProjectLink className='first' href={siteLink} target='_blank'>
                  Visit Site &rsaquo;
                </ProjectLink>
              }
              { codeLink &&
                <ProjectLink href={codeLink} target='_blank'>
                  View Code &rsaquo;
                </ProjectLink>
              }
            </ProjectLinks>
          <TechList items={techList} />
        </div>
        </Fade>
      </ProjectInner>
    </ProjectContainer>
  )
}

export default Project


