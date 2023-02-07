import React from "react";
import Header from "../Header/Header";
import BottomBar from "../BottomBar/BottomBar";
import GuestPlaceType from "./GuestPlaceType";
import { useDispatch } from "react-redux";
import { guestPlaceType } from "../../Features/vacationDataSlice/vacationDataSlice";

export default function GuestPlace() {
    const disatch = useDispatch()


    const objctHandler = (inputs) => {
        disatch(guestPlaceType(inputs))

    }

    return (
        <div className="flex flex-col w-screen h-screen" >
            <Header />
            <section className="flex flex-col items-center justify-center w-full h-full px-3">
                <h1 className="text-xl font-sfsBold">What type of place will guests have?</h1>
                <GuestPlaceType objectCreator={objctHandler} title="An entire place" describe="Guests have the whole place to themselves." />
                <GuestPlaceType objectCreator={objctHandler} title="A private room" describe="Guests sleep in a private room but some areas may be shared with you or others." />
                <GuestPlaceType objectCreator={objctHandler} title="A shared room" describe="Guests sleep in a room or common area that may be shared with you or others.Your progress: step 3 out of 15." />




            </section>



            <BottomBar />

        </div>

    )
}
