import React from 'react';
import ParagraphCreator from '../../Components/Common/ParagraphCreator/ParagraphCreator';
import bed from '../../Assets/images/bed.png'

const HostingPage = () => {

    return (
        <div className='flex flex-col w-screen h-screen'>
            <header className=' w-full flex justify-between items-center p-5 px-20'>
                <h1>A</h1>
                <button className='border p-2 rounded-full border-gray-600'>Save and Exit</button>
            </header>
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

        </div>
    );
}

export default HostingPage;