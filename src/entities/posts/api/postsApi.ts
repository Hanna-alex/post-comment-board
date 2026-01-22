import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IPost } from '../../../shared/types'

export const postsApi = createApi({
	reducerPath: 'postsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com',
	}),
	tagTypes: ['Post'],
	endpoints: (builder) => ({
		getPosts: builder.query<IPost[], void>({
			query: () => 'posts',
			providesTags: (result) =>
				result
					? [
							...result.map(({ id }) => ({
								type: 'Post' as const,
								id,
							})),
							{ type: 'Post', id: 'LIST' },
						]
					: [{ type: 'Post', id: 'LIST' }],
		}),

		getPostsByUserId: builder.query<IPost[], number>({
			query: (userId) => `posts?userId=${userId}`,
			providesTags: (result) =>
				result
					? [
							...result.map(({ id }) => ({
								type: 'Post' as const,
								id,
							})),
							{ type: 'Post', id: 'LIST' },
						]
					: [{ type: 'Post', id: 'LIST' }],
		}),

		getPostById: builder.query<IPost, number>({
			query: (postId) => `posts/${postId}`,
			providesTags: (_r, _e, id) => [{ type: 'Post', id }],
		}),

		addPost: builder.mutation<IPost, Partial<IPost>>({
			query: (body) => ({
				url: 'posts',
				method: 'POST',
				body,
			}),
			invalidatesTags: [{ type: 'Post', id: 'LIST' }],
		}),
	}),
})
