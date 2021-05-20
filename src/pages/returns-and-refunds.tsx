import { Box, Typography } from "@material-ui/core"
import * as React from "react"
import { returnsAndRefunds } from "../data"
import Layout from "../components/Layout"
import Seo from "../components/seo"
const ReturnsAndRefunds = () => {
  return (
    <Layout>
      <Seo title="Returns and Refunds" />
      <Box marginTop={5}>
        {returnsAndRefunds.map(data => (
          <Box key={data.title} marginBottom={3}>
            <Typography variant="h5">{data.title}</Typography>
            <Box marginTop={1}>
              <Typography>{data.body}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Layout>
  )
}

export default ReturnsAndRefunds
