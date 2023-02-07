import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAsyncStracture } from '../../Features/StructureSlice/StructureSlice';
import Header from '../Header/Header';
import SliceStructure from './SliceOfStructurees';
import { addPlaceType, placeTypeStatus } from '../../Features/vacationDataSlice/vacationDataSlice';
import BottomBar from '../BottomBar/BottomBar';
import Loader from '../Loader/Loader';

const Structure = () => {
    const AllStructures = useSelector(state => state.stractures)
    const dispatch = useDispatch()
    const { loading, error, stracture } = AllStructures

    const [isSelected, setIsSelected] = useState(false)

    useEffect(() => {

        dispatch(getAsyncStracture())

    }, []);



    const setStructures = (id) => {
        const findPlaceType = stracture.find(item => item.stID === id)
        console.log(findPlaceType);
        dispatch(addPlaceType(findPlaceType))

    }



    if (loading) return <Loader />
    if (error) return <p>{error}</p>

    if (!error && !loading && stracture) return (
        <div className='flex flex-col h-screen w-screen '>
            <Header />
            <div className='p-5 '>
                <h1 className='tracking-wider leading-tight font-sfsBold text-[26px]'>Which of these best describes your place?</h1>
            </div>

            <div className='  grid grid-cols-2  md:grid-cols-3 lg:w-1/2 items-center justify-center mx-auto'>
                {stracture &&
                    stracture.map(p => (
                        <>
                            < SliceStructure key={p.id} {...p} clickHandler={setStructures} isSelected={isSelected} />
                        </>
                    ))
                }
            </div>

            <BottomBar prevRoute={"become-a-host/about-your-place"} nextRoute={"become-a-host/privacy-type"} />
        </div >
    );
}

export default Structure;
