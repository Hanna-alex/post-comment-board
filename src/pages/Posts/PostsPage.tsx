import { useMemo, useState } from 'react'
import { PostListWithLoading } from '../../widgets'
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength'
import { PostLengthFilter } from '../../features'
import { ContentWrapper } from '../../shared/layouts'
import { usePosts } from '../../features/PostList'

export const PostsPage = () => {
	const { posts, loading } = usePosts()
	const [minLengthValue, setValue] = useState(0)

	const handleFilterChange = (length: number) => {
		setValue(length)
	}

	const filtredPosts = useMemo(() => {
		let result = posts || []
		if (minLengthValue !== undefined) {
			result = filterByLength(result, minLengthValue)
		}
		return result
	}, [posts, minLengthValue])

	return (
		<ContentWrapper>
			<PostLengthFilter minLength={minLengthValue} onChange={handleFilterChange} />
			<PostListWithLoading posts={filtredPosts} isLoading={loading} />{' '}
		</ContentWrapper>
	)
}
