import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAsyncStracture } from '../../Features/StructureSlice/StructureSlice';
import Header from '../Header/Header';
import SliceStructure from './SliceOfStructurees';
import { addPlaceType } from '../../Features/vacationDataSlice/vacationDataSlice';
import BottomBar from '../BottomBar/BottomBar';
import Loader from '../Loader/Loader';

const Structure = () => {
    const AllStructures = useSelector(state => state.stractures)
    const dispatch = useDispatch()
    const { loading, error, stracture } = AllStructures
    // const [structreData, setStructreData] = useState([])

    useEffect(() => {

        dispatch(getAsyncStracture())
        // setStructreData(stracture)

    }, []);



    const setStructures = (id) => {
        const findPlaceType = stracture.find(item => item.stID === id)
        dispatch(addPlaceType(findPlaceType))



    }



    if (loading) return <Loader />
    if (error) return <p>{error}</p>
    console.log("done");
    if (!error && !loading && stracture) return (
        <div className='flex flex-col h-screen w-screen '>
            <Header />
            <div>
                <h1>Which of these best describes your place?</h1>
            </div>
            <div className='flex flex-wrap justify-around'>
                {stracture &&
                    stracture.map(p => (
                        <SliceStructure {...p} clickHandler={setStructures} />
                    ))
                }
            </div>
            <BottomBar prevRoute={"become-a-host/about-your-place"} nextRoute={""} />
        </div >
    );
}

export default Structure;
