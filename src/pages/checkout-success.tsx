import { Box, Typography } from "@material-ui/core"
import * as React from "react"
import Layout from "../components/Layout"
import { v4 } from "uuid"
import { getCart, setCart } from "../utils"
import Seo from "../components/seo"

const CheckoutSuccess = () => {
  React.useEffect(() => {
    getCart().forEach(item =>
      fetch(
        `/.netlify/functions/editProduct?quantity=${item.quantity},entryId=${item.id}`
      )
        .then(res => alert(res.status))
        .catch(e => console.log(e))
    )
  }, [])
  setCart([])
  return (
    <Layout>
      <Seo title="Checkout" />
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
