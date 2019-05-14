import React from "react"
import styled from "@emotion/styled"

import Project from './project'
import { Container, Section, theme, media } from '../styles'

const Background = styled.div`
  background-color: ${theme.colors.dark};
`;

const Projects = ({ data }) => {

  const { frontmatter, html } = data[0].node;

  // console.log(data)

  return (
    <Section bgColor={theme.colors.dark}>
      <Container>
        <Project />
      </Container>
    </Section>
  )

}


export default Projects


