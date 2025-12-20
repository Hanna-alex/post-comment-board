import React from 'react'
import { PostCard } from '../../entities'
import { posts } from '../../shared/api'
import { ContentWrapper } from '../../shared/layouts'

export const PostList = () => {
	return (
		<ContentWrapper>
			<ul>
				{posts.map((post) => (
					<React.Fragment key={post.id}>
						<PostCard {...post} />
					</React.Fragment>
				))}
			</ul>
		</ContentWrapper>
	)
}
