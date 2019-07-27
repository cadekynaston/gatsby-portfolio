import React from "react"
import styled from "@emotion/styled"
import { Element } from 'react-scroll'
import ScrollReveal from 'scrollreveal'

import Project from './project'
import FeaturedProject from './featuredProject';
import { Container, Section, theme, media } from '../styles'

const Title = styled.h2`
  color: ${theme.colors.dark};
  margin-bottom: 45px;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-gap: 20px;

  ${media.mediumOnly} {

    grid-template-columns: 1fr 1fr;

    .featured {
      grid-column: span 2;
    }
  }

  ${media.largeUp} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 40px;


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

// const ViewMoreProjects = styled.div`
//   background-color: ${theme.colors.mayerPurple};
//   color: ${theme.colors.light};
//   text-align: center;
//   padding: 12px 20px;
//   border-radius: ${theme.borderRadius};
//   width: 350px;
//   margin-top: 30px;
//   margin-left: auto;
//   margin-right: auto;
//   box-shadow: ${theme.boxShadow};
//   transition: ${theme.transition};
//   &:hover {
//     cursor: pointer;
//     box-shadow: ${theme.boxShadowHover};
//   }

// `

class Projects extends React.Component {

  // const [seeMoreProjects, updateSeeMoreProjects] = useState(false)
  constructor(props) {
    super(props);
    this.revealRefs = [];
  }

  componentDidMount = () => {
    const revealConfig = theme.scrollRevealConfig;
    revealConfig.afterReveal = el => {
      el.style.transform = '';
      el.style.transition = '';
    }
    ScrollReveal().reveal(this.refs.title, theme.scrollRevealConfig)
    this.revealRefs.forEach((ref) => ScrollReveal().reveal(ref, revealConfig));
  }


  render() {

    const projectsJSX = this.props.data.map((projectNode, i) => {
      const project =  projectNode.node;
      if (project.featured) {
        return <FeaturedProject
            title={`${project.title}`}
            classes={`${project.classes}`}
            description={`${project.description}`}
            techList={project.techList}
            img={`${project.img}`}
            codeLink={`${project.codeLink}`}
            siteLink={`${project.siteLink}`}
            key={project.title}
            ref={ref => (this.revealRefs[i] = ref)}  />
      }
      return <Project
          title={`${project.title}`}
          classes={`${project.classes}`}
          description={`${project.description}`}
          techList={project.techList}
          icon={`${project.img}`}
          codeLink={`${project.codeLink}`}
          siteLink={`${project.siteLink}`}
          key={project.title}
          ref={ref => (this.revealRefs[i] = ref)}  />
    })

    return (
      <Section bgColor={theme.colors.light} id="projects">
        <Element name="projects" />
        <Container>
          <Title ref='title'>Projects.</Title>
          <ProjectGrid>
            {projectsJSX}
          </ProjectGrid>
          {/* <ViewMoreProjects onClick={() => updateSeeMoreProjects(prevState => !prevState)}>See More</ViewMoreProjects> */}
        </Container>
      </Section>
    )
  }
}

export default Projects

