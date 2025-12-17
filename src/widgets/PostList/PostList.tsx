import { PostCard } from '../../entities'
import { Container, posts } from '../../shared'

export const PostList = () => {
	return (
		<Container>
			<ul>
				{posts.map((post) => (
					<PostCard key={post.id} {...post} />
				))}
			</ul>
		</Container>
	)
}
