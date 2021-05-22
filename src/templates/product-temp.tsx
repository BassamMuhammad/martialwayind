import {
  Box,
  Button,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@material-ui/core"
import { Favorite, FavoriteBorderOutlined } from "@material-ui/icons"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/Layout"
import { addRemoveFromCart, addRemoveFromFavorite, getFavorite } from "../utils"
import Seo from "../components/seo"
const ProductTemp: React.FC<any> = ({ data }) => {
  const edge = data.allContentfulProduct.edges[0]
  const [cartValue, setCartValue] = React.useState(1)
  const [imgIndex, setImgIndex] = React.useState(0)
  const [fav, setFav] = React.useState(false)
  return (
    <Layout>
      <Seo title={edge.node.name} />
      <Box marginTop={5}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <GatsbyImage
              image={getImage(edge.node.image[imgIndex].gatsbyImageData)!}
              alt={edge.node.name}
            />
            {edge.node.image.length > 1 && (
              <Grid container justify="space-evenly" alignItems="center">
                {edge.node.image.map((img: any, index: number) => (
                  <Box
                    key={index}
                    height="33%"
                    width="33%"
                    onClick={() => setImgIndex(index)}
                    style={{
                      cursor: "pointer",
                      position: "relative",
                    }}
                  >
                    <GatsbyImage
                      image={getImage(img.gatsbyImageData)!}
                      alt={edge.node.name}
                    />
                    {index !== imgIndex && (
                      <div
                        style={{
                          height: "97%",
                          width: "100%",
                          top: "0px",
                          left: "0px",
                          position: "absolute",
                          backgroundColor: "rgba(0,0,0,0.4)",
                        }}
                      />
                    )}
                  </Box>
                ))}
              </Grid>
            )}
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid
              container
              direction="column"
              spacing={2}
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <Grid container>
                  <Typography variant="h3">
                    {edge.node.name.toUpperCase()}
                  </Typography>
                  <IconButton
                    onClick={e => {
                      e.stopPropagation()
                      addRemoveFromFavorite(edge.node.contentful_id)
                      setFav(!fav)
                    }}
                  >
                    {getFavorite().includes(edge.node.name) ? (
                      <Tooltip title="Remove from Favorites">
                        <Favorite color="error" />
                      </Tooltip>
                    ) : (
                      <Tooltip title="Add to Favorites">
                        <FavoriteBorderOutlined color="error" />
                      </Tooltip>
                    )}
                  </IconButton>
                </Grid>
                <Typography variant="h4">
                  Category: {edge.node.category}
                </Typography>
                <Typography variant="h4">Price: ${edge.node.price}</Typography>
              </Grid>
              <Grid item>
                <Grid container>
                  <input
                    style={{ width: "5em" }}
                    type="number"
                    value={cartValue}
                    onChange={event => {
                      try {
                        const value = parseInt(event.target.value)
                        if (value <= 0 || Number.isNaN(value)) setCartValue(1)
                        else setCartValue(value)
                      } catch (error) {}
                    }}
                  />
                  <Box marginLeft={2}>
                    <Button
                      variant="outlined"
                      onClick={() =>
                        addRemoveFromCart(
                          edge.node.contentful_id,
                          cartValue,
                          true
                        )
                      }
                    >
                      Add to Cart
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allContentfulProduct(filter: { name: { eq: $slug } }) {
      edges {
        node {
          category
          name
          contentful_id
          price
          image {
            gatsbyImageData
            title
          }
        }
      }
    }
  }
`

export default ProductTemp
