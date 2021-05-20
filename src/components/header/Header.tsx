import * as React from "react"
import {
  AppBar,
  CssBaseline,
  IconButton,
  Toolbar,
  Grid,
  Typography,
  Hidden,
  Divider,
  Menu,
  MenuItem,
} from "@material-ui/core"
import HeadRoom from "react-headroom"
import { BackToTopButton } from "./BackToTopButton"
import MenuIcon from "@material-ui/icons/Menu"
import { StaticImage } from "gatsby-plugin-image"
import { NavLinks } from "./NavLinks"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import { MyDrawer } from "./MyDrawer"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { links } from "../../data"
import { CartAndSearchIcon } from "./CartAndSearchIcon"

interface HeaderProps {
  mobile: string
}

const Header: React.FC<HeaderProps> = ({ mobile }) => {
  const notXs = useMediaQuery("(min-width:600px)")
  const BACK_TO_TOP = "back-to-top"
  const [anchorElem, setAnchorElem] = React.useState<HTMLElement | null>(null)
  const [open, setOpen] = React.useState(false)
  return (
    <div
      style={{
        background: "white",
      }}
    >
      <CssBaseline />
      <HeadRoom style={{ zIndex: 10 }}>
        <AppBar position="static" style={{ backgroundColor: "white" }}>
          <Toolbar>
            <Grid container justify="center" alignItems="center">
              <Grid container alignItems="center">
                <Grid item xs={12} sm={5}>
                  <Grid
                    container
                    justify={notXs ? "flex-start" : "center"}
                    alignItems="center"
                  >
                    <Typography
                      variant={notXs ? "h6" : "body1"}
                      color="textSecondary"
                    >
                      <Hidden xsDown>Questions? </Hidden>
                      Call us:{" "}
                      <Hidden xsDown>
                        <br />
                      </Hidden>
                      <span style={{ color: "black" }}>{mobile}</span>
                    </Typography>
                  </Grid>
                </Grid>

                <Hidden smUp>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={2}>
                    <IconButton onClick={() => setOpen(true)}>
                      <MenuIcon />
                    </IconButton>
                  </Grid>
                </Hidden>
                <Grid item xs={8} sm={5}>
                  <Grid
                    container
                    justify={notXs ? "flex-start" : "center"}
                    alignItems="center"
                  >
                    <StaticImage src="../../images/logo.png" alt="logo" />
                  </Grid>
                </Grid>
                <Grid item xs={2}>
                  <Grid container justify="flex-end" alignItems="center">
                    {notXs ? (
                      <CartAndSearchIcon />
                    ) : (
                      <div>
                        <IconButton
                          onClick={e => setAnchorElem(e.currentTarget)}
                        >
                          <MoreHorizIcon />
                        </IconButton>
                        {anchorElem && (
                          <Menu
                            anchorEl={anchorElem}
                            open={!!anchorElem}
                            onClose={() => setAnchorElem(null)}
                          >
                            <MenuItem>
                              <CartAndSearchIcon />
                            </MenuItem>
                          </Menu>
                        )}
                      </div>
                    )}
                  </Grid>
                </Grid>
              </Grid>
              <Grid container justify="center" alignItems="center" spacing={4}>
                {links.map((link, index) => (
                  <Hidden xsDown key={link.to}>
                    {index < 5 && (
                      <Grid item>
                        <NavLinks {...link} />
                      </Grid>
                    )}
                  </Hidden>
                ))}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </HeadRoom>
      <div id={BACK_TO_TOP} />
      <MyDrawer open={open} setOpen={setOpen} links={links} />

      <BackToTopButton anchorId={BACK_TO_TOP} />
    </div>
  )
}

export default Header
