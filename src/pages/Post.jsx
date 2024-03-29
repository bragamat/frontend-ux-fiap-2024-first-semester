import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import {
  useParams,
  Link
} from 'react-router-dom'

import { Layout } from '../components/Layout'
import { useFetchPostBySlug } from '../hooks/useFetchPostBySlug'

export const Post = () => {
  const { slug } = useParams()

  const { data: post, isLoading } = useFetchPostBySlug({ slug })

  return (
    <Layout>

      {isLoading ? (<div>Carregando...</div>) : null}
      {
        post ? (
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="my-3">{post?.fields?.title}</h1>
              </div>

              <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(post.fields.body) }}></div>

              <div className="mt-1">
                <Link to="/" className="btn btn-primary">
                  Voltar para Home
                </Link>
              </div>
            </div>
          </div>
        ) : null
      }

    </Layout>
  )
}
