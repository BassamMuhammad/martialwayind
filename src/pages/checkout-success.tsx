import { Box, Button, Typography } from "@material-ui/core"
import * as React from "react"
import Layout from "../components/Layout"
import { v4 } from "uuid"
import { getCart, setCart } from "../utils"
import Seo from "../components/seo"
import { navigate } from "gatsby"

const CheckoutSuccess = () => {
  React.useEffect(() => {
    //prevent direct access
    if (document.referrer.length !== 0) {
      getCart().forEach(item => {
        fetch(
          `/.netlify/functions/editProduct?quantity=${item.quantity}&entryId=${item.id}`
        ).then(() => setCart([]))
      })
    }
  }, [])

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
        {document.referrer.length !== 0 ? (
          <Typography>
            Order placed successfully. <br /> Your order id is: {v4()} <br />
            Please save it somewhere for reference
          </Typography>
        ) : (
          <Typography>
            Not allowed to access directly
            <Button color="primary" onClick={() => navigate("/cart")}>
              Go to cart
            </Button>
          </Typography>
        )}
      </Box>
    </Layout>
  )
}

export default CheckoutSuccess
