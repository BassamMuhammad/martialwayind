import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Box, Grid, Select } from "@material-ui/core"
import { ProductComp } from "../components/ProductComp"
import Seo from "../components/seo"
const Products: React.FC<any> = ({ data }) => {
  const [sort, setSort] = React.useState("createdAt ASC")
  data.allContentfulProduct.edges.sort((a: any, b: any) => {
    if (sort === "createdAt ASC") return a.node.createdAt - b.node.createdAt
    else if (sort === "createdAt DESC")
      return b.node.createdAt - a.node.createdAt
    else if (sort === "price ASC") return a.node.price - b.node.price
    else if (sort === "price DESC") return b.node.price - a.node.price
    else return b.node.sold - a.node.sold
  })
  return (
    <Layout>
      <Seo title="Products" />
      <Box marginTop={5} height="100vh">
        <Box marginY={2}>
          <Select
            native
            value={sort}
            onChange={event => setSort(event.target.value as string)}
            variant="outlined"
          >
            <option value={"createdAt ASC"}>Sort by latest</option>
            <option value={"createdAt DESC"}>Sort by oldest</option>
            <option value={"price ASC"}>Sort by increasing price</option>
            <option value={"price DESC"}>Sort by decreasing price</option>
            <option value={"sold DESC"}>Sort by popularity</option>
          </Select>
        </Box>
        <Grid container spacing={2}>
          {data.allContentfulProduct.edges.map((edge: any) => (
            <Grid item key={edge.node.name}>
              <ProductComp node={edge.node} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  )
}

export const data = graphql`
  {
    allContentfulProduct {
      edges {
        node {
          category
          name
          price
          createdAt(difference: "2021-01-01")
          image {
            gatsbyImageData(
              placeholder: TRACED_SVG
              layout: CONSTRAINED
              height: 200
            )
            title
          }
        }
      }
    }
  }
`

export default Products
