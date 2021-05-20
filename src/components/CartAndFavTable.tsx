import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./CartAndFavTable.css"
import { Box, Button, Typography } from "@material-ui/core"
import { navigate } from "gatsby"
import { addRemoveFromCart, CartType, setCart, setFavorite } from "../utils"

interface Props {
  data: { edge: any; quantity?: number }[]
  isCart: boolean
}

export const CartAndFavTable: React.FC<Props> = ({ data, isCart }) => {
  const [stateData, setStateData] = React.useState(data)
  const [mainCheck, setMainCheck] = React.useState(false)
  const secChecksinitiallizor: boolean[] = []
  stateData.forEach(() => {
    secChecksinitiallizor.push(false)
  })
  const [secChecks, setSecChecks] = React.useState(secChecksinitiallizor)
  var total = 0

  const handleMarkedItems = (addToCart: boolean) => {
    if (!secChecks.includes(true)) {
      alert("No Product Marked")
      return
    }
    var temp: typeof stateData = []

    if (addToCart) {
      stateData.forEach((item, index) => {
        if (secChecks[index]) temp.push(item)
      })
      temp.forEach(item => addRemoveFromCart(item.edge.node.name, 1, true))
      alert("Added to Cart")
      setMainCheck(false)
      setSecChecks(secChecksinitiallizor)
    } else {
      stateData.forEach((item, index) => {
        if (!secChecks[index]) temp.push(item)
      })
      if (isCart) {
        let cart: CartType = []
        temp.forEach(item =>
          cart.push({
            productName: item.edge.node.name,
            quantity: item.quantity!,
          })
        )
        setCart(cart)
      } else {
        let favorite: string[] = []
        temp.forEach(item => favorite.push(item.edge.node.name))
        setFavorite(favorite)
      }
      setStateData(temp)
    }
  }

  return (
    <Box display="flex" justifyContent="center">
      {stateData.length === 0 ? (
        <Typography variant="h4">
          {isCart ? "Nothing in Cart :(" : "Nothing marked as Favorite :("}
        </Typography>
      ) : (
        <Box>
          <table>
            <thead>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    checked={mainCheck}
                    onChange={() => {
                      var temp: boolean[] = []
                      stateData.forEach(() => temp.push(!mainCheck))
                      setSecChecks(temp)
                      setMainCheck(!mainCheck)
                    }}
                  />
                </td>
                <td>No.</td>
                <td>PRODUCT</td>
                <td>PRICE</td>
                {isCart && <td>QUANTITY</td>}
                {isCart && <td>SUBTOTAL</td>}
              </tr>
            </thead>
            <tbody>
              {stateData.map((item, index) => {
                if (item.quantity) {
                  total += item.edge.node.price * item.quantity
                }
                return (
                  <tr key={item.edge.node.name}>
                    <td>
                      <input
                        type="checkbox"
                        checked={secChecks[index]}
                        onChange={() => {
                          var temp = [...secChecks]
                          temp[index] = !temp[index]
                          if (!temp.includes(false)) setMainCheck(true)
                          else setMainCheck(false)
                          setSecChecks(temp)
                        }}
                      />
                    </td>
                    <td>{index + 1}</td>
                    <td>
                      <GatsbyImage
                        image={getImage(item.edge.node.image[0])!}
                        alt={item.edge.node.name}
                      />
                      <div>{item.edge.node.name}</div>
                    </td>
                    <td>${item.edge.node.price}</td>
                    {isCart && <td>{item.quantity}</td>}
                    {isCart && (
                      <td>${item.edge.node.price * item.quantity!}</td>
                    )}
                  </tr>
                )
              })}
            </tbody>
          </table>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            {isCart && (
              <Box display="flex" flexDirection="column" marginTop={1}>
                <Typography variant="h4">Total: ${total}</Typography>
                <Box marginTop={1}>
                  <Button
                    variant="contained"
                    onClick={() => navigate("/checkout")}
                  >
                    <Typography variant="button">
                      Proceed to checkout
                    </Typography>
                  </Button>
                </Box>
              </Box>
            )}

            {!isCart && (
              <Button color="primary" onClick={() => handleMarkedItems(true)}>
                <Typography variant="button">Add to Cart</Typography>
              </Button>
            )}
            <Button color="secondary" onClick={() => handleMarkedItems(false)}>
              <Typography variant="button">Remove Marked</Typography>
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  )
}
