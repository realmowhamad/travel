
import { useState } from 'react'
import style from './SliceOfStructurees.module.css'
import { useDispatch, useSelector } from 'react-redux'



const SliceStructure = (props) => {
    // const [isActive, setisActive] = useState(false)

    const selectedItem = useSelector(state => state.vacationStateData.placeType)






    const chekStructureHandler = (id) => {
        props.clickHandler(id)



    }
    // ${ isActive ? "border border-3 border-red-500" : "" }

    return (
        <div onClick={() => chekStructureHandler(props.stID)} className={`${style.container} flex flex-col justify-center px-2 w-[90%] mx-auto h-24  border-gray-300 border-2 rounded-[8px] mt-10 ${selectedItem.stID === props.stID ? "border-2 border-gray-500 bg-gray-100 " : ""}`}>
            <img src={props.icon} alt="" className='md:w-[25%]' />
            <h1 className='px-2 mt-2'>{props.title}</h1>
        </div>
    );
}

export default SliceStructure;