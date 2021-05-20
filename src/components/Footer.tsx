import { Button, Grid } from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import { MyLink } from "./MyLink"
import { SocialMediaIcons } from "./SocialMediaIcons"
import { MyTextField } from "./MyTextField"
import { links } from "../data"

export const Footer: React.FC<{ mobile: string }> = ({ mobile }) => {
  const notXs = useMediaQuery("(min-width:600px)")

  return (
    <div style={{ backgroundColor: "#eee" }}>
      <Grid container justify="space-evenly" alignItems="center">
        <Grid item xs={12} sm={3}>
          <Grid
            container
            justify={notXs ? "space-around" : "center"}
            alignItems="center"
          >
            <Grid item>
              <StaticImage src="../images/logo.png" alt="logo" />
              <div style={{ marginBottom: "20px", marginTop: "5px" }}>
                <SocialMediaIcons />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={3}>
          <Grid container justify="space-evenly">
            <Grid item xs={6}>
              <Grid container direction="column">
                {links.map(
                  (item, index) =>
                    index < 5 && (
                      <MyLink to={item.to} text={item.text} key={item.to} />
                    )
                )}
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container direction="column">
                {links.map(
                  (item, index) =>
                    index >= 5 && (
                      <MyLink to={item.to} text={item.text} key={item.to} />
                    )
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={3} style={{ marginTop: "10px" }}>
          <Grid
            container
            direction={notXs ? "row" : "column"}
            justify="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item>
              <MyTextField label="Enter your email" variant="outlined" />
            </Grid>
            <Grid item>
              <Button variant="outlined" size={!notXs ? "large" : "small"}>
                SUBSCRIBE
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justify="center" alignItems="center">
              <p>Subscribe now and get 10% off new collection garments</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="space-around">
        <Grid item style={{ marginTop: "10px" }}>
          © Copyright 2020 Martialway Industries. All rights reserved.
        </Grid>
        <Grid item style={{ marginTop: "10px" }}>
          Customer support: {mobile}
        </Grid>
      </Grid>
    </div>
  )
}
