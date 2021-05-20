import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
} from "@material-ui/core"
import { Add, Close } from "@material-ui/icons"
import { navigate } from "gatsby"
import { useLocation } from "@reach/router"

import * as React from "react"
import { MyLinkProps } from "../MyLink"

interface DisplayDrawerListProps {
  links: MyLinkProps[]
}
export const DisplayDrawerList: React.FC<DisplayDrawerListProps> = ({
  links,
}) => {
  const location = useLocation()
  const [open, setOpen] = React.useState<boolean[]>([])
  const [popper, setPopper] = React.useState<null | HTMLElement>(null)

  return (
    <List>
      {links.map((link, index) => (
        <div key={link.to}>
          <ListItem
            button
            onClick={link.innerLinks ? undefined : () => navigate(link.to)}
            divider
            selected={location.pathname === link.to}
          >
            <ListItemText primary={link.text} />
            {link.innerLinks ? (
              <ListItemIcon
                onClick={e => {
                  let tempOpen = [...open]
                  tempOpen[index] = !open[index]
                  setOpen(tempOpen)
                  popper ? setPopper(null) : setPopper(e.currentTarget)
                }}
                style={{ marginLeft: "50px" }}
              >
                {!open[index] ? <Add /> : <Close />}
              </ListItemIcon>
            ) : null}
          </ListItem>
          {!link.innerLinks ? null : (
            <div>
              {open[index] ? <Divider /> : null}
              <Collapse in={open[index]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button style={{ paddingLeft: "50px" }}>
                    <DisplayDrawerList links={link.innerLinks} />
                  </ListItem>
                </List>
              </Collapse>
              {open[index] ? <Divider /> : null}
            </div>
          )}
        </div>
      ))}
    </List>
  )
}
