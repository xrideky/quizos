import EasyDifficulty from "./components/EasyDifficulty"
import HardDifficulty from "./components/HardDifficulty"

const App = () => {
  return (
    <div className='content'>
      <h1>WEBTECH 1 - QUIZ</h1>
      <EasyDifficulty />
      <HardDifficulty />
    </div>
  )
}

export default App