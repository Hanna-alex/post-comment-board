import { useGetPostsQuery } from '../../../../shared/api'

export const usePosts = () => {
	const { data: posts, error, isLoading } = useGetPostsQuery()

	return {
		posts: posts || [],
		loading: isLoading,
		error: error ? 'Ошибка получения постов' : null,
	}
}
