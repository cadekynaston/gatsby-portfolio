import React from "react"
import styled from "@emotion/styled"

import Project from './project'
import { Container, Section, theme, media } from '../styles'

import bruner from '../images/bruner-logo.svg'
import FeaturedProject from './featuredProject';
import firefly from '../images/firefly.png'
import clearlink from '../images/clearlink.jpeg'
import toys from '../images/toys.svg'
import reactConnect4 from '../images/react-connect-4.png'
import dataLock from '../images/data-lock.svg'


const Title = styled.h2`
  color: ${theme.colors.dark};
  margin-bottom: 45px;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-gap: 40px;

  ${media.mediumOnly} {
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;

    .featured {
      grid-column: span 2;
    }
  }

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

  return (
    <Section bgColor={theme.colors.light}>
      <Container>
        <Title>Projects.</Title>
        <ProjectGrid>

          <FeaturedProject
            classes="feature-1 featured"
            img={reactConnect4}
            title="Connect 4 React"
            description="My first site using state within React. When I learn a new language or library I usually create some version of Connect 4 to learn more about how the language works. In fact Connect 4 was the first website I ever created!"
            techList={['React', 'Github Pages', 'React Color Picker', 'Google Analytics']}
            codeLink="https://github.com/cadekynaston/connect4-react"
            siteLink="https://cadekynaston.github.io/connect4-react/" />

          <FeaturedProject classes="feature-2 featured"
            featured={true}
            img={dataLock}
            title="Calldrip"
            description="While working at Calldrip I helped create a product called Dynamic Numbers which would dynamically show each unique visitor to our clients website a unique phone number. Those phone numbers could then be tracked for precise customer tracking."
            techList={['PHP', 'MySQL', 'Google Cloud Platform', 'Bootstrap', 'Google Charts']}
            siteLink="https://www.calldrip.com/" />

          <Project
            classes="project"
            icon={bruner}
            title="Bruner Dynamics"
            description="My first Gatsby demo site. This site features GraphQL and gatsby-image."
            techList={['React', 'Gatsby', 'Netlify', 'Emotion', 'GraphQL']}
            codeLink="https://github.com/cadekynaston/gatsby-bruner-dynamics"
            siteLink="https://brunerdynamics.netlify.com/" />

          <Project
            classes="project"
            icon={clearlink}
            title="Clearlink"
            description="At Clearlink I've worked on an assortment of sites including <a href='https://www.usdish.com/' target='_blank'>USDISH</a>, <a href='https://www.yourlocalsecurity.com/' target='_blank'>Your Local Security</a>, and <a href='https://www.frontierbundles.com/' target='_blank'>Frontier Bundles</a>."
            techList={['PHP', 'Handlebars.js', 'Sketch', 'SCSS', 'Jira', 'GitHub']}
            siteLink="https://www.clearlink.com/"  />

          <Project
            classes="project"
           icon={toys}
           title="Portfolio"
           description="The previous iteration of my portfolio. My favorite thing about this website are the parallax section headings."
           techList={['Jquery', 'HTML5']}
           codeLink="https://github.com/cadekynaston/portfolio"
           siteLink="https://cadekynaston.github.io/portfolio/" />

          <Project classes="project"
            icon={firefly}
            title="You Would Not Believe Your Eyes"
            description="A gatsby site I created as a joke and ended up learning some pretty cool stuff about google analytics. The person who made the YouTube video featured on the site put my name in the video description and that video has about 3 million views right now."
            techList={['React','Gatsby', 'Google Analytics', 'Netlify', 'React Particles']}
            codeLink="https://github.com/cadekynaston/you-would-not-believe-your-eyes"
            siteLink="https://youwouldnotbelieveyoureyes.com/"  />

        </ProjectGrid>
      </Container>
    </Section>
  )

}


export default Projects


