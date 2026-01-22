import { createSlice, createEntityAdapter, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../../app'
import type { IPost } from '../../../../shared/types'

const postsAdapter = createEntityAdapter<IPost>() // selectId в новых версиях >=2.x не передается как опция, а автоматически использует ID, указывает есмли _id не стандартный

const initialState = postsAdapter.getInitialState({
	selectedPostId: null as number | null,
})

const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		setPosts(state, action: PayloadAction<IPost[]>) {
			postsAdapter.setAll(state, action.payload)
		},
		selectPost(state, action: PayloadAction<number>) {
			state.selectedPostId = action.payload
		},
	},
})

export const postSelectors = postsAdapter.getSelectors<RootState>((state) => state.post)
export const { setPosts, selectPost } = postSlice.actions

export default postSlice.reducer
