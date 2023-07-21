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
            state.allUsers = action.payload,
                state.loading = false
        },
        selectedUser: (state, action: PayloadAction<number>) => {
            state.allUsers = state.allUsers.filter(item => item.id === action.payload)
            console.log("данные которые приходят в старый слайс", action.payload)
        },
        sortNameUser: (state) => {
            state.allUsers = state.allUsers.sort((a, b) => { if (a["name"] < b["name"]) return -1 });
        },
        sortCityUser: (state) => {
            state.allUsers = state.allUsers.sort((a, b) => { if (a["address"].city < b["address"].city) return -1 });
        }
    },
})

export const { getUsers, selectedUser, sortNameUser, sortCityUser } = Users.actions

export default Users.reducer