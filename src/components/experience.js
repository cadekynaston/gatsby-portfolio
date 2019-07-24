import React from "react"
import styled from "@emotion/styled"
import { Element } from 'react-scroll'

import ExperienceItem from './experienceItem'
import { Container, Section, theme, media } from '../styles'



const Title = styled.h2`
  color: ${theme.colors.light};
  /* text-shadow: -1px -1px 0 ${theme.colors.light}, 1px -1px 0 ${theme.colors.light}, -1px 1px 0 ${theme.colors.light}, 1px 1px 0 ${theme.colors.light}; */

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
      <Element name="experience" />
      <Container>
        <Title>Experience.</Title>
        <ExperienceContainer>
          <ExperienceItem
            company="@Clearlink"
            dates="January 2018 &mdash;  Current"
            position="Front End Developer"
            copy="At Clearlink we create create SEO driven websites to generate new customers for our brand partners. I work closely with SEO specialists, designers and marketers to create responsive sites."
            open={true} />
          <ExperienceItem
            company="@Calldrip"
            dates="July 2017 &mdash; January 2018"
            position="Software Developer"
            copy="Calldrip is a small software company based in Utah. I functioned as a full stack developer helping them to improve and add features to their web-based customer lead generation software." />
          <ExperienceItem
            company="@Hill Air Force Base"
            dates="May 2016 &mdash;  July 2017"
            position="Software Engineering Intern"
            copy="I worked for the United States Airforce as a civilian during college. I was working for the software maintenance group working on f-16's" />
          <ExperienceItem
            company="@Weber State University"
            position="Software Development Intern"
            dates="December 2015 &mdash;  May 2016" />
        </ExperienceContainer>
      </Container>
    </Section>
  )

}


export default Experience


