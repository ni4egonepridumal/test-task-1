import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IUsers } from "../../types"


const initialState: IUsers = {
    allUsers: [],
    loading: true,
}

export const Users = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUsers: (state, action: PayloadAction<IUsers>) => {
            state.allUsers = action.payload
            state.loading = false
        },
        selectedUser: (state, action) => {
            state.allUsers = state.allUsers.filter(item => item.id === action.payload)
            console.log("данные которые приходят в старый слайс", action.payload)
        }
    },
})

export const { getUsers, selectedUser } = Users.actions

export default Users.reducer