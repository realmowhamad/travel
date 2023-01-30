import { configureStore } from "@reduxjs/toolkit";
import VacationSlice from "./VacationSlice/VacationSlice";
import HostSlice from "./HostSlice/HostSlice";
import placeOffersSlice from "./placeOffersSlice";
import StructureSlice from "./StructureSlice/StructureSlice";
import vacationDataSlice from "./vacationDataSlice/vacationDataSlice";


const store = configureStore({
    reducer: {
        vacationsData: VacationSlice,
        hosts: HostSlice,
        placeOffers: placeOffersSlice,
        stractures: StructureSlice,
        vacationStateData: vacationDataSlice
    }
})

export default store