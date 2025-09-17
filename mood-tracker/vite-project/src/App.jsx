import { useState } from 'react'
import './App.css'

function App() {
  const [mood, setMood] = useState(null)

  const handleMoodClick = (emoji) => {
    setMood(emoji)
    console.log("Selected mood:", emoji)
  }

  return (
    <div style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <h1>Mood Tracker</h1>

      <div style={{ fontSize: "2rem", marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
        <button onClick={() => handleMoodClick("🙂")}>🙂</button>
        <button onClick={() => handleMoodClick("😐")}>😐</button>
        <button onClick={() => handleMoodClick("😢")}>😢</button>
        <button onClick={() => handleMoodClick("😡")}>😡</button>
        <button onClick={() => handleMoodClick("😍")}>😍</button>
      </div>
      
    </div>
  )
}

export default App
