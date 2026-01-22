import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postsApi, postSelectors, setPosts } from '../../../../entities'

export const usePosts = () => {
	const dispatch = useDispatch()
	const { useGetPostsQuery } = postsApi
	const { data: postsFromApi, error, isLoading, isFetching } = useGetPostsQuery()

	const posts = useSelector(postSelectors.selectAll)

	useEffect(() => {
		if (postsFromApi) {
			dispatch(setPosts(postsFromApi))
		}
	}, [postsFromApi, dispatch])

	return {
		posts,
		loading: isLoading,
		fetching: isFetching,
		error: error ? 'Ошибка получения постов' : null,
	}
}
