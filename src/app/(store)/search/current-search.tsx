'use client'

import { useSearchParams } from "next/navigation"

const CurrentSearch = () => {
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  return  (
    <p className="textsm">Resultados para: <span className="font-semibold">{query}</span></p>
  )
}

export default CurrentSearch