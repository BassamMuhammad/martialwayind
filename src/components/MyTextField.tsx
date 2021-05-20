import { makeStyles, TextField } from "@material-ui/core"
import * as React from "react"
interface MyTextField {
  multiline?: boolean
  fullWidth?: boolean
  rows?: number
  variant?: "filled" | "standard" | "outlined"
  label?: string
  placeholder?: string
}
const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
    },
  },
})

export const MyTextField: React.FC<MyTextField> = props => {
  const classes = useStyles()
  const [focus, setFocus] = React.useState(false)
  return (
    <TextField
      InputLabelProps={{ style: { color: `${focus ? "black" : "grey"}` } }}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      className={classes.root}
      multiline={props.multiline}
      variant={props.variant}
      fullWidth={props.fullWidth}
      placeholder={props.placeholder}
      rows={props.rows}
      label={props.label}
    />
  )
}
