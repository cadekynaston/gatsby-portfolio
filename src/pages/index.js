import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import Projects from '../components/projects';
import Experience from '../components/experience';
import Contact from '../components/contact';
import Footer from '../components/footer';

const IndexPage = ({ data }) =>  (
  <Layout>
    <Header data={data.header} />
    <Projects data={data.projects.edges} />
    <Experience data={data.experience.edges} />
    <Contact data={data.projects.edges} />
    <Footer />
  </Layout>
)

export default IndexPage

export const query = graphql`

  query IndexQuery {

    header: headerJson {
      intro
      name
      company
      companyURL
      subtitle
      copy
      subCopy
    }

    projects: allProjectsJson {
      edges {
        node {
          title
          classes
          description
          techList
          img
          codeLink
          siteLink
          featured
        }
      }
    }

    experience: allExperienceJson {
      edges {
        node {
          company
          dates
          position
          copy
          jobFeatures
          open
        }
      }
    }
  }
`;

