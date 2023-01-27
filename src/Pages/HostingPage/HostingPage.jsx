import React from 'react';
import ParagraphCreator from '../../Components/Common/ParagraphCreator/ParagraphCreator';
import bed from '../../Assets/images/bed.png'
import BottomBar from '../../Components/BottomBar/BottomBar';
import Header from '../../Components/Header/Header';

const HostingPage = () => {

    return (
        <div className='flex flex-col w-screen h-screen'>

            <Header />
            <section className='flex w-full h-full items-center justify-center'>
                <div className='w-full h-full flex items-center justify-end '>
                    <h1 className='w-3/6 font-medium text-[56px] text-start'>It’s easy to get started on Airbnb</h1>
                </div>
                <div className=' w-full h-5/6 flex items-start justify-center flex-col px-52 py-20 '>
                    <ParagraphCreator icon={bed} number={1} header={"Tell us about your place"} content={"Share some basic info, like where it is and how many guests can stay."} />
                    <ParagraphCreator icon={bed} number={2} header={"Make it stand out"} content={"Add 5 or more photos plus a title and description we’ll help you out"} />
                    <ParagraphCreator icon={bed} number={3} header={"Finish up and publish"} content={"Choose if you'd like to start with an experienced guest, set a starting price, and publish your listing."} />
                </div>
            </section>
            <BottomBar btnTitle='Get Started' prevRoute={'become-a-host/overview'} nextRoute={"become-a-host/about-your-place"} />

        </div>
    );
}

export default HostingPage;