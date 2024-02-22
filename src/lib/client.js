import * as contentful from 'contentful'

const CONTENTFUL_SPACE_KEY = import.meta.env.VITE_CONTENTFUL_SPACE_KEY
const CONTENTFUL_ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN

export const client = contentful.createClient({
	space: CONTENTFUL_SPACE_KEY,
	accessToken: CONTENTFUL_ACCESS_TOKEN
})
