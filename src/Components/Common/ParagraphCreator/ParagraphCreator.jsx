import style from './ParagraphCreator.module.css'



export default function ParagraphCreator({ number, header, content, icon = null }) {
    return (
        <div className={`${style.container} w-5/6 `}>
            <div className={`${style.number} text-2xl  flex items-start justify-center`}>
                {number}
            </div>
            <div className={`${style.content} pb-24`}>
                <h1 className='text-xl font-medium'>{header}</h1>
                <p className='text-lg font-normal'>
                    {content}
                </p>
            </div>
            <div className={style.icon}>
                <img src={icon} alt="" />
            </div>



        </div>
    )
}
