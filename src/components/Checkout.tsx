import * as React from "react"
import { loadStripe, Stripe } from "@stripe/stripe-js"
import { Button, Typography } from "@material-ui/core"

let stripePromise: Promise<Stripe | null>
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51ItS57KWj860r14MlimC8cy214MaXVwhGmihmlsrDizPaHsjEAuRz5LJT26hI7pGfGtOwcx3ggmTyrdhmHyIibcH00fAT3uvF9"
    )
  }
  return stripePromise
}
export const Checkout = () => {
  const [loading, setLoading] = React.useState(false)
  const redirectToCheckout = async (event: any) => {
    event.preventDefault()
    setLoading(true)
    const stripe = await getStripe()
    const { error } = await stripe!.redirectToCheckout({
      mode: "payment",
      lineItems: [
        { price: "price_1ItcQSKWj860r14MBvxsuBeq", quantity: 2 },
        { price: "price_1ItcQzKWj860r14MacOkGedW", quantity: 1 },
      ],
      successUrl: `http://localhost:8000/products/`,
      cancelUrl: `http://localhost:8000/cart/`,
    })
    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }
  return (
    <Button variant="contained" onClick={redirectToCheckout} disabled={loading}>
      <Typography variant="button">Proceed to checkout</Typography>
    </Button>
  )
}
