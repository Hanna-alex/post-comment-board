import { configureStore } from '@reduxjs/toolkit'
import { postsApi, commentsApi, albumsApi, todosApi } from '../../../entities'
import { postReducer, userReducer } from '../../../entities'

export const store = configureStore({
	reducer: {
		post: postReducer,
		user: userReducer,
		[postsApi.reducerPath]: postsApi.reducer,
		[commentsApi.reducerPath]: commentsApi.reducer,
		[albumsApi.reducerPath]: albumsApi.reducer,
		[todosApi.reducerPath]: todosApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(postsApi.middleware)
			.concat(commentsApi.middleware)
			.concat(albumsApi.middleware)
			.concat(todosApi.middleware),
})

// Типы для использования в приложении
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// commentsApi, albumsApi, todosApi
