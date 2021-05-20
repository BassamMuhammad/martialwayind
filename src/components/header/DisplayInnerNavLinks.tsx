import {
  Icon,
  List,
  ListItem,
  Popper,
  PopperPlacementType,
} from "@material-ui/core"
import ChevronRight from "@material-ui/icons/ChevronRight"
import { navigate } from "gatsby"
import * as React from "react"
import { MyLinkProps } from "../MyLink"
import { useLocation } from "@reach/router"

interface DisplayInnerNavLinksProps {
  links: MyLinkProps[]
  anchorElem: HTMLElement | null
  placement: PopperPlacementType
  bgColor?: string
}

export const DisplayInnerNavLinks: React.FC<DisplayInnerNavLinksProps> = ({
  links,
  anchorElem,
  placement,
  bgColor = "white",
}) => {
  const location = useLocation()
  const [anchorElemInner, setAnchorElemInner] = React.useState<
    (null | HTMLElement)[]
  >([])
  const [inPopper, setInPopper] = React.useState(false)
  var timeOut: NodeJS.Timeout
  return (
    <Popper
      open={inPopper || !!anchorElem}
      anchorEl={anchorElem}
      style={{ backgroundColor: bgColor, zIndex: 10 }}
      placement={placement}
      onMouseEnter={() => setInPopper(true)}
      onMouseLeave={() => setInPopper(false)}
    >
      <List>
        {links.map((link, index) => (
          <ListItem
            key={index}
            button
            divider
            selected={location.pathname === link.to}
            onClick={e => {
              e.stopPropagation()
              navigate(link.to)
            }}
            onMouseEnter={e => {
              clearTimeout(timeOut!)
              if (!link.innerLinks) setAnchorElemInner([])
              else {
                var tempPopper = []
                tempPopper[index] = e.currentTarget
                setAnchorElemInner(tempPopper)
              }
            }}
            onMouseLeave={() => {
              clearTimeout(timeOut!)
              if (link.innerLinks) {
                timeOut = setTimeout(() => {
                  setAnchorElemInner([])
                }, 200)
              }
            }}
          >
            {link.text}
            {link.innerLinks && (
              <Icon>
                <ChevronRight />
              </Icon>
            )}
            {link.innerLinks && (
              <DisplayInnerNavLinks
                links={link.innerLinks}
                anchorElem={anchorElemInner[index]}
                placement="right-start"
              />
            )}
          </ListItem>
        ))}
      </List>
    </Popper>
  )
}
