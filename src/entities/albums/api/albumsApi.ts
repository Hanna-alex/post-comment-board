import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Album } from '../model/types'

export const albumsApi = createApi({
	reducerPath: 'albumsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
	tagTypes: ['Album'],
	endpoints: (build) => ({
		getAlbumsByUserId: build.query<Album[], number>({
			query: (userId) => `users/${userId}/albums`,
			providesTags: ['Album'],
		}),
		getPhotosByAlbumsId: build.query<Album[], number>({
			query: (albumId) => `albums/${albumId}/photos`,
			providesTags: ['Album'],
		}),
	}),
})
