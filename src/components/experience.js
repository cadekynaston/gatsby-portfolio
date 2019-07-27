import React from "react"
import styled from "@emotion/styled"
import { Element } from 'react-scroll'
import ScrollReveal from 'scrollreveal'

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
class Experience extends React.Component  {

  constructor(props) {
    super(props);
    this.revealRefs = [];
  }

  componentDidMount = () => {
    ScrollReveal().reveal(this.refs.title, theme.scrollRevealConfig)
    this.revealRefs.forEach((ref) => ScrollReveal().reveal(ref, theme.scrollRevealConfig));
  }

  render() {

    return (
      <Section bgColor={theme.colors.darkBlue} id="experience">
        <Element name='experience' />
        <Container>
          <Title ref='title'>Experience.</Title>
          <ExperienceContainer>
            {
              this.props.data.map((experienceNode, i) => {
                const experience =  experienceNode.node;
                return <ExperienceItem
                  company={`${experience.company}`}
                  dates={`${experience.dates}`}
                  position={`${experience.position}`}
                  copy={`${experience.copy}`}
                  open={experience.open}
                  jobFeatures={experience.jobFeatures}
                  key={`${experience.company}`}
                  ref={ref => (this.revealRefs[i] = ref)} />
              })
            }
          </ExperienceContainer>
        </Container>
      </Section>
    )
  }

}


export default Experience

