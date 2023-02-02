import React from 'react';
import ParagraphCreator from '../../../Components/Common/ParagraphCreator/ParagraphCreator';
import style from './AboutYourPlace.module.css'
import bed from '../../../Assets/images/bed.png'
import Header from '../../../Components/Header/Header';
import BottomBar from '../../../Components/BottomBar/BottomBar';
import sit from '../../../Assets/images/1.svg'
import airplane from '../../../Assets/images/airplane.svg'

const AboutYourPlace = () => {
    return (
        <div className='flex flex-col items-center h-screen w-screen'>
            <Header />


            <div className=' flex flex-col items-center h-screen w-screen lg:flex-row lg:items-start'>
                <div className={`${style.imageContainer} w-full h-1/3 lg:h-2/3 md:h-3/6  top-0 flex items-center justify-center lg:items-start`}>
                    <div className=' h-full w-full rounded-[20px] flex items-center justify-center relative'>
                        <img src={sit} alt="" className={`${style.earth} absolute`} />
                        <img src={airplane} alt="" className={`${style.airplanee} z-10 bottom-12 lg:bottom-32 absolute`} />
                    </div>
                </div>
                <div className={`${style.container} w-5/6 p-10 py-0  lg:w-4/6 lg:h-full lg:flex lg:items-center`}>
                    <div className={`${style.content} pb-24`}>
                        <h1 className='text-xl font-medium mt-5'>Tell us about your place</h1>
                        <p className='text-lg font-normal mt-3'>
                            In this step, we'll ask you which type of property you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay.
                        </p>
                    </div>
                </div>
                <BottomBar prevRoute={"become-a-host"} nextRoute={"become-a-host/structure"} />

            </div>
        </div>
    );
}

export default AboutYourPlace;
