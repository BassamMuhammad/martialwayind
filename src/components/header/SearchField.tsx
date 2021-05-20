import {
  Box,
  InputAdornment,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  makeStyles,
} from "@material-ui/core"
import * as React from "react"
import { Search } from "@material-ui/icons"
import { graphql, navigate, useStaticQuery } from "gatsby"
import Fuse from "fuse.js"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
      color: "black",
    },
  },
})

export const SearchField = () => {
  const classes = useStyles()

  const {
    allContentfulProduct: { edges },
  } = useStaticQuery(graphql`
    {
      allContentfulProduct {
        edges {
          node {
            category
            name
            image {
              gatsbyImageData(layout: CONSTRAINED, height: 50)
              title
            }
          }
        }
      }
    }
  `)
  const fuse = new Fuse(edges, {
    keys: ["node.category", "node.name"],
  })
  const [value, setValue] = React.useState("")
  const matches: Fuse.FuseResult<{
    node: { category: string; name: string }
  }>[] = fuse.search(value)
  return (
    <Box>
      <TextField
        className={classes.root}
        label="Search"
        variant="outlined"
        value={value}
        onChange={e => setValue(e.target.value)}
        InputLabelProps={{ style: { color: "black" } }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
      <List>
        {matches.length === 0 ? (
          <ListItem>
            <ListItemText>
              {value.length !== 0
                ? "No Match found :("
                : "Click outside the box to exit"}
            </ListItemText>
          </ListItem>
        ) : (
          matches.map((match, index) => {
            return (
              <ListItem
                key={index}
                button
                onClick={() => navigate(`/products/${match.item.node.name}`)}
              >
                <ListItemAvatar>
                  <GatsbyImage
                    image={getImage(edges[0].node.image[0])!}
                    alt={edges[0].node.image[0].title}
                  />
                </ListItemAvatar>
                <Box flexDirection="column" display="flex" marginLeft="10px">
                  <ListItemText>Name: {match.item.node.name}</ListItemText>
                  <ListItemText>
                    Category: {match.item.node.category}
                  </ListItemText>
                </Box>
              </ListItem>
            )
          })
        )}
      </List>
    </Box>
  )
}
