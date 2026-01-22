import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { ITodo } from '../../../shared/types'

export const todosApi = createApi({
	reducerPath: 'todosApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
	tagTypes: ['Todo'],
	endpoints: (build) => ({
		getTodosByUserId: build.query<ITodo[], number>({
			query: (userId) => `todos/userId=${userId}`,
			providesTags: ['Todo'],
		}),
	}),
})
