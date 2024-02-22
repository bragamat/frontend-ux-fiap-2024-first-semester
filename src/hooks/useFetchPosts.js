import { useCallback, useEffect, useState } from 'react'
import { client } from '../lib/client'

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

	const fetchData = useCallback((pageNumber) => {
		client
			.getEntries({
				content_type: 'post',
				limit: pagination.limit,
				order: pagination.order,
				skip: pageNumber ? (pageNumber * pagination.limit) : pagination.skip,
			})
			.then((entries) => {
				setPosts(() => ([...entries.items]))

				setPagination((page) => ({
					...page,
					limit: entries.limit,
					skip: entries.skip,
					totalItems: entries.total,
					totalPages: entries.total / limit,
					page: pageNumber || 1,
				}))

				setIsLoading(() => false)
			}).catch((err) => { setError(() => err) })
	}, [order, limit, pagination])

	useEffect(() => { fetchData() }, [order, limit, skip])

	const goToPage = (page) => fetchData(page)

	return { data: posts, goToPage, isLoading, error, pagination }
}

