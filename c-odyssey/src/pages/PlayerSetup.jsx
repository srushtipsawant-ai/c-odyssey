import { useState } from "react";

function PlayerSetup({ startGame }) {

  const [playerName, setPlayerName] = useState("");

  function handleStart() {

    if (playerName.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    localStorage.setItem("playerName", playerName);

    startGame();

  }

  return (

    <div className="content">

      <h1>Create Player</h1>

      <p>
        Enter your explorer name
      </p>

      <input
        type="text"
        placeholder="Your Name"
        value={playerName}
        onChange={(e)=>setPlayerName(e.target.value)}
      />

      <br />

      <button onClick={handleStart}>
        BEGIN ADVENTURE
      </button>

    </div>

  );

}

export default PlayerSetup;