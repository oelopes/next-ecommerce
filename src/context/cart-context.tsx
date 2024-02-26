import { createContext, useContext, useState } from 'react'

type CartItem = {
  productId: string
  quantity: number
}

type CartContextType = {
  items: CartItem[]
  addToCart: (productId: string) => void
}

const CartContext = createContext({} as CartContextType)

export const CartProvider = ({children}: {children: React.ReactNode}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addToCart = (productId: string) => {
    setCartItems((oldState) => {
      const productInCard = oldState.some(item => item.productId === productId)

      if(productInCard) {
        return oldState.map(item => {
          if(item.productId === productId) {
            return {...item, quantity: item.quantity +1}
          }

          return item
        })
      } else {
        return [...oldState, {productId, quantity: 1}]
      }
    })
  }

  return <CartContext.Provider value={{ items: cartItems, addToCart}}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)