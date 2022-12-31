import EasyDifficulty from "./components/EasyDifficulty"
import HardDifficulty from "./components/HardDifficulty"
import EasyLevels from "./easyLevels.json"
import HardLevels from "./hardLevels.json"
import Description from "./components/Description"

const App = () => {
  const easyLevels = [...EasyLevels.Levels]
  shuffleArray(easyLevels)
  console.log(easyLevels)

  const hardLevels = [...HardLevels.Levels]
  shuffleArray(hardLevels)
  return (
    <div className='content'>
      <h1>WEBTECH 1 - QUIZ</h1>
      <Description />
      <EasyDifficulty easyLevels={easyLevels} />
      <HardDifficulty hardLevels={hardLevels} />
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

export default App