import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IUsers, IUser } from "../../types"


const initialState: IUsers = {
    allUsers: [],
}

export const Users = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUsers: (state, action: PayloadAction<IUsers>) => {
            state.allUsers = action.payload
        }
    },
})

export const { getUsers } = Users.actions

export default Users.reducer