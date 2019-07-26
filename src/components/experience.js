import React from "react"
import styled from "@emotion/styled"
import { Element } from 'react-scroll'
// import ScrollReveal from 'scrollreveal'

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

    const config = {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay: 200,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };

    // ScrollReveal().reveal(this.refs.title, config)
    // this.revealRefs.forEach((ref) => ScrollReveal().reveal(ref, config));
  }


  render() {

    return (
      <Section bgColor={theme.colors.darkBlue}>
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

