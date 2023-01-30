
import style from './SliceOfStructurees.module.css'


const SliceStructure = (props) => {

    const chekStructureHandler = (id) => {
        props.clickHandler(id)
    }


    return (
        <div onClick={() => chekStructureHandler(props.stID)} className={`${style.container} flex flex-col justify-center px-2 flex-1 max-w-[40%] min-w-[40%] h-24  border-gray-300 border-2 rounded-[8px] mt-10`}>
            <img src={props.icon} alt="" />
            <h1 className='px-2 mt-2'>{props.title}</h1>
        </div>
    );
}

export default SliceStructure;