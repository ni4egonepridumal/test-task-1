/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IUser, IUsers } from "../../types"


const initialState: IUsers = {
    allUsers: [],
    loading: true,
}

export const users = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUsers: (state, action: PayloadAction<IUser[]>) => {
            state.allUsers = action.payload;
            state.loading = false
        },
        selectedUser: (state, action: PayloadAction<number>) => {
            state.allUsers = state.allUsers.filter(item => item.id === action.payload)
        },
        sortNameUser: (state) => {
            //@ts-ignore
            state.allUsers = state.allUsers.sort((a, b) => { if (a["name"] < b["name"]) return -1 });
        },
        sortCityUser: (state) => {
            //@ts-ignore
            state.allUsers = state.allUsers.sort((a, b) => { if (a["address"].city < b["address"].city) return -1 });
        }
    },
})

export const { getUsers, selectedUser, sortNameUser, sortCityUser } = users.actions

export default users.reducer