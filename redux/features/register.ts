import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AppState } from '../store'
import axios from 'axios'



export type error = {
    errors: {}[]
}

// Define a type for the slice state
export interface registerState {
    loading: boolean;
    data: object;
    error: object | null;
}


export const postRegister: any = createAsyncThunk(
    `user/postRegister`, async (body: any, { dispatch, rejectWithValue }) => {

        try {
            const { data }: any = await axios.post(`/api/users/signup`, body, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            return data

        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }

    }
)




// Define the initial state using that type
const initialState: registerState = {
    loading: true,
    data: {},
    error: null

}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        reset: (state) => {
            return state = initialState
        }
    },
    extraReducers: {
        [postRegister.pending]: (state) => {
            state.loading = true
        },
        [postRegister.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.data = payload.data
        },
        [postRegister.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    }
})


// // Other code such as selectors can use the imported `RootState` type
export const { reset } = registerSlice.actions
export const data = (state: AppState) => state.register.data
export const loading = (state: AppState) => state.register.loading
export const error = (state: AppState) => state.register.error

export default registerSlice.reducer