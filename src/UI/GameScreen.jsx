import { useGame } from "../Game/Logic"
import PlayArea from "../Game/PlayArea"

export default function GameScreen() {
  const { score, timer, endGame } = useGame()

  return (
    <div className="game">
      <nav>
        <span>Score: {score}</span>
        <span>Timer: {timer}</span>
        <span><button onClick={() => endGame()}>Restart</button></span>
      </nav>
      <PlayArea />
    </div>
  )
}
