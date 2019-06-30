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

    grid-template-columns: 1fr 1fr 1fr;

    .feature-1 {
      grid-column: 1/3;
      grid-row: 1/3;
    }

    .feature-2 {
      grid-column: 2/4;
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
          <Project classes="feature-1 featured" img={game} title="Connect 4 React"/>
          <Project img={bruner} title="Bruner Dynamics" />
          <Project img={portfolio} title="Portfolio" />
          <Project img={portfolio} title="Clearlink" />
          <Project classes="feature-2 featured" img={phone} title="Calldrip"
            description="While working at Calldrip I created a product called Dynamic Numbers which would dynamically show each new user to the site a different phone number for customer tracking and fine tuned targeting." />
          <Project img={portfolio}
            title="You Would Not Believe Your Eyes" />

        </ProjectGrid>
      </Container>
    </Section>
  )

}


export default Projects


