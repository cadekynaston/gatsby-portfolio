import React from "react"
import styled from "@emotion/styled"

import Project from './project'
import { Container, Section, theme, media } from '../styles'
import game from '../images/game.svg'
import portfolio from '../images/portfolio.svg'
import bruner from '../images/bruner-devices.png'
import phone from '../images/phone.svg'


const Title = styled.h2`
  color: ${theme.colors.dark};
  margin-bottom: 45px;

`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-row: auto;
  grid-gap: 18px;

  ${media.largeUp} {

    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    .project {
      grid-column: span 2;
    }

    .feature-1 {
      grid-column: 1/4;
      grid-row: 1/3;
    }

    .feature-2 {
      grid-column: 3/6;
      grid-row: 3/5;
    }
  }

`

const Projects = ({ data }) => {

  const { frontmatter, html } = data[0].node;

  // console.log(data)

  return (
    <Section bgColor={theme.colors.light}>
      <Container>
        <Title>Projects.</Title>
        <ProjectGrid>
          <Project classes="feature-1 featured" featured={true} img={game} title="Connect 4 React"/>
          <Project classes="project" title="Bruner Dynamics" />
          <Project classes="project" title="Portfolio" />
          <Project classes="project" title="Clearlink" />
          <Project classes="feature-2 featured" featured={true} img={phone} title="Calldrip"
            description="While working at Calldrip I created a product called Dynamic Numbers which would dynamically show each new user to the site a different phone number for customer tracking and fine tuned targeting." />
          <Project classes="project"
            title="You Would Not Believe Your Eyes" />

        </ProjectGrid>
      </Container>
    </Section>
  )

}


export default Projects


