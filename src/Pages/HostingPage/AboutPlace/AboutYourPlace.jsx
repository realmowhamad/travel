import React from 'react';
import ParagraphCreator from '../../../Components/Common/ParagraphCreator/ParagraphCreator';
import style from './AboutYourPlace.module.css'
import bed from '../../../Assets/images/bed.png'
import Header from '../../../Components/Header/Header';
import BottomBar from '../../../Components/BottomBar/BottomBar';
import sit from '../../../Assets/images/sit.png'

const AboutYourPlace = () => {
    return (
        <div className=' flex flex-col h-screen'>
            <Header />
            <div className={style.icon}>
                <img src={sit} alt="" />
            </div>
            <div className={`${style.container} w-5/6  p-10 py-0`}>
                <div className={`${style.content} pb-24`}>
                    <h1 className='text-xl font-medium mt-5'>Tell us about your place</h1>
                    <p className='text-lg font-normal mt-3'>
                        In this step, we'll ask you which type of property you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay.
                    </p>
                </div>
            </div>
            <BottomBar prevRoute={"become-a-host"} nextRoute={"become-a-host/structure"} />

        </div>
    );
}

export default AboutYourPlace;
