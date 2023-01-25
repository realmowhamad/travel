import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../Api/Api";



export const getAsyncHostsOffers = createAsyncThunk(
    "Hosts/getAsyncHostsOffers",
    async (_, { rejectWithValue }) => {
        try {
            const response = await Api.get("/placeOffers")
            return response.data
        } catch (error) {
            return rejectWithValue([], error.message)
        }
    }
)

const initialState = {
    placeOffers: [],
    loading: false,
    error: null
}

const hostsSlice = createSlice({
    name: "vacations",
    initialState,
    extraReducers: {
        [getAsyncHostsOffers.pending]: (state, action) => {
            return { ...state, loading: true, error: null, placeOffers: [] }
        },
        [getAsyncHostsOffers.rejected]: (state, action) => {
            return { ...state, loading: false, error: action.error, placeOffers: [] }
        },
        [getAsyncHostsOffers.fulfilled]: (state, action) => {
            return { ...state, loading: false, error: null, placeOffers: action.payload }
        }
    }
})



export default hostsSlice.reducer