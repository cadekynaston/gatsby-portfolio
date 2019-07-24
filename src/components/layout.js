import React from "react"
import PropTypes from "prop-types"

import { GlobalStyles, theme } from '../styles'
import Navigation from './Navigation';
import SideItemsLeft from './SideItemsLeft'
import SideItemsRight from './SideItemsRight'
import SEO from '../components/seo';

const Layout = ({ children }) => {
  return (
    <main>
      <SEO />
      <GlobalStyles />
      <Navigation />
      <SideItemsLeft />
      <SideItemsRight />
      {children}
    </main>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


// //   <StaticQuery
// query={graphql`
// query SiteTitleQuery {
//   site {
//     siteMetadata {
//       title
//     }
//   }
// }
// `}
// render={data => (
// <>
//   <Header siteTitle={data.site.siteMetadata.title} />
//   <div
//     style={{
//       margin: `0 auto`,
//       maxWidth: 960,
//       padding: `0px 1.0875rem 1.45rem`,
//       paddingTop: 0,
//     }}
//   >
//     <main>{children}</main>
//     <footer>
//       © {new Date().getFullYear()}, Built with
//       {` `}
//       <a href="https://www.gatsbyjs.org">Gatsby</a>
//     </footer>
//   </div>
// </>
// )}
// />
