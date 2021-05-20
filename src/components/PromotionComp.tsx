import { Box, Grid } from "@material-ui/core"
import * as React from "react"
import { promotion } from "../data"

import { MyLink } from "./MyLink"

export const PromotionComp = () => {
  return (
    <Grid container>
      {promotion.map(obj => (
        <Grid item xs={6} sm={3} key={obj.to} style={{ marginBottom: "10px" }}>
          <Grid container>
            {obj.icon}
            <Box marginLeft="5px">
              {obj.mainText} <br />
              <MyLink to={obj.to} text={obj.linkText} textColor="gray" />
            </Box>
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}
