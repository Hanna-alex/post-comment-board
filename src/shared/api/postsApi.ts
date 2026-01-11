import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type IPost } from '../types'
import { mockPosts } from '../../mocks'

export const postsApi = createApi({
	reducerPath: 'postsApi',
	baseQuery: fetchBaseQuery({ baseUrl: '/' }),
	endpoints: (builder) => ({
		getPosts: builder.query<IPost[], void>({
			queryFn: async () => {
				await new Promise((resolve) => setTimeout(resolve, 1000))
				return { data: mockPosts }
			},
		}),
	}),
})

export const { useGetPostsQuery } = postsApi
