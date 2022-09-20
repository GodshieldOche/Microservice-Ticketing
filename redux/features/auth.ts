import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AppState } from '../store'
import axios from 'axios'



export type error = {
    errors: {}[]
}

// Define a type for the slice state
export interface authState {
    loading: boolean;
    data: object;
    error: object | null;
}


export const postSignOut: any = createAsyncThunk(
    `user/postSignOut`, async (obj: any, { dispatch, rejectWithValue }) => {

        try {
            const { data }: any = await axios.post(`/api/users/signout`, {}, {
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

export const postSignIn: any = createAsyncThunk(
    `user/postSignIn`, async (body: any, { dispatch, rejectWithValue }) => {

        try {
            const { data }: any = await axios.post(`/api/users/signin`, body, {
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
const initialState: authState = {
    loading: true,
    data: {},
    error: null

}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            return state = initialState
        }
    },
    extraReducers: {
        [postSignOut.pending]: (state) => {
            state.loading = true
        },
        [postSignOut.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.data = payload.data
        },
        [postSignOut.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [postSignIn.pending]: (state) => {
            state.loading = true
        },
        [postSignIn.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.data = payload.data
        },
        [postSignIn.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    }
})


// // Other code such as selectors can use the imported `RootState` type
export const { reset } = authSlice.actions
export const data = (state: AppState) => state.auth.data
export const loading = (state: AppState) => state.auth.loading
export const error = (state: AppState) => state.auth.error

export default authSlice.reducer