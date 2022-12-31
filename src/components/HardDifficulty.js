import './HardDifficulty.css'
import { useState } from 'react'
import HardLevel from './HardLevel'


const HardDifficulty = (hardLevels) => {

    const [show, setShow] = useState(false)
    const [level, setLevel] = useState(0)
    const [modalShow, setModalShow] = useState(false)

    const hardHandler = () => {
        console.log("click2")
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
        setLevel(level + 1)

    }

    const levelProblems = [...hardLevels.hardLevels[level].level]
    const levelSolutions = [...hardLevels.hardLevels[level].level]

    shuffleArray(levelProblems)
    shuffleArray(levelSolutions)
    console.log(levelProblems)
    console.log(levelSolutions)

    return (
        <div>
            <button onClick={hardHandler}>{show === true ? 'Ukončiť' : 'Ťažká obtiažnosť'}</button>
            {show && <div className='hard-div'>
                <HardLevel levelProblems={levelProblems} levelSolutions={levelSolutions} />
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

export default HardDifficulty