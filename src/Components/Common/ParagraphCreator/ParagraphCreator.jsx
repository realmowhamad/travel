import style from './ParagraphCreator.module.css'



export default function ParagraphCreator({ number, header, content, icon = null }) {
    return (
        <div className={`${style.container} w-full flex pb-[40px] px-0 lg:w-4/6 lg:h-3/6 `}>
            <div className={`${style.number} text-[18px] font-bold  flex items-start justify-start mr-2`}>
                {number}
            </div>
            <div className={`${style.content} flex-1 pt-0 pb-10 border-b  `}>
                <h1 className='text-[18px] font-sfsBold'>{header}</h1>
                <p className='text-[14px] font-normal text-stone-400'>
                    {content}
                </p>
            </div>
            <div className={`${style.icon} w-2/6 flex item-center justify-center`} >
                <img src={icon} alt="" className='w-6/6' />
            </div>



        </div>
    )
}
