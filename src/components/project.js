import React, { useState } from 'react'
import styled from '@emotion/styled'

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
  border-radius: ${theme.borderRadius};


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
    color: ${theme.colors.darkLight};
    text-decoration: underline;

    &:visited {
      color: ${theme.colors.darkLight};
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

  color: ${theme.colors.clearlinkBlue};
  text-align: center;
  padding: 12px 20px;
  flex-grow: 1;

  &:hover {
    color: ${theme.colors.dark};
  }

  ${media.medium} {
    width: 50%;
    border-radius: ${theme.borderRadius};
    background-color: ${theme.colors.yellow};
    box-shadow: ${theme.boxShadow};
    color: ${theme.colors.darkLight};
    white-space: nowrap;
    transition: ${theme.transition};

    :nth-of-type(2) {
      margin-left: 10px;
    }

    &:hover {
      color: ${theme.colors.dark};
      box-shadow: ${theme.boxShadowHover};
    }

  }
`


const Project = React.forwardRef(({ icon, title, classes, description, techList, codeLink, siteLink }, ref) => {

  const [packageCardHover, updatePackageCardHover] = useState(false)

  return (
    <ProjectContainer ref={ref} className={`${classes} ${packageCardHover ? 'hovered': ''}`}>
      <ProjectInner
        onMouseEnter={() => updatePackageCardHover(true)}
        onMouseLeave={() => updatePackageCardHover(false)} >
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
              { siteLink !== 'null' &&
                <ProjectLink className='first' href={siteLink} target='_blank'>
                  Visit Site ›
                </ProjectLink>
              }
              { codeLink !== 'null' &&
                <ProjectLink href={codeLink} target='_blank'>
                  View Code ›
                </ProjectLink>
              }
            </ProjectLinks>
          <TechList items={techList} />
        </div>
      </ProjectInner>
    </ProjectContainer>
  )
})

export default Project

