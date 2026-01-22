import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import type { IComment } from '../../../shared/types'

const comentAdapter = createEntityAdapter({
	selectId: (post: IComment) => post.id,
})

const initialState = comentAdapter.getInitialState({})

const postSlice = createSlice({
	name: 'comments',
	initialState,
	reducers: {
		setComments: comentAdapter.setAll,
	},
})

export const { setComments } = postSlice.actions
export default postSlice.reducer
