import React from "react"
import styled from "@emotion/styled"
import { Element } from 'react-scroll'
import Fade from 'react-reveal/Fade';

import ExperienceItem from './experienceItem'
import { Container, Section, theme } from '../styles'

const Title = styled.h2`
  color: ${theme.colors.light};
  margin-bottom: 45px;
`;

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Experience = ({ data }) => {

  const experienceJSX = data.map(experienceNode => {
    const experience =  experienceNode.node;
    return <ExperienceItem
      company={`${experience.company}`}
      dates={`${experience.dates}`}
      position={`${experience.position}`}
      copy={`${experience.copy}`}
      open={experience.open}
      jobFeatures={experience.jobFeatures}
      key={`${experience.company}`} />
  })

  return (
    <Section bgColor={theme.colors.darkBlue}>
      <Element name="experience" />
      <Container>
        <Fade>
          <Title>Experience.</Title>
        </Fade>
        <ExperienceContainer>
          <Fade>
            {experienceJSX}
          </Fade>
        </ExperienceContainer>
      </Container>
    </Section>
  )

}


export default Experience


