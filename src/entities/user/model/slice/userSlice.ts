import { createSlice, createEntityAdapter, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../../app'
import type { User } from '../types'

const usersAdapter = createEntityAdapter<User>() // selectId в новых версиях >=2.x не передается как опция, а автоматически использует ID, указывает есмли _id не стандартный

const initialState = usersAdapter.getInitialState({
	selectedUserId: null as number | null,
})

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<User[]>) {
			usersAdapter.setAll(state, action.payload)
		},
		selectUser(state, action: PayloadAction<number>) {
			state.selectedUserId = action.payload
		},
		addUser(state, action: PayloadAction<User>) {
			usersAdapter.addOne(state, action.payload)
		},
		updateUser(state, action: PayloadAction<User>) {
			usersAdapter.updateOne(state, {
				id: action.payload.id,
				changes: action.payload,
			})
		},
		removeUser(state, action: PayloadAction<number>) {
			usersAdapter.removeOne(state, action.payload)
		},
	},
})

export const userSelectors = usersAdapter.getSelectors<RootState>((state) => state.user)
export const { setUser, selectUser } = userSlice.actions

export default userSlice.reducer
