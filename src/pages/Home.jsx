import { Layout } from "../components/Layout"
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useFetchPosts } from "../hooks/useFetchPosts";
import { useFetchCategories } from "../hooks/useFetchCategories";

export const Home = () => {
  const { data: posts, isLoading: postsLoading } = useFetchPosts()
  const { data: categories, isLoading: categoriesLoading } = useFetchCategories()

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <main className="col-md-8">
            <h1 className="my-3">Últimos posts</h1>
            {posts.map(post => (
              <div className="card mb-3" key={post.sys.id}>
                <div className="card-body">
                  <h5 className="card-title">{post.fields.postTitle}</h5>
                  <p className="card-text">{post.fields.postDescription}</p>
                  <Link to={`/post/${post.fields.postSlug}`} className="card-link">
                    Ver post
                  </Link>
                </div>
              </div>
            ))}

            <Link to={`/posts`} className="btn btn-primary">
              Ver todos os posts
            </Link>
          </main>

          <aside className="col-md-4">
            <h2>Categorias</h2>
            <Container>
              {categories.map(category => (
                <Row key={category.sys.id}>
                  <Col>
                    <Button variant="link">
                      {category.fields.categoryTitle}
                    </Button>
                  </Col>
                </Row>
              ))}
            </Container>
          </aside>
        </div>
      </div>
    </Layout>
  )
}