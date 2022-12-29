import "./Level.css"

const Level = ({ levelProblems, levelSolutions }) => {
    let index = -1
    return (
        <div className="level-div">
            {levelProblems && levelProblems.map(question => {
                index++
                return (
                    <div className='box' key={question.id}>
                        <img src={question.problem} alt="description" />
                        <br />
                        <div className='answer-block' key={levelSolutions[index].id}>{levelSolutions[index].solution}</div>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default Level