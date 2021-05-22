import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import * as React from "react"
import { PromotionComp } from "../components/PromotionComp"

import Layout from "../components/Layout"
import Seo from "../components/seo"

import Divider from "@material-ui/core/Divider"
import { IndexImages } from "../components/IndexImages"
import { StaticImage } from "gatsby-plugin-image"

import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { graphql } from "gatsby"
import { ProductComp } from "../components/ProductComp"

const IndexPage: React.FC<any> = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <Box marginTop={5}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Carousel
              autoPlay={true}
              infiniteLoop
              showStatus={false}
              stopOnHover
              showThumbs={false}
            >
              <Box height="33%">
                <StaticImage
                  src="https://source.unsplash.com/random/1000x500"
                  alt="logo"
                />
              </Box>
              <Box height="33%">
                <StaticImage
                  src="https://source.unsplash.com/random/1000x500"
                  alt="logo"
                />
              </Box>
              <Box height="33%">
                <StaticImage
                  src="https://source.unsplash.com/random/1000x500"
                  alt="logo"
                />
              </Box>
            </Carousel>
          </Grid>
          <Grid item>
            <IndexImages />
          </Grid>

          <Grid item>
            <PromotionComp />
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Typography variant="h4">New Incomes</Typography>
              </Grid>
              <Grid item>
                <Button variant="outlined">
                  <Typography variant="button">Show More</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              {data.allContentfulProduct.edges.map((edge: any) => (
                <Grid item key={edge.node.name}>
                  <ProductComp node={edge.node} />
                </Grid>
              ))}
            </Grid>
          </Grid>
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
          contentful_id
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

export default IndexPage
