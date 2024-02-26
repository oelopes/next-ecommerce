import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

import { api } from "@/data/api"
import { Product } from "@/data/types/product"
import { env } from "@/env"

const searchProducts = async(query: string): Promise<Product[]> => {
  const response = await api(`/products/search?q=${query}`, {
    cache: 'no-store'
  })

  const products = await response.json()

  return products
}

const Search = async ({searchParams}: {searchParams: {q: string}} ) => {
  if(!env.APP_URL) {
    return null
  }

  const {q: query} = searchParams
  
  if(!query) {
    redirect('/')
  }

  const products = await searchProducts(query)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {products.map(product => (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
          >
            <Image
              src={product.image}
              className="group-hover:scale-105 transition-transform duration-500"
              width={480}
              height={480}
              quality={100}
              alt="product1"
            />
            <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="text-sm truncate">{product.title}</span>
              <span className="flex items-center justify-center h-full rounded-full bg-violet-500 px-4 font-semibold">
                {Number(129).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Search