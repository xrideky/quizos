import './EasyDifficulty.css'
import { useState } from 'react'
import EasyLevels from '../easyLevels.json'
//import _ from 'lodash'


const EasyDifficulty = () => {

    const [show, setShow] = useState(false)

    const easyHandler = () => {
        console.log("click");
        setShow(!show)
    }


    return (
        <div>

            <button onClick={easyHandler}>{show === true ? 'Ukončiť' : 'Ľahká obtiažnosť'}</button>
            {show && <div className='easy-div'>
                {EasyLevels && EasyLevels.map(easyLevel => {
                    return (
                        <div className='box' key={easyLevel.id}>
                            <img src={easyLevel.problem} alt="description" />
                            <br />
                            <div className='answer-block'>{easyLevel.solution}</div>

                        </div>
                    )
                })}
            </div>}
        </div>
    )
}
export default EasyDifficulty