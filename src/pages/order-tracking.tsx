import { Box, Button, Typography } from "@material-ui/core"
import * as React from "react"
import Layout from "../components/Layout"
import { MyTextField } from "../components/MyTextField"
import Seo from "../components/seo"
const OrderTracking = () => {
  return (
    <Layout>
      <Seo title="Order Tracking" />
      <Box marginTop={5} height="100vh">
        <Typography>
          To track your order please enter your Order ID in the box below and
          press the "Track" button. This was given to you on your receipt and in
          the confirmation email you should have received.
        </Typography>
        <Box marginY={2}>
          <Typography variant="h6">ORDER ID</Typography>

          <Box marginTop={0.5}>
            <MyTextField
              label="Found in your order confirmation email"
              variant="outlined"
              fullWidth
            />
          </Box>
        </Box>
        <Button variant="outlined">Track</Button>
      </Box>
    </Layout>
  )
}

export default OrderTracking
