import * as React from "react"
import {
  Zoom,
  useScrollTrigger,
  makeStyles,
  createStyles,
  Theme,
  Fab,
} from "@material-ui/core"
import KeyboardArrowUp from "@material-ui/icons/KeyboardArrowUp"
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  })
)

export const BackToTopButton: React.FC<{ anchorId: string }> = ({
  children,
  anchorId,
}) => {
  const classes = useStyles()
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 })
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#" + anchorId)

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }
  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        <Fab size="large" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </div>
    </Zoom>
  )
}
