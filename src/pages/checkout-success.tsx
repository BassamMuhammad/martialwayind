import { Box, Typography } from "@material-ui/core"
import * as React from "react"
import Layout from "../components/Layout"
import { v4 } from "uuid"
import { createClient } from "contentful-management"
import { getCart, setCart } from "../utils"

const CheckoutSuccess = () => {
  const updateEntry = (entryId: string, quantity: number) => {
    const client = createClient({
      accessToken: "CFPAT-1jsUjN7Xl5nwvn4WoWYU5fZEkhDJeSqtaN9Z681dw0o",
    })
    client.getSpace("hcy802pz0olp").then(space => {
      space.getEnvironment("master").then(environment => {
        environment
          .getEntry(entryId)
          .then(entry => {
            entry.fields.sold["en-US"] += quantity

            return entry.update()
          })
          .then(entry => entry.publish())
      })
    })
  }

  getCart().forEach(item => updateEntry(item.id, item.quantity))
  setCart([])
  return (
    <Layout>
      <Box
        marginTop={10}
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography>
          Order placed successfully. <br /> Your order id is: {v4()} <br />{" "}
          Please save it somewhere for reference
        </Typography>
      </Box>
    </Layout>
  )
}

export default CheckoutSuccess
