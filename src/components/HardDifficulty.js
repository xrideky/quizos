import './HardDifficulty.css'
import { useState } from 'react'


const HardDifficulty = () => {

    const [show, setShow] = useState(false)

    const hardHandler = () => {
        console.log("click2")
        setShow(!show)
    }

    return (
        <div>
            <button onClick={hardHandler}>{show === true ? 'Ukončiť' : 'Ťažká obtiažnosť'}</button>
            {show && <div className='hard-div'>

            </div>}

        </div>
    )
}

export default HardDifficulty