import { useState } from "react";
import Background from "./components/Background";
import Intro from "./pages/Intro";
import PlayerSetup from "./pages/PlayerSetup";

function App() {

  const [screen, setScreen] = useState("home");

  return (

    <div className="app">

      <Background />

      {screen === "home" && (

        <div className="content">

          <h1>C ODYSSEY</h1>

          <h2>Escape The Code Lab</h2>

          <p>
            The ultimate journey to master C programming.
            <br />
            Solve challenges. Unlock levels. Become a C Legend.
          </p>

          <button onClick={() => setScreen("intro")}>
            START JOURNEY
          </button>

        </div>

      )}

      {screen === "intro" && (
        <Intro startGame={() => setScreen("player")} />
      )}

      {screen === "player" && (
        <PlayerSetup startGame={() => setScreen("dashboard")} />
      )}

      {screen === "dashboard" && (

        <div className="content">

          <h1>Welcome</h1>

          <h2>{localStorage.getItem("playerName")}</h2>

          <p>
            Level 1
            <br />
            XP : 0
            <br />
            Coins : 100
            <br />
            ❤️❤️❤️❤️❤️
          </p>

          <button>
            START LEVEL 1
          </button>

        </div>

      )}

    </div>

  );

}

export default App;