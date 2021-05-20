import { Box, Grid, Typography } from "@material-ui/core"
import * as React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { SocialMediaIcons } from "../components/SocialMediaIcons"
import { MyTextField } from "../components/MyTextField"
import { contact } from "../data"
import Seo from "../components/seo"
const Contacts: React.FC<any> = ({ data }) => {
  return (
    <Layout>
      <Seo title="Contact" />
      <Box marginTop={5}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={5} direction="column">
              {contact(data).map(data => (
                <Grid item key={data.title}>
                  <Typography variant="h5" color="error">
                    {data.title}
                  </Typography>
                  <Typography variant="h5" color="textPrimary">
                    {data.handle}
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    {data.subtitle}
                  </Typography>
                  {data.subSubtitle && (
                    <Typography variant="h6" color="textSecondary">
                      {data.subSubtitle}
                    </Typography>
                  )}
                </Grid>
              ))}
              <Grid item>
                <SocialMediaIcons />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <Typography variant="h5">ASK US. WE WILL HELP YOU.</Typography>
              </Grid>
              <Grid item>
                <MyTextField variant="outlined" label="Name" fullWidth />
              </Grid>
              <Grid item>
                <MyTextField variant="outlined" label="Email" fullWidth />
              </Grid>
              <Grid item>
                <MyTextField
                  multiline
                  variant="outlined"
                  fullWidth
                  rows={8}
                  label="Message"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}
export const data = graphql`
  {
    site {
      siteMetadata {
        mobile
        email
        address
      }
    }
  }
`
export default Contacts
