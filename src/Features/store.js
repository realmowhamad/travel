import { configureStore } from "@reduxjs/toolkit";
import VacationSlice from "./VacationSlice/VacationSlice";
import HostSlice from "./HostSlice/HostSlice";


const store = configureStore({
    reducer: {
        vacationsData: VacationSlice,
        hosts: HostSlice
    }
})

export default store