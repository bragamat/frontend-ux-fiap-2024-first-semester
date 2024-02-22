
import { useCallback, useEffect, useState } from "react"
import { client } from "../lib/client";

export function useFetchPosts({ order, limit, skip } = { skip: '0', order: 'sys.createdAt', limit: 10 }) {
  const [isLoading, setIsLoading] = useState(() => true)
  const [posts, setPosts] = useState(() => [])
  const [error, setError] = useState(() => ({}))
  const [pagination, setPagination] = useState(() => ({
    page: 1,
    limit,
    skip,
    order,
    totalItems: 0
  }))

  const fetchData = useCallback(() => {
    client
      .getEntries({
        limit: pagination.limit,
        order: pagination.order,
        skip: pagination.skip,
      })
      .then((entries) => {
        console.log({ entries })
        setPosts(() => ([...entries.items]))

        setPagination((page) => ({
          ...page,
          limit: entries.limit,
          skip: entries.skip,
          totalItems: entries.total,
          totalPages: entries.total / limit
        }))

        setIsLoading(() => false)
      }).catch((err) => { setError(() => err) })
  }, [order, limit, pagination])

  useEffect(() => { fetchData() }, [order, limit, skip])

  const goToPage = (page) => {
    setPagination((curretPage) => ({
      ...curretPage,
      skip: page * curretPage.limit,
    }))
  }

  return { data: posts, goToPage, isLoading, error, pagination }
}

