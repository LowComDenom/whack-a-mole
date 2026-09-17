import { useState } from "react"
import Welcome from "./UI/Welcome"
import Game from "./UI/Game"

export default function App() {
  const [screen, setScreen] = useState("welcome")
  return (
    <div className="container">
      <h1>Whack a Mole</h1>
      {screen === "welcome" ? (<Welcome setScreen={setScreen} />) : <></>}
      {screen === "game" ? (<Game setScreen={setScreen} />) : <></>}
    </div>
  )
}
