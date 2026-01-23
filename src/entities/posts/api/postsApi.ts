import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Post } from '../../post/model/types'

export const postsApi = createApi({
	reducerPath: 'postsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com',
	}),
	tagTypes: ['Post'],
	endpoints: (builder) => ({
		getPosts: builder.query<Post[], void>({
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

		getPostsByUserId: builder.query<Post[], number>({
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

		getPostById: builder.query<Post, number>({
			query: (postId) => `posts/${postId}`,
			providesTags: (_r, _e, id) => [{ type: 'Post', id }],
		}),

		addPost: builder.mutation<Post, Partial<Post>>({
			query: (body) => ({
				url: 'posts',
				method: 'POST',
				body,
			}),
			invalidatesTags: [{ type: 'Post', id: 'LIST' }],
		}),
	}),
})
