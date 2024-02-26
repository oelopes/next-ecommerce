import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from "next/link"
import CartWidget from './CartWidget'

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          nextEcommerce
        </Link>

        <form className="flex items-center gap-3 w-[320px] rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
          <Search className="size-5 text-zinc-500" />

          <input 
            placeholder="Buscar produtos..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </form>
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