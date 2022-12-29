import './Description.css'
import { useState } from 'react'

const Description = () => {

    const [show, setShow] = useState(false)

    const descriptionHandler = () => {
        setShow(!show)
    }
    return (
        <div>
            <button onClick={descriptionHandler}>Popis hry a návod</button>
            {show && <div className='description-game'><span>WEBTECH 1 - Quiz</span> je veľmi jednoduchá hra založená na princípe <span>Drag and Drop</span>. Pod týmto si môžeme predstaviť doslovný preklad <span>Potiahni a Pusti</span>. Na začiatku hry si vyberieme náročnosť. V danej náročnosti sa nám vygenerujú otázky a intuitívne spájame, čo k sebe patrí.</div>}
        </div>
    )
}
export default Description 