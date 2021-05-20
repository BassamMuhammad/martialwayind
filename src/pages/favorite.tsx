import * as React from "react"
import Layout from "../components/Layout"

import { graphql } from "gatsby"
import { getFavorite } from "../utils"
import { CartAndFavTable } from "../components/CartAndFavTable"
import { Box, Typography } from "@material-ui/core"

const Favorite: React.FC<any> = ({ data }) => {
  const favorite = getFavorite()
  const filteredData = favorite.map(item => {
    const edge = data.allContentfulProduct.edges.find(
      (edge: any) => edge.node.name === item
    )
    return { edge: edge }
  })

  return (
    <Layout>
      <Box marginTop={5} height="100vh">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          border={1}
          marginBottom={2}
        >
          <Typography variant="h4">Favorites</Typography>
        </Box>
        <CartAndFavTable data={filteredData} isCart={false} />
      </Box>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      edges {
        node {
          category
          name
          price
          image {
            gatsbyImageData(height: 50)
            title
          }
        }
      }
    }
  }
`

export default Favorite
