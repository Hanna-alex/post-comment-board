import { PostCard } from '../../entities'
import type { PostListProps } from './model/types'

export const PostList = ({ posts }: PostListProps) => {
	return (
		<ul>
			{posts?.map((post) => (
				<PostCard {...post} />
			))}
		</ul>
	)
}
