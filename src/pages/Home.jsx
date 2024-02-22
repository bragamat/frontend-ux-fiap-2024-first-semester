import { Layout } from '../components/Layout'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useFetchPosts } from '../hooks/useFetchPosts'
import { useFetchCategories } from '../hooks/useFetchCategories'

export const Home = () => {
	const { data: posts } = useFetchPosts({ limit: 3 })
	const { data: categories } = useFetchCategories({ limit: 3 })

	return (
		<Layout>
			<div className="container pt-2">
				<div className="row">
					<main className="col-md-8">
						<h1 className="my-3">Últimos posts</h1>
						{posts.map(post => (
							<div className="card mb-3" key={post.sys.id}>
								<div className="card-body">
									<h5 className="card-title">{post.fields.title}</h5>
									<p className="card-text">{post.fields.postDescription}</p>
									<Link to={`/post/${post.fields.slug}`} className="card-link">
                    Ver post
									</Link>
								</div>
							</div>
						))}

						<Link to={'/posts'} className="btn btn-primary">
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
											{category.fields.name}
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
