import style from './SideBar.module.css'
import { Link } from 'react-router-dom';
import { HiHome, HiBars3 } from "react-icons/hi2"
import { GrTransaction } from "react-icons/gr"
import { MdLocationOn, MdAddLocationAlt } from "react-icons/md"

import React from "react";

export default function SideBar() {
    return (

        <div className='sticky w-1/6 h-screen'>
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
                <Link to='/newLocations'>
                    <li>
                        <i><MdAddLocationAlt /></i>
                        New Locations
                    </li>
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
