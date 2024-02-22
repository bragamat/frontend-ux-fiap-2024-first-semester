import { useEffect, useState } from "react"
import { client } from "../lib/client";

export function useFetchCategories() {
  const [isLoading, setIsLoading] = useState(() => true)
  const [categories, setCategories] = useState(() => [])
  const [error, setError] = useState(() => ({}))

  useEffect(() => {
    client
      .getEntries({ limit: 3 })
      .then(function(entries) {
        setCategories(() => ([...entries.items]))
        setIsLoading(() => false)
      }).catch((err) => { setError(() => err) })
  }, [])

  return { data: categories, isLoading, error }
}


