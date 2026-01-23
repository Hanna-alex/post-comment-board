import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Todo } from '../../todo/model/types'

export const todosApi = createApi({
	reducerPath: 'todosApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
	tagTypes: ['Todo'],
	endpoints: (build) => ({
		getTodosByUserId: build.query<Todo[], number>({
			query: (userId) => `todos/userId=${userId}`,
			providesTags: ['Todo'],
		}),
	}),
})
