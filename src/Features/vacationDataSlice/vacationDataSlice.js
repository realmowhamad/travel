import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const initialState = {
    placeType: "",
    guestPlaceType: "",

}

const vacationDataSlice = createSlice({
    name: "vacationDataa",
    initialState,
    reducers: {
        addPlaceType: (state, action) => {
            state.placeType = action.payload

        },
        placeTypeStatus: (state, action) => {
            state.placeType = action.payload

        },
        guestPlaceType: (state, action) => {
            state.guestPlaceType = action.payload
            console.log(state.guestPlaceType);
        }
    }


})

export const { addPlaceType, placeTypeStatus, guestPlaceType } = vacationDataSlice.actions;
export default vacationDataSlice.reducer

