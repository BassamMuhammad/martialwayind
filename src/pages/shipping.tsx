import { Box, Typography } from "@material-ui/core"
import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { shipping } from "../data"
const Shipping = () => {
  return (
    <Layout>
      <Seo title="Shipping" />
      <Box marginTop={5}>
        {shipping.map(data => (
          <Box key={data.heading} marginBottom={3}>
            <Typography color="error">{data.heading}</Typography>
            <Typography variant="h5">{data.title}</Typography>
            <Typography>{data.body}</Typography>
          </Box>
        ))}
      </Box>
    </Layout>
  )
}

export default Shipping
