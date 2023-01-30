import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../Api/Api";


export const getAsyncStracture = createAsyncThunk(
    "stracture/getAsyncStracture",
    async (_, { rejectWithValue }) => {
        try {
            const response = await Api.get("/structures")
            return response.data
        } catch (error) {
            return rejectWithValue([], error.message)
        }
    }
)

const initialState = {
    stractures: [],
    loading: false,
    error: null
}

const StractureSlice = createSlice({
    name: "structures",
    initialState,
    extraReducers: {
        [getAsyncStracture.pending]: (state, action) => {
            return { ...state, loading: true, error: null, stracture: [] }
        },
        [getAsyncStracture.rejected]: (state, action) => {
            return { ...state, loading: false, error: action.error, stracture: [] }
        },
        [getAsyncStracture.fulfilled]: (state, action) => {
            return { ...state, loading: false, error: null, stracture: action.payload }
        }
    }
})



export default StractureSlice.reducer