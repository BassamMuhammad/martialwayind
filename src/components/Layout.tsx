/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/Header"
import CssBaseline from "@material-ui/core/CssBaseline"
import { Footer } from "./Footer"
// import { CartType, CartContext, FavoriteContext } from "../cartAndFavorites"

const Layout: React.FC = ({ children }) => {
  // const [cart, setCart] = React.useState<CartType>([])
  // const [favorite, setFavorite] = React.useState<string[]>([])
  // React.useEffect(() => {
  //   setCart(
  //     localStorage.getItem("cart")
  //       ? JSON.parse(localStorage.getItem("cart")!)
  //       : []
  //   )
  //   setFavorite(
  //     localStorage.getItem("favorite")
  //       ? JSON.parse(localStorage.getItem("favorite")!)
  //       : []
  //   )
  // }, [])

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          mobile
        }
      }
    }
  `)

  return (
    <>
      <CssBaseline />
      <Header mobile={data.site.siteMetadata?.mobile} />
      {/* <CartContext.Provider value={[cart, setCart]}>
        <FavoriteContext.Provider value={[favorite, setFavorite]}> */}
      <main
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        {children}
      </main>
      {/* </FavoriteContext.Provider>
      </CartContext.Provider> */}
      <Footer mobile={data.site.siteMetadata?.mobile} />
    </>
  )
}

export default Layout
