import { Grid, Typography, Box, Icon, Button } from "@material-ui/core"
import * as React from "react"
import Layout from "../components/Layout"
import { values } from "../data"
import { navigate } from "gatsby"
import Seo from "../components/seo"
const AboutUs = () => {
  return (
    <Layout>
      <Seo title="About Us" />
      <Box marginTop={5}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4">OUR MISSION</Typography>
            <Box marginTop={1}>
              <Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Temporibus, inventore.
              </Typography>
            </Box>
            <Box marginTop={5}>
              <Typography variant="h4">OUR VALUES</Typography>
              <Box marginTop={1}>
                {values.map(item => (
                  <Grid
                    key={item.text}
                    container
                    alignItems="center"
                    spacing={1}
                  >
                    <Grid item>
                      <Icon color="error">{item.icon}</Icon>
                    </Grid>
                    <Grid item>
                      <Typography>{item.text}</Typography>
                    </Grid>
                  </Grid>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4">ABOUT US</Typography>
            <Box marginTop={1}>
              <Typography>
                Molestias dolore sint dicta. Quaerat doloribus, veritatis unde
                perferendis excepturi voluptatum facere, temporibus, minima
                aspernatur quo nisi perspiciatis ullam reiciendis libero ea vero
                adipisci numquam repellat beatae autem provident! Voluptatem eum
                incidunt asperiores? Delectus debitis culpa numquam quidem fugit
                quibusdam quaerat hic ratione praesentium distinctio. Expedita
                praesentium labore doloremque voluptas nulla enim pariatur sunt
                explicabo fugit ut amet quas deserunt corporis aperiam facere
                accusamus quo iste ad at, adipisci reiciendis hic! Illum id
                dolorum reprehenderit odio consectetur ipsa, in libero
                laudantium suscipit nesciunt ab. Nobis cupiditate quae dolore
                magni corrupti Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Tenetur dolorem.
              </Typography>
            </Box>
            <Box marginTop={5}>
              <Button onClick={() => navigate("/contact")} variant="outlined">
                CONTACT US
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}

export default AboutUs
