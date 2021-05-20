import * as React from "react"
import { Link as GatsbyLink } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

export interface MyLinkProps {
  to: string
  text: string
  innerLinks?: MyLinkProps[]
  textColor?: string
}

const useStyles = makeStyles({
  root: {
    color: ({ textColor }: { textColor?: string }) =>
      textColor ? textColor : "black",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
})
export const MyLink: React.FC<MyLinkProps> = ({ to, text, textColor }) => {
  const classes = useStyles({ textColor })

  return (
    <GatsbyLink to={to} className={classes.root} activeStyle={{ color: "red" }}>
      {text}
    </GatsbyLink>
  )
}
