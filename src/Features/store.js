import { configureStore } from "@reduxjs/toolkit";
import VacationSlice from "./VacationSlice/VacationSlice";
import HostSlice from "./HostSlice/HostSlice";
import placeOffersSlice from "./placeOffersSlice";


const store = configureStore({
    reducer: {
        vacationsData: VacationSlice,
        hosts: HostSlice,
        placeOffers: placeOffersSlice
    }
})

export default store