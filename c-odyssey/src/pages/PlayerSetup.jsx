import { useState } from "react";

import {getPlayer,savePlayer} from "../engine/player";

function PlayerSetup({ startGame }) {

  const [playerName, setPlayerName] = useState("");

  function handleStart() {

    if(playerName.trim()===""){

      alert("Please enter your name.");

      return;

    }

    let player=getPlayer();

    player.name=playerName.trim();

    savePlayer(player);

localStorage.setItem(
"playerName",
playerName.trim()
);

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

      <br/><br/>

      <button

        onClick={handleStart}

      >

        BEGIN ADVENTURE

      </button>

    </div>

  );

}

export default PlayerSetup;