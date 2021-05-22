/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const findCategories = category => {
  if (category.toLowerCase() === "apperals")
    return [
      "Apperals",
      "Bras",
      "Leggings",
      "Hoodies",
      "Jackets",
      "Joggers",
      "Shorts",
      "Rash Guards",
      "T-Shirts",
      "Tank Tops",
      "Team Uniforms",
      "Track Suits",
    ]
  else if (category.toLowerCase() === "uniforms")
    return ["Uniforms", "BJJ", "Judo", "Karate", "Taekwondo"]
  else return [category.replace(/\b\w/g, letter => letter.toUpperCase())]
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const products = await graphql(`
    {
      allContentfulProduct {
        edges {
          node {
            name
          }
        }
      }
    }
  `)
  products.data.allContentfulProduct.edges.forEach(edge => {
    const slug = edge.node.name.toLowerCase().replace(/ /g, "-")
    createPage({
      path: `products/${slug}`,
      component: path.resolve("./src/templates/product-temp.tsx"),
      context: { slug: edge.node.name },
      forceFullSync: true,
    })
  })
  const categories = await graphql(`
    {
      allContentfulCategory {
        edges {
          node {
            categories
          }
        }
      }
    }
  `)
  categories.data.allContentfulCategory.edges[0].node.categories.forEach(
    category => {
      const slug = category.toLowerCase().replace(/ /g, "-")
      const possibleCategories = findCategories(category)
      createPage({
        path: `products/${slug}`,
        component: path.resolve("./src/templates/category-temp.tsx"),
        context: { possibleCategories: possibleCategories },
        forceFullSync: true,
      })
    }
  )
}
