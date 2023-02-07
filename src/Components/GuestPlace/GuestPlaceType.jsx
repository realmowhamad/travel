import React from "react";
import { useSelector } from "react-redux";

export default function GuestPlaceType({ title, describe, icon, objectCreator }) {
    const item = useSelector(state => state.vacationStateData.guestPlaceType)
    console.log(item);


    const guestPlaceType = () => {

        const newObj = {
            type: title,
            icon
        }
        objectCreator(newObj)


    }



    return (
        <div onClick={guestPlaceType} className={`px-5 py-6 m-3 bg-white border-2  border-[#dddddd]  w-full lg:w-3/6 flex justify-between h-auto max-h-auto rounded-[10px] ${item.type === title ? "bg-[#f7f7f7] shadow-[rgb(34 34 34) 0px 0px 0px 2px] border2 border-gray-700" : ""}`}>
            <div className="flex flex-col h-full">
                <h1 className="text-xl font-sfRegular font-semibold">
                    {title}
                </h1>
                <p className="text-gray-400">
                    {describe}
                </p>
            </div>
            <div className="mx-4 flex items-center justify-center">
                <img src={icon} alt="x" />
            </div>
        </div>
    )
}
