import * as React from "react"
import { DisplayInnerNavLinks } from "./DisplayInnerNavLinks"
import { MyLink, MyLinkProps } from "../MyLink"

export const NavLinks: React.FC<MyLinkProps> = ({ to, text, innerLinks }) => {
  const [anchorElem, setAnchorElem] = React.useState<null | HTMLElement>(null)
  var timeOut: NodeJS.Timeout
  return (
    <div
      onMouseEnter={
        innerLinks
          ? e => {
              setAnchorElem(e.currentTarget)
              clearTimeout(timeOut)
            }
          : undefined
      }
      onMouseLeave={
        innerLinks
          ? () => {
              timeOut = setTimeout(() => {
                setAnchorElem(null)
              }, 200)
            }
          : undefined
      }
    >
      <MyLink to={to} text={text} />
      {innerLinks && (
        <DisplayInnerNavLinks
          links={innerLinks}
          anchorElem={anchorElem}
          placement="bottom"
        />
      )}
    </div>
  )
}
