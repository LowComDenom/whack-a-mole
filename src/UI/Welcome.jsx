import { useGame } from "../Game/Logic"

export default function Welcome() {
  const { highScores, startGame } = useGame()
  return (
    <div className="welcome" >
      <p>Welcome!</p>
      <p>Whack some moles to earn points and see your high scores.</p>
      <button onClick={() => startGame()}>Begin</button>
      <h3>High Scores</h3>
      <ul>
        {
          highScores.length > 0
          ? highScores.map((score, i) => { return <li key={i}>{score}</li> })
          : <p>No scores yet.</p>
        }
      </ul>
    </div>
  )
}
