import { useCallback, useEffect, useState } from 'react'
import { client } from '../lib/client'

export function useFetchPosts({ slug } = { slug: null }) {
	const [isLoading, setIsLoading] = useState(() => true)
	const [post, setPost] = useState(() => { })
	const [error, setError] = useState(() => ({}))

	const fetchPost = useCallback((slug) => {
		client
			.getEntries({
				'fields.slug': slug,
				content_type: 'post',
			})
			.then((entries) => {
				setPost(() => ({ ...entries.items[0] }) || null)
			})
			.catch((err) => { setError(() => err) })
		setIsLoading(() => false)
	}, [])

	useEffect(() => {
		if (slug) {
			fetchPost(slug)
		}
	}, [slug, fetchPost])

	return { data: post, isLoading, error }
}

