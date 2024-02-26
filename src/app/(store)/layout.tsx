'use client'

import Header from "@/components/Header"
import { CartProvider } from "@/context/cart-context"

const StoreLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <CartProvider>
      <div className="mx-auto min-h-screen w-full max-w-[1600px] grid grid-rows-[min-content_max-content] gap-5 p-8">
        <Header />
        {children}
      </div>
    </CartProvider>
  )
}

export default StoreLayout