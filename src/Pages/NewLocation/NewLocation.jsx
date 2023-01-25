import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncVacationsData } from "../../Features/VacationSlice/VacationSlice";
import Loader from "../../Components/Loader/Loader";
import style from './NewLocation.module.css'
import { getAsyncHosts, getAsyncHostsOffers } from "../../Features/HostSlice/HostSlice";
import { useFormik } from "formik";
import * as Yup from 'yup'
import FormInput from "../../Components/Common/FormInput";
import ToggleButtun from "../../Components/Common/ToggleButton/ToggleButton";
import axios from "axios";
import Api from "../../Api/Api";




export default function NewLocation() {
    const allVacations = useSelector(state => state.vacationsData)
    const Hosts = useSelector(state => state.hosts)
    const placesOffers = useSelector(state => state.placeOffers)
    const dispatch = useDispatch()
    const { loading, error, vacations } = allVacations
    const { hosts } = Hosts
    const { placeOffers } = placesOffers

    const [offers, setOffers] = useState([])




    const validationSchema = Yup.object({
        title: Yup.string().required("Title is Required!").min(5),
        price: Yup.number("Price must be a number").required("Price is Required!").positive().integer()

    })

    const onSubmit = () => { }
    const formik = useFormik({
        initialValues: {
            title: "",
            price: "",
            placeOffers
        },
        onSubmit,
        validationSchema
    })



    const [hostLocation, setHostLocation] = useState('')
    const [locationType, setLocationType] = useState('')

    //All Data We Need

    const [showForm, setShowForm] = useState(false)


    useEffect(() => {
        dispatch(getAsyncVacationsData())
        dispatch(getAsyncHosts())
        dispatch(getAsyncHostsOffers())
        setOffers(placeOffers)

    }, [])


    const chekStatus = (ID) => {
        const copyOfferArr = [...offers]
        const index = offers.findIndex(item => item.offerID === ID)
        const newOffer = JSON.parse(JSON.stringify(copyOfferArr))
        newOffer[index].isAvailaible = !newOffer[index].isAvailaible
        return setOffers(newOffer)
    }




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
                        <div key={v.vacationID} onClick={() => setHostLocation(v.location)} className={`${style.vac} " w-[20rem] h-[20rem] mx-3 my-3`}>
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
            {showForm && (
                <form onSubmit={formik.handleSubmit} className=" flex flex-col justify-start w-1/2 h-1/2">
                    <FormInput label="What is your host title?" name="title" formik={formik} />
                    <FormInput label="price per night" name="price" formik={formik} />

                    <div className="box grid grid-cols-2 w-6/6">
                        {offers.map(offer => (
                            <>
                                <div key={offer.offerID} className="flex bg-white mx-2 my-2 rounded-md justify-between p-4" >
                                    <div cl>
                                        <h1>{offer.title}</h1>
                                    </div>
                                    <ToggleButtun label={offer.title} onClick={() => chekStatus(offer.offerID)} />
                                </div>
                            </>
                        ))}
                    </div>
                    <button type="submit">submit</button>
                </form>
            )}


        </div >
    );
}
