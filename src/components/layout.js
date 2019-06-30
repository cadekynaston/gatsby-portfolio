import React from "react"
import PropTypes from "prop-types"

import { GlobalStyles, theme } from '../styles'
import Navigation from './Navigation';
import SideItemsLeft from './SideItemsLeft'
import SideItemsRight from './SideItemsRight'

class Layout extends React.Component {

  constructor() {
    super()

    this.state = {
      altColors: false,
    }
  }

  // componentDidMount() {
  //   this.changeTheme()
  // }

  // changeTheme = () => {
  //   this.setState(prevState => ({
  //     altColors: !prevState.altColors
  //   }), () => {
  //     setTimeout(() => {
  //       this.changeTheme()
  //     }, 2000)
  //   })
  // }

  render() {
    // console.log(theme.colors, theme.altColors)
    return (
      <main>
        <GlobalStyles colors={this.state.altColors ? theme.darkThemeColors : theme.darkThemeColors} />
        <Navigation />
        <SideItemsLeft />
        <SideItemsRight />
        {this.props.children}
      </main>
    )
  }
}

  // theme https://coolors.co/30343f-fafaff-e4d9ff-273469-1e2749
  // alt theme https://coolors.co/ffe74c-ff5964-ffffff-38618c-35a7ff
  // https://coolors.co/272727-fed766-ffffff-009fb7-696773


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
