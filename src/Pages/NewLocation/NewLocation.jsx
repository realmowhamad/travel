import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncVacationsData } from "../../Features/VacationSlice/VacationSlice";
import Loader from "../../Components/Loader/Loader";
import style from './NewLocation.module.css'
import { getAsyncHosts } from "../../Features/HostSlice/HostSlice";



export default function NewLocation() {
    const allVacations = useSelector(state => state.vacationsData)
    const Hosts = useSelector(state => state.hosts)
    const dispatch = useDispatch()

    //All Data We Need
    const [showForm, setShowForm] = useState(false)
    const [hostLocation, setHostLocation] = useState('')
    const [locationType, setLocationType] = useState('')


    const { loading, error, vacations } = allVacations
    const { hosts } = Hosts
    useEffect(() => {
        dispatch(getAsyncVacationsData())
        dispatch(getAsyncHosts())


    }, [])


    useEffect(() => {
        { locationType && setShowForm(true) }
    }, [locationType])





    if (loading) return (
        <div className="flex items-center justify-center w-full">
            <Loader />
        </div>
    )
    if (error) return <p>{error}</p>

    return (
        <div className="flex-grow px-5 flex items-center flex-col">
            {hostLocation.length === 0 && (<>
                <div className={`${style.header} my-10 p-10  w-1/2`}>
                    <h3>Where do you want to host your experience in?</h3>
                </div>
                <div className="mx-auto relative flex items-center justify-center sm:justify-start flex-wrap ">
                    {vacations.map(v => (
                        <div key={v.vacationID} value={v.location} onClick={() => setHostLocation(v.location)} className={`${style.vac} " w-[20rem] h-[20rem] mx-3 my-3`}>
                            <img src={v.image} alt="x" className="w-50 h-10" />
                            <div className={`${style.title}`}>
                                <h3 className="text-white text-2xl" >{v.location}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </>)}
            {hostLocation && !showForm && <>
                <div className={`${style.header} my-10 p-10  w-1/2`}>
                    <h3>What is your host type?</h3>
                </div>
                <div className="mx-auto relative flex items-center justify-center sm:justify-start flex-wrap ">
                    {hosts.map(host => (
                        <div key={host.id} value={host.title} onClick={() => setLocationType(host.title)} className={`${style.vac} " w-[20rem] h-[20rem] mx-3 my-3`}>
                            <img src={host.image} alt="x" className="w-50 h-10" />
                            <div className={`${style.title}`}>
                                <h3 className="text-white text-2xl" >{host.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </>
            }
            {showForm && <p>heloooo</p>}


        </div >
    );
}
