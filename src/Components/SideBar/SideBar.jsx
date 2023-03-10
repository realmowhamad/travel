import style from './SideBar.module.css'
import { Link } from 'react-router-dom';
import { HiHome, HiBars3 } from "react-icons/hi2"
import { GrTransaction } from "react-icons/gr"
import { MdLocationOn, MdAddLocationAlt } from "react-icons/md"

import React, { useState } from "react";

export default function SideBar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)


    return (

        <div className='sticky max-w-1/6 min-w-1/6 h-screen hidden sm:block'>
            <h1>Dashboard</h1>
            <ul className={`${style.sideBarList}`}>
                <Link to=''>
                    <li>
                        <i><HiHome /></i>
                        Home
                    </li>
                </Link>
                <Link to=''>
                    <li>
                        <i><MdLocationOn /></i>
                        Locations
                    </li>
                </Link >
                <Link to=''>
                    <li>
                        <i><HiBars3 /></i>
                        Manage Locations
                    </li>
                </Link>
                <Link to='/newLocations' onClick={() => setIsDropdownOpen(true)}>
                    <li>
                        <i><MdAddLocationAlt /></i>
                        New Locations
                    </li>
                    {isDropdownOpen && (
                        <div className={`${style.dropdown} flex flex-col`}>
                            <Link to="#">
                                <li>
                                    <i><HiBars3 /></i>
                                    Manage Locations
                                </li>
                            </Link>
                            <Link to="#">Option 2</Link>
                            <Link to="#">Option 3</Link>
                        </div>
                    )}
                </Link>
                <Link to=''>
                    <li>
                        <i><GrTransaction /></i>
                        transactions
                    </li>
                </Link>
            </ul>

        </div >
    )
}
