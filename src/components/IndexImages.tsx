import { Button, Grid, Typography } from "@material-ui/core"
import { getImage } from "gatsby-plugin-image"
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined"
import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  root: {
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
})

export const IndexImages = () => {
  const classes = useStyles()
  const { allContentfulProduct } = useStaticQuery(graphql`
    {
      allContentfulProduct(filter: { name: { eq: "sample" } }) {
        edges {
          node {
            image {
              gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
              description
              title
            }
          }
        }
      }
    }
  `)

  return (
    <Grid container spacing={3} justify="center" alignItems="center">
      {allContentfulProduct.edges[0].node.image.map((img: any) => {
        const bgImage = convertToBgImage(getImage(img))
        return (
          <Grid
            key={img.title}
            item
            xs={12}
            sm={4}
            style={{ textAlign: "center" }}
          >
            <BackgroundImage
              Tag="section"
              // Spread bgImage into BackgroundImage:
              {...bgImage}
              preserveStackingContext
              className={classes.root}
            >
              <Grid
                container
                style={{
                  height: "200px",
                  color: "white",
                  backgroundColor: "rgba(0,0,0,0.5)",
                }}
                justify="center"
                alignItems="center"
                direction="column"
              >
                <Grid item>
                  <Typography>{img.description}</Typography>
                  <Typography variant="h6">{img.title}</Typography>
                </Grid>
                <Grid item style={{ marginTop: "5px" }}>
                  <Button
                    variant="contained"
                    startIcon={<LocalMallOutlinedIcon />}
                  >
                    SHOP NOW
                  </Button>
                </Grid>
              </Grid>
            </BackgroundImage>
          </Grid>
        )
      })}
    </Grid>
  )
}
