import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type IPost } from '../types'

export const postsApi = createApi({
	reducerPath: 'postsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
	endpoints: (builder) => ({
		getPosts: builder.query<IPost[], void>({
			query: () => '/posts',
		}),
		getPostById: builder.query<IPost, number>({
			query: (id) => `posts/${id}`,
		}),
	}),
})

export const { useGetPostsQuery, useGetPostByIdQuery } = postsApi
