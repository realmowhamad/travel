import React from 'react';
import style from './Navbar.module.css'
import { FiSearch, FiMenu } from 'react-icons/fi'

const Navbar = () => {
    return (
        <div className='w-full flex items-center justify-center sm:justify-between h-20 py-3 px-6 my-2 '>
            <div className='hidden sm:block'>Logo</div>
            <div className={`${style.searchBar} w-full sm:w-auto h-full bg-white flex items-center `}>
                <i className='text-xl px-5'><FiSearch /></i>
                <div className=' flex flex-col w-3/6'>
                    <h1 className='font-bold text-lg'>Anywhere</h1>
                    <div className='flex text-sm'>
                        <p className='pr-2'>Any week</p>
                        <p>Any guests</p>
                    </div>
                </div>

                {/* menu icon */}
                <div className=' w-3/6 flex justify-end '>
                    <i className='mx-2 border text-2xl p-2 rounded-full'>
                        <FiMenu />
                    </i>
                </div>
            </div>
            <div className='hidden sm:block'>

            </div>
        </div>
    );
}

export default Navbar;
