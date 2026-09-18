import { useGame } from "../Game/Logic"

export default function PlayArea() {
  const { setScore, randInt } = useGame()
  const holes = Array(9).fill(0)
  holes[randInt(0, 9)] = 1;
  return (
    <main>
      {holes.map((hole, i) => {
        return hole === 0
        ? <div key={i} className="hole" />
        : <div key={i} className="mole hole" onClick={() => setScore(prevScore => prevScore + 1)} />
      })}
    </main>
  )
}
