'use client'

import { Search } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { FormEvent } from "react"

const SearchForm = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    const query = data.q

    if(!query) {
      return null
    }

    router.push(`/search?q=${query}`)
  }

  return (
    <form 
      onSubmit={handleSearch}
      className="flex items-center gap-3 w-[320px] rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
    >
      <Search className="size-5 text-zinc-500" />

      <input
        name="q"
        defaultValue={query ?? ''}
        placeholder="Buscar produtos..."
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
        required
      />
    </form>
  )
}

export default SearchForm