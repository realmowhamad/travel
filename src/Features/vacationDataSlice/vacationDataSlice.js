import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const initialState = {
    placeType: "",

}

const vacationDataSlice = createSlice({
    name: "vacationDataa",
    initialState,
    reducers: {
        addPlaceType: (state, action) => {
            state.placeType = action.payload
            console.log(state.placeType)
        }
    }


})

export const { addPlaceType } = vacationDataSlice.actions;
export default vacationDataSlice.reducer

