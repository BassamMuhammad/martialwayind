import { Drawer, IconButton } from "@material-ui/core"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import * as React from "react"
import { MyLinkProps } from "../MyLink"
import { DisplayDrawerList } from "./DisplayDrawerList"

interface DrawerProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  links: MyLinkProps[]
}

export const MyDrawer: React.FC<DrawerProps> = ({ open, setOpen, links }) => {
  return (
    <Drawer variant="persistent" anchor="left" open={open}>
      <div>
        <IconButton onClick={() => setOpen(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <DisplayDrawerList links={links} />
    </Drawer>
  )
}
