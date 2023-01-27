import React from "react";
import { Link } from "react-router-dom";

export default function BottomBar({ prevRoute, nextRoute, btnTitle = "Next" }) {
    return (
        <div className="mt-auto h-28 flex items-center justify-between flex-row-reverse px-10 border-t-4">
            <Link to={`/${nextRoute}`}>
                <button className="px-10 py-4 bg-rose-600 rounded-md text-white text-lg">{btnTitle}</button>
            </Link>
            <Link to={`/${prevRoute}`}>
                <button className="px-10 py-4 border border-black rounded-md text-black text-lg">Back</button>
            </Link>
        </div>
    );
}
