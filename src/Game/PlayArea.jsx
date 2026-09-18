import { useGame } from "../Game/Logic"

export default function PlayArea() {
  const { setScore } = useGame()
  const holes = Array.from({ length: 9 }, (v, i) => i);
  // final version: randomly choose a hole to add a mole element to
  return (
    <main>
      {holes.map((hole) => {
        return (
          <div key={hole} className="mole hole" onClick={() => setScore(prevScore => prevScore + 1)} />
        )
      })}
    </main>
  )
}
