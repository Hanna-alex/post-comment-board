import type { FC } from 'react'
import { useParams } from 'react-router-dom'
import { postsApi, commentsApi } from '../../entities'
import { CommentList } from '../../widgets'
import { ContentWrapper } from '../../shared/layouts'

export const PostDetailPage: FC = () => {
	const { id } = useParams()
	const { useGetPostByIdQuery } = postsApi
	const { useGetCommentsByPostIdQuery } = commentsApi
	const postId = Number(id)
	const { data: post, isLoading, isError } = useGetPostByIdQuery(postId)
	const { data: comments } = useGetCommentsByPostIdQuery(postId)

	if (isLoading) return <div>Загрузка...</div>
	if (isError || !post) return <div>Пост не найден</div>

	return (
		<ContentWrapper>
			<h2>{post?.title}</h2>
			<p>{post?.body}</p>

			<CommentList comments={comments ?? []} />
		</ContentWrapper>
	)
}
