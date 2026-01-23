import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Comment } from '../../comment/model/types'

export const commentsApi = createApi({
	reducerPath: 'commentsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
	tagTypes: ['Comment'] as const,
	endpoints: (builder) => ({
		getCommentsByPostId: builder.query<Comment[], number>({
			query: (postId) => `/comments?postId=${postId}`,
			providesTags: (result, _e, postsId) =>
				result
					? [
							...result.map(({ id }) => ({
								type: 'Comment' as const,
								id,
							})),
							{ type: 'Comment' as const, id: `POST_${postsId}` },
						]
					: [{ type: 'Comment' as const, id: `POST_${postsId}` }],
		}),
	}),
})
