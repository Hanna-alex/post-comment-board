import type { FC } from 'react'
import { useParams } from 'react-router-dom'
import { postsApi } from '../../entities'
import { ContentWrapper } from '../../shared/layouts'
import { PostList } from '../../widgets'

export const UserPostsPage: FC = () => {
	const { id } = useParams()
	const { useGetPostsByUserIdQuery } = postsApi

	const userId = Number(id)
	const {
		data: userPostsFromApi,
		isLoading,
		isError,
	} = useGetPostsByUserIdQuery(userId)

	if (isLoading) return <div>Загрузка...</div>
	if (isError || !userPostsFromApi) return <div>Пост не найден</div>

	return (
		<ContentWrapper>
			<h2>User posts:</h2>
			<PostList posts={userPostsFromApi} />
		</ContentWrapper>
	)
}
