import Image from 'next/image'
import Link from "next/link"
import { Suspense } from 'react'
import CartWidget from './CartWidget'
import SearchForm from './SearchForm'

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          nextEcommerce
        </Link>

        <Suspense fallback={null}> 
          <SearchForm />
        </Suspense>
      </div>

      <div className="flex items-center gap-4">
        <CartWidget />
        
        <div className="w-px h-4 bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 houver:underline">
          <span className="text-sm">Account</span>

          <Image 
            src="https://github.com/oelopes.png"
            className="size-6 rounded-full"
            width={24}
            height={24}
            alt="user-image"
          />
        </Link>
      </div>
    </div>
  )
}

export default Header