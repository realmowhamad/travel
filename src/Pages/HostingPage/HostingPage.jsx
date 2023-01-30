import React from 'react';
import ParagraphCreator from '../../Components/Common/ParagraphCreator/ParagraphCreator';
import bed from '../../Assets/images/bed.png'
import BottomBar from '../../Components/BottomBar/BottomBar';
import Header from '../../Components/Header/Header';

const HostingPage = () => {

    return (
        <div className='flex flex-col min-w-screen min-h-screen overflow-hidden'>
            <Header />
            <section className='flex flex-col lg:flex-row min-w-screen flex-grow h-full items-center justify-centerbox-border overflow-y-auto'>

                {/* ORANGE */}

                <div style={{ lineHeight: "40px" }} className=' flex items-center justify-start pl-5  lg:justify-end lg:flex-grow w-full lg:w-3/6 mb-5'>
                    <h1 className='w-full h-auto text-[36px] font-sfsBold lg:w-5/6 lg:leading-none lg:text-[56px] text-start'>It’s easy to get started on Airbnb</h1>
                </div>



                {/* paragraph */}
                <div className=' w-full px-5 lg:w-3/6 flex items-start justify-center flex-col  lg:h-4/6  '>
                    <ParagraphCreator icon={bed} number={1} header={"Tell us about your place"} content={"Share some basic info, like where it is and how many guests can stay."} />
                    <ParagraphCreator icon={bed} number={2} header={"Make it stand out"} content={"Add 5 or more photos plus a title and description we’ll help you out"} />
                    <ParagraphCreator icon={bed} number={3} header={"Finish up and publish"} content={"Choose if you'd like to start with an experienced guest, set a starting price, and publish your listing."} />
                </div>
            </section>
            <BottomBar hidden={true} btnTitle='Get Started' prevRoute={'become-a-host/overview'} nextRoute={"become-a-host/about-your-place"} />
        </div>
    );
}

export default HostingPage;