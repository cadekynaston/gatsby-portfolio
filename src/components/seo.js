import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import siteSnapshot from '../images/site-snapshot.png'
import icon from '../images/gatsby-icon.png'

function SEO({ lang, meta, keywords, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
          }
        }
      }
    `
  )

  const data = site.siteMetadata
  return (
    <Helmet htmlAttributes={{ lang }} >
      <title itemProp="name" lang="en">
        {data.title}
      </title>
      <link rel="shortcut icon" href={icon} />
      <meta name="description" content={data.description} />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={data.url} />
      <meta property="og:site_name" content={data.title} />
      <meta property="og:image" content={`${data.url}${siteSnapshot}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="600" />
      <meta property="og:image:type" content="image/png" />
      <meta itemProp="name" content={data.title} />
      <meta itemProp="description" content={data.description} />
      <meta itemProp="image" content={`${data.url}${siteSnapshot}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={data.siteUrl} />
      <meta name="twitter:site" content={data.author} />
      <meta name="twitter:creator" content={data.author} />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />
      <meta name="twitter:image" content={`${data.url}${siteSnapshot}`} />
      <meta name="twitter:image:alt" content={data.title} />

      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Cade.Codes",
            "item": "https://cade.codes"
          },{
            "@type": "ListItem",
            "position": 2,
            "name": "Home",
            "item": "https://cade.codes"
          }]
        }
      `}</script>

    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string)
}

export default SEO
