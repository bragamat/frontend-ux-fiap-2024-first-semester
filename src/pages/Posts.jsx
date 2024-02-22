// import { useEffect, useState } from "react"
import { Layout } from "../components/Layout"
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Pagination } from 'react-bootstrap';
import { useFetchPosts, useFetchCategories } from "../hooks";

export const Posts = () => {
  const { data: posts, pagination, goToPage } = useFetchPosts({ order: 'sys.createdAt', limit: 2 })
  const { data: categories } = useFetchCategories()

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <main className="col-md-8">
            <h1 className="my-3">Todos os posts</h1>

            {posts.map(post => (
              <div className="card mb-3" key={post.sys.id}>
                <div className="card-body">
                  <h5 className="card-title">{post.fields.title}</h5>
                  <p className="card-text">{post.fields.description}</p>
                  <Link to={`/post/${post.fields.slug}`} className="card-link">
                    Ver post
                  </Link>
                </div>
              </div>
            ))}

            <Pagination>
              {Array.from({ length: pagination.totalPages }, (_, index) => (
                <Pagination.Item
                  key={index}
                  active={index + 1 === pagination.page}
                  onClick={() => goToPage(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
            </Pagination>
            <Link to="/" className="btn btn-primary">
              Voltar para Home
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
