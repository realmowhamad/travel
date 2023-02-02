import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function BottomBar({ prevRoute, nextRoute, btnTitle = "Next", hidden = false }) {



    return (
        <div className={`h-20 lg:h-28 w-screen flex items-center justify-center lg:justify-between flex-row-reverse px-2 leading-normal border-t-4 fixed bottom-0 bg-white ${!hidden && "justify-between px-12"}`} >
            <Link Link to={`/${nextRoute}`
            } className={!hidden ? "lg:w-auto" : "w-[90%] "} >
                <button className="px-4 py-3 box-border text-[16px] font-sfsBold w-full lg:w-auto lg:py-4 bg-gradient-to-r from-[#FF385C] to-[#BD1E59] rounded-md text-white text-lg">{btnTitle}</button>
            </Link >
            <Link to={`/${prevRoute}`}>
                <button className={hidden ? `hidden` : `px-4 py-3 border border-stone-200 rounded-md text-stone-300 hover:text-stone-500 text-lg`}>Back</button>
            </Link>

        </ div >
    );
}
