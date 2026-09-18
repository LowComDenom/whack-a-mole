import { useGame } from "./Game/Logic"
import Welcome from "./UI/Welcome"
import GameScreen from "./UI/GameScreen"

export default function App() {
  const { screen } = useGame()
  return (
    <div className="container">
      <h1>Whack a Mole</h1>
      {screen === "welcome" ? <Welcome /> : <></>}
      {screen === "game" ? <GameScreen /> : <></>}
    </div>
  )
}
