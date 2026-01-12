import type { FC } from 'react'
import { useMemo, useState } from 'react'
import { PostListWithLoading } from '../../widgets'
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength'
// import { useGetPostsQuery } from '../../shared/api'
import { PostLengthFilter } from '../../features'
import { ContentWrapper } from '../../shared/layouts'
import { usePosts } from '../../features/PostList'

export const PostsPage: FC = () => {
	// const { data: posts = [], isLoading } = useGetPostsQuery()
	const { posts, loading } = usePosts()
	const [minLength, setMinLength] = useState(0)

	const handleFilterChange = (length: number) => {
		setMinLength(length)
	}

	const filtredPosts = useMemo(
		() => filterByLength(posts, minLength),
		[posts, minLength]
	)

	return (
		<ContentWrapper>
			<PostLengthFilter minLength={minLength} onChange={handleFilterChange} />
			<PostListWithLoading posts={filtredPosts} isLoading={loading} />{' '}
		</ContentWrapper>
	)
}
