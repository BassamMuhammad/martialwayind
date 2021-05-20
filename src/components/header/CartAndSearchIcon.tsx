import * as React from "react"

import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined"
import { FavoriteBorderOutlined, Search } from "@material-ui/icons"

import { SearchField } from "./SearchField"
import { navigate } from "gatsby"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"

export const CartAndSearchIcon = () => {
  const [anchorElem, setAnchorElem] = React.useState<HTMLElement | null>(null)

  return (
    <div>
      <IconButton onClick={() => navigate("/favorite")}>
        <FavoriteBorderOutlined />
      </IconButton>
      <IconButton onClick={() => navigate("/cart")}>
        <ShoppingCartOutlinedIcon />
      </IconButton>
      <IconButton onClick={e => !anchorElem && setAnchorElem(e.currentTarget)}>
        <Search />
      </IconButton>
      {anchorElem && (
        <Menu
          anchorEl={anchorElem}
          open={!!anchorElem}
          onClose={() => setAnchorElem(null)}
        >
          <MenuItem>
            <SearchField />
          </MenuItem>
        </Menu>
      )}
    </div>
  )
}
