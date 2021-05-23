export type CartType = { id: string; quantity: number }[]
const favStr = "favorite"
const cartStr = "cart"

export const isBrowser = () => typeof window !== "undefined"

export const getFavorite = (): string[] =>
  isBrowser()
    ? localStorage.getItem(favStr)
      ? JSON.parse(localStorage.getItem(favStr)!)
      : []
    : []

export const setFavorite = (favorite: string[]) => {
  if (isBrowser()) localStorage.setItem(favStr, JSON.stringify(favorite))
}

export const addRemoveFromFavorite = (id: string) => {
  const favorite = getFavorite()
  const index =
    favorite.length > 0 ? favorite.findIndex(value => value === id) : -1
  if (index >= 0) {
    favorite.splice(index, 1)
  } else {
    favorite.push(id)
  }
  setFavorite(favorite)
}

export const getCart = (): CartType =>
  isBrowser()
    ? localStorage.getItem(cartStr)
      ? JSON.parse(localStorage.getItem(cartStr)!)
      : []
    : []
export const setCart = (cart: CartType) => {
  if (isBrowser()) localStorage.setItem(cartStr, JSON.stringify(cart))
}

export const addRemoveFromCart = (
  id: string,
  quantity: number,
  add?: boolean
) => {
  const cart = getCart()
  const index =
    cart.length > 0 ? cart.findIndex(cartObj => cartObj.id === id) : -1
  if (index >= 0) {
    if (add) {
      cart[index].quantity += quantity
    } else {
      cart.splice(index, 1)
    }
  } else {
    cart.push({ id, quantity })
  }
  setCart(cart)
}
