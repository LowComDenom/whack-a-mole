import { createContext, useContext, useState } from "react";
const Game = createContext()

export function GameProvider({ children }) {
  const [screen, setScreen] = useState("welcome")
  const [score, setScore] = useState(0)
  const [timer, setTimer] = useState(15)
  const [highScores, setHighScores] = useState([])

  function randInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }

  // if timer === 0 or restart is clicked

  function endGame() {
    const currentScore = score
    let newHighScores = [...highScores, currentScore]
    newHighScores.sort((a, b) => b - a)
    const topFive = newHighScores.slice(0, 5)
    setHighScores(topFive)
    setScore(0)
    setScreen("welcome")
  }

  // if play button is clicked

  function startGame() {
    setTimer(15)
    setScreen("game")
  }

  const value = { randInt, screen, setScreen, startGame, endGame, score, setScore, timer, highScores }
  return <Game.Provider value={value}>{children}</Game.Provider>
}

export function useGame() {
  const context = useContext(Game)
  if (!context) {
    throw Error("useGame must be used within Game.Provider")
  }
  return context
}
