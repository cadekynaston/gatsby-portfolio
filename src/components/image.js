import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 800) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}

    render={data => {

      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      });

      return !image ? null : (
        <Img
          alt={props.alt}
          sizes={image.node.childImageSharp.sizes}
          className={props.classes}
        />
      )
    }
  }
  />
)
export default Image
