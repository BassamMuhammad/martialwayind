import * as React from "react"
import {
  Box,
  GridListTile,
  GridListTileBar,
  IconButton,
  Tooltip,
  Typography,
} from "@material-ui/core"
import {
  AddShoppingCartOutlined,
  Favorite,
  FavoriteBorderOutlined,
  RemoveShoppingCartOutlined,
} from "@material-ui/icons"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"
import {
  addRemoveFromCart,
  addRemoveFromFavorite,
  getCart,
  getFavorite,
} from "../utils"

export const ProductComp: React.FC<any> = ({ node }) => {
  const slug = node.name.toLowerCase().replace(/ /g, "-")
  const [cartAndFav, setCartAndFav] = React.useState(false) //for forcing rerender on cart and fav icon click
  return (
    <Box onClick={() => navigate(`/products/${slug}`)}>
      <GridListTile style={{ listStyle: "none" }}>
        <GatsbyImage
          image={getImage(node.image[0])!}
          alt={node.image[0].title}
        />
        <GridListTileBar
          title={
            <IconButton
              onClick={e => {
                e.stopPropagation()
                addRemoveFromFavorite(node.name)
                setCartAndFav(!cartAndFav)
              }}
            >
              {getFavorite().includes(node.name) ? (
                <Tooltip title="Remove from Favorites">
                  <Favorite color="error" />
                </Tooltip>
              ) : (
                <Tooltip title="Add to Favorites">
                  <FavoriteBorderOutlined color="error" />
                </Tooltip>
              )}
            </IconButton>
          }
          actionIcon={
            <IconButton
              onClick={e => {
                e.stopPropagation()
                addRemoveFromCart(node.name, 1)
                setCartAndFav(!cartAndFav)
              }}
            >
              {getCart().findIndex(
                cartObj => cartObj.productName === node.name
              ) >= 0 ? (
                <Tooltip title="Remove from Cart">
                  <RemoveShoppingCartOutlined color="error" />
                </Tooltip>
              ) : (
                <Tooltip title="Add to Cart">
                  <AddShoppingCartOutlined color="error" />
                </Tooltip>
              )}
            </IconButton>
          }
        />
      </GridListTile>
      <Box marginTop={1} display="flex" justifyContent="space-between">
        <Typography>
          <strong>Name:</strong> {node.name}
        </Typography>
        <Typography>
          <strong>Price:</strong> ${node.price}
        </Typography>
      </Box>
    </Box>
  )
}
