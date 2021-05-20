import { Box, Typography } from "@material-ui/core"
import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
const Payment = () => {
  return (
    <Layout>
      <Seo title="Payment" />
      <Box marginTop={5}>
        <Typography variant="h5">PAYMENT METHODS</Typography>
        <Box marginTop={1}>
          <Typography>
            We accept cards:
            <ul>
              <li>Visa</li>
              <li>MasterCard</li>
              <li>American Express</li>
              <li>Maestro</li>
              <li>JCB Cards</li>
            </ul>
            You can also chose to pay with PayPal
          </Typography>
        </Box>
        <Box marginTop={5}>
          <Typography variant="h5">PAYMENT SECURITY</Typography>
          <Box marginTop={1}>
            <Typography>
              Phasellus a cursus elit. Praesent varius! Praesent tristique –
              faucibus enim varius sem id felis scelerisque vehicula.
              Suspendisse nibh felis, sollicitudin at, tristique faucibus enim
              tristique faucibus dolor amet nulla.
            </Typography>
          </Box>
        </Box>
        <Box marginTop={5}>
          <Typography variant="h5">WEBSITE SECURITY</Typography>
          <Box marginTop={1}>
            <Typography>
              Suspendisse nibh felis, sollicitudin at, tristique faucibus enim.
              Phasellus a cursus elit. Praesent varius sem id felis scelerisque
              vehicula. Suspendisse nibh felis, sollicitudin eu sollicitudin at,
              tristique faucibus enim. Phasellus a cursus elit. Praesent varius!
              Praesent tristique – faucibus enim varius sem id felis scelerisque
              vehicula. Suspendisse nibh felis, sollicitudin at, tristique
              faucibus enim tristique faucibus dolor amet nulla.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default Payment
