import * as React from "react"
import Layout from "../components/Layout"

import { graphql } from "gatsby"
import { getCart } from "../utils"
import { CartAndFavTable } from "../components/CartAndFavTable"
import { Box, Typography } from "@material-ui/core"

const Cart: React.FC<any> = ({ data }) => {
  const cart = getCart()
  const filteredData = cart.map(item => {
    const edge = data.allContentfulProduct.edges.find(
      (edge: any) => edge.node.name === item.productName
    )
    return { edge: edge, quantity: item.quantity }
  })

  return (
    <Layout>
      <Box marginTop={5}>
        <Box border={1}>
          <Typography variant="h4">Cart</Typography>
        </Box>
        <CartAndFavTable data={filteredData} />
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

export default Cart
