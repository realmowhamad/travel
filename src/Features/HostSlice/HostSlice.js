import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../Api/Api";


export const getAsyncHosts = createAsyncThunk(
    "Hosts/getAsyncHosts",
    async (_, { rejectWithValue }) => {
        try {
            const response = await Api.get("/hosts")
            return response.data
        } catch (error) {
            return rejectWithValue([], error.message)
        }
    }
)

const initialState = {
    hosts: [],
    loading: false,
    error: null
}

const hostsSlice = createSlice({
    name: "vacations",
    initialState,
    extraReducers: {
        [getAsyncHosts.pending]: (state, action) => {
            return { ...state, loading: true, error: null, hosts: [] }
        },
        [getAsyncHosts.rejected]: (state, action) => {
            return { ...state, loading: false, error: action.error, hosts: [] }
        },
        [getAsyncHosts.fulfilled]: (state, action) => {
            return { ...state, loading: false, error: null, hosts: action.payload }
        }
    }
})



export default hostsSlice.reducer