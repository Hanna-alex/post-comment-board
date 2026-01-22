import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IAlbum } from '../../../shared/types'

export const albumsApi = createApi({
	reducerPath: 'albumsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
	tagTypes: ['Album'],
	endpoints: (build) => ({
		getAlbumsByUserId: build.query<IAlbum[], number>({
			query: (userId) => `users/${userId}/albums`,
			providesTags: ['Album'],
		}),
		getPhotosByAlbumsId: build.query<IAlbum[], number>({
			query: (albumId) => `albums/${albumId}/photos`,
			providesTags: ['Album'],
		}),
	}),
})
