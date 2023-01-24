import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../Api/Api";


export const getAsyncVacationsData = createAsyncThunk(
    "vacation/getAsyncVacation",
    async (_, { rejectWithValue }) => {
        try {
            const response = await Api.get("/vacations")
            return response.data
        } catch (error) {
            return rejectWithValue([], error.message)
        }
    }
)

const initialState = {
    vacations: [],
    loading: false,
    error: null
}

const VacationSlice = createSlice({
    name: "vacations",
    initialState,
    extraReducers: {
        [getAsyncVacationsData.pending]: (state, action) => {
            return { ...state, loading: true, error: null, vacations: [] }
        },
        [getAsyncVacationsData.rejected]: (state, action) => {
            return { ...state, loading: false, error: action.error, vacations: [] }
        },
        [getAsyncVacationsData.fulfilled]: (state, action) => {
            return { ...state, loading: false, error: null, vacations: action.payload }
        }
    }
})



export default VacationSlice.reducer