import React from 'react';
import style from './Navbar.module.css'
import { FiSearch, FiMenu } from 'react-icons/fi'

const Navbar = () => {
    return (
        <div className='w-full flex items-center justify-center sm:justify-between h-20 py-3 px-6 my-2 lg:justify-between '>
            <div className='hidden lg:block'>Logo</div>

            <div className={`${style.searchBar} w-full h-full bg-white flex items-center justify-start lg:flex-row-reverse lg:justify-between lg:w-4/12 lg:max-w-lg`}>

                <i className='text-xl px-5 sm:-order-last lg:p-2 lg:bg-red-500 lg:rounded-full lg:mr-2'>
                    <FiSearch />
                </i>

                <div className=' flex flex-col justify-start w-3/6 D  sm:w-full lg:w-full lg:items-center lg:justify-between lg:flex-row pl-5  '>
                    <h1 className='font-bold text-lg lg:font-normal '>Anywhere</h1>
                    <div className='flex text-sm sm:text-lg md:mr-3 lg:justify-evenly flex-1'>
                        <p className=''>Any week</p>
                        <p className='text-gray-400'>Any guests</p>
                    </div>
                </div>

                {/* menu icon */}
                <div className=' w-3/6 flex justify-end lg:hidden '>
                    <i className='mx-2 border text-2xl p-2 rounded-full'>
                        <FiMenu />
                    </i>
                </div>
            </div>
            <div className='hidden lg:block'>
                user
            </div>
        </div>
    );
}

export default Navbar;
