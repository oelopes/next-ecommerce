import { Metadata } from "next"
import Image from "next/image"

import AddToCartButton from "@/components/AddToCartButton"

import { api } from "@/data/api"
import { Product } from "@/data/types/product"
import { env } from "@/env"


const getProduct = async (slug: string): Promise<Product> => {
  const response = await api(`/products/${slug}`, {
    cache: 'no-store'
  })

  const product = await response.json()

  return product
}

export const generateMetadata = async ({params}: {params: {slug: string}}): Promise<Metadata> => {
  const product = await getProduct(params.slug)

  return {
    title: product.title
  }
}

// makes next generate static pages on build execution
// export const generateStaticParams = async () => {
//   const response = await api('/products/featured')
//   const products: Product[] = await response.json()

//   return products.map(product => {
//     return {slug: product.slug}
//   })
// }

const ProductPage = async ({params}: {params: {slug: string}}) => {
  if(!env.APP_URL) {
    return null
  }

  const product = await getProduct(params.slug)

  return (
    <div className="relative grid grid-cols-3 max-h-[860px]">
      <div className="col-span-2 overflow-hidden">
        <Image 
          src={product.image}
          alt="product-image"
          width={1000}
          height={1000}
          quality={100}
        />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">
          {product.title}
        </h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          {product.description}
        </p>
      
        <div className="flex items-center gap-3 mt-8">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2 font-semibold">
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
          <span className="text-sm text-zinc-400">
            em 12x s/ juros de {(product.price / 12).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <div className="block font-semibold">Tamanhos</div>

          <div className="flex gap-2">
            <button type="button" className="flex items-center justify-center h-9 w-14 rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">P</button>
            <button type="button" className="flex items-center justify-center h-9 w-14 rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">M</button>
            <button type="button" className="flex items-center justify-center h-9 w-14 rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">G</button>
            <button type="button" className="flex items-center justify-center h-9 w-14 rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">GG</button>
          </div>
        </div>

        <AddToCartButton productId={product.id}/>
      </div>
    </div>
  )
}

export default ProductPage