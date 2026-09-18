import { useGame } from "../Game/Logic"

export default function PlayArea() {
  const { setScore, randInt } = useGame()
  const holes = Array(9).fill(0)
  holes[randInt(0, 8)] = 1;
  return (
    <main>
      {holes.map((hole, i) => {
        if (hole === 0) return <div key={i} className="hole" />
        else return <div key={i} className="mole hole" onClick={() => setScore(prevScore => prevScore + 1)} />
      })}
    </main>
  )
}
