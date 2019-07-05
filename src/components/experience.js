import React from "react"
import styled from "@emotion/styled"

import ExperienceItem from './experienceItem'
import { Container, Section, theme, media } from '../styles'


const Title = styled.h2`
  color: ${theme.colors.light};
  margin-bottom: 45px;
`;

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Experience = ({ data }) => {

  const { frontmatter, html } = data[0].node;


  return (
    <Section bgColor={theme.colors.darkBlue}>
      <Container>
        <Title>Experience.</Title>
        <ExperienceContainer>
          <ExperienceItem title="Clearlink" dates="January 2018 &mdash;  Current" open={true} />
          <ExperienceItem title="Calldrip" dates="June 2017 &mdash; January 2018" />
          <ExperienceItem title="Hill Air Force Base" dates="January 2016 &mdash;  June 2017" />
          <ExperienceItem title="Weber State University" dates="August 2015 &mdash;  January 2016" />
        </ExperienceContainer>
      </Container>
    </Section>
  )

}


export default Experience


