export default function Welcome({ setScreen }) {
  return (
    <div className="welcome" >
      <p>Welcome!</p>
      <p>Whack some moles to earn points and see your high scores.</p>
      <button onClick={()=>setScreen("game")}>Begin</button>
    </div>
  )
}