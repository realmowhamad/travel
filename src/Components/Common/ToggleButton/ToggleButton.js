import { useState } from 'react'
import style from './ToggleButton.module.css'

const ToggleButtun = (props) => {
    // const [isToggled, toggle] = useState(isAvailable)
    // console.log("ISSSS : ", isAvailable);
    // const callback = () => {
    //     toggle(!isToggled)
    //     click(!toggle)



    // }

    const porn = () => {
        props.onClick()
    }

    return (
        <label className={style.toggleLabel}>
            <input className={style.toggleInput} type="checkbox" onClick={porn} />
            <span className={style.toggleSpan} />
        </label>

    )
}

export default ToggleButtun