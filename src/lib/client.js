import * as contentful from 'contentful'

const CONTENTFUL_SPACE_KEY = import.meta.env.VITE_CONTENTFUL_SPACE_KEY
const CONTENTFUL_ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
const CONTENTFUL_ENTRY = import.meta.env.VITE_CONTENTFUL_ENTRY

export const client = contentful.createClient({
  space: CONTENTFUL_SPACE_KEY,
  environment: 'master', // defaults to 'master' if not set
  accessToken: CONTENTFUL_ACCESS_TOKEN
})

// client.getEntry(CONTENTFUL_ENTRY)
//   .then((entry) => console.log(entry))
//   .catch(console.error)
