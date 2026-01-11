import React, { type FC } from 'react'
import { PostCard } from '../../entities'
import type { IPost } from '../../shared/types'

interface PostListProps {
	posts: IPost[] | undefined
}

export const PostList: FC<PostListProps> = ({ posts }) => {
	return (
		<ul>
			{posts?.map((post) => (
				<React.Fragment key={post.id}>
					<PostCard {...post} />
				</React.Fragment>
			))}
		</ul>
	)
}
