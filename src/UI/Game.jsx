import Welcome from "./Welcome";

export default function Game({ setScreen }) {
  return (
    <nav>
      <span>Score: 0</span>
      <span>Timer: 15</span>
      <span><button onClick={() => setScreen("welcome")}>Restart</button></span>
    </nav>
  )
}
