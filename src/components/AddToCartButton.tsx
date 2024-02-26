'use client'

import { useCart } from "@/context/cart-context"

type AddToCartButton = {
  productId: number
}

const addToCartButton = ({productId}: AddToCartButton) => {
  const {addToCart} = useCart()

  const handleAddToCart = () => {
    addToCart(productId.toString())
  }

  return (
    <button type="button" onClick={() => handleAddToCart()} className="flex items-center justify-center h-12 mt-8 rounded-full bg-emerald-600 font-semibold">
      Adicionar ao carrinho
    </button>
  )
}

export default addToCartButton