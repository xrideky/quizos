import './EasyDifficulty.css'
import { useState } from 'react'
import Level from './Level'

const EasyDifficulty = (easyLevels) => {

    const [show, setShow] = useState(false)
    const [level, setLevel] = useState(0)
    const [modalShow, setModalShow] = useState(false)

    const easyHandler = () => {
        console.log("click");
        setLevel(0)
        setShow(!show)
    }

    const nextLevel = () => {
        if (level === 4) {
            console.log("KONEC")
            const btn = document.getElementById("nextLevelBtn");
            btn.style.display = "none";
            return (
                setModalShow(!modalShow)
            )
        }
        console.log("PRED setLevel" + level)
        setLevel(level + 1)
        console.log("PO setLevel" + level)
    }

    /* 
        easyDifficulty bude obsahovat 5 Levelov (zvlast komponent)
        kazdy level(komponent) bude mat v sebe questions s odpovedami nahodne poprehadzovane
    */

    const levelProblems = [...easyLevels.easyLevels[level].level]
    const levelSolutions = [...easyLevels.easyLevels[level].level]


    /*  zober prvy level
        prejdi jeho problems a naladuj ich do pola levelProblems
        prejdi jeho solutions a naladuj ich do pola levelSolutions
        shuffle na obe polia    
    */

    shuffleArray(levelProblems)
    shuffleArray(levelSolutions)
    console.log(levelProblems)
    console.log(levelSolutions)
    return (
        /*  prejdi pole levelProblems a vykresli problems 
            prejdi pole levelSolutions a vykresli solutions
        */
        <div>
            <button onClick={easyHandler}>{show === true ? 'Ukončiť' : 'Ľahká obtiažnosť'}</button>
            {show && <div className='easy-div'>
                <Level levelProblems={levelProblems} levelSolutions={levelSolutions} />
                <div className='next-level'>
                    <button onClick={nextLevel} id="nextLevelBtn" >Ďalší level</button>
                </div>
                {modalShow && <div className='end-div'>
                    <h3>KONIEC HRY</h3>
                </div>
                }
            </div>}
        </div>
    )
}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
export default EasyDifficulty