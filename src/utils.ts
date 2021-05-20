import { CartType } from "./cartAndFavorites"
const favStr = "favorite"
const cartStr = "cart"

export const getFavorite = (): string[] =>
  localStorage.getItem(favStr) ? JSON.parse(localStorage.getItem(favStr)!) : []

export const addRemoveFromFavorite = (name: string) => {
  name = name.toLowerCase()
  const favorite = getFavorite()
  const index =
    favorite.length > 0 ? favorite.findIndex(value => value === name) : -1
  if (index >= 0) {
    favorite.splice(index, 1)
  } else {
    favorite.push(name)
  }
  localStorage.setItem(favStr, JSON.stringify(favorite))
}

export const getCart = (): CartType =>
  localStorage.getItem(cartStr)
    ? JSON.parse(localStorage.getItem(cartStr)!)
    : []

export const addRemoveFromCart = (
  name: string,
  quantity: number,
  add?: boolean
) => {
  name = name.toLowerCase()
  const cart = getCart()
  const index =
    cart.length > 0
      ? cart.findIndex(cartObj => cartObj.productName === name)
      : -1
  if (index >= 0) {
    if (add) {
      cart[index].quantity += quantity
    } else {
      cart.splice(index, 1)
    }
  } else {
    cart.push({ productName: name, quantity: quantity })
  }
  localStorage.setItem(cartStr, JSON.stringify(cart))
}
