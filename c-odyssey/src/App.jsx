import { useState } from "react";

import Background from "./components/Background";

import Intro from "./pages/Intro";
import PlayerSetup from "./pages/PlayerSetup";
import Dashboard from "./pages/Dashboard";
import CChallenge from "./pages/CChallenge";
import GameManager from "./pages/GameManager";


function App(){

const [screen,setScreen]=useState("home");


return(

<div className="app">

<Background/>


{screen==="home" &&

<div className="content">

<h1>C ODYSSEY</h1>

<h2>Escape The Code Lab</h2>

<button
onClick={()=>setScreen("intro")}
>
START JOURNEY
</button>

</div>

}



{screen==="intro" &&

<Intro
startGame={()=>setScreen("player")}
/>

}



{screen==="player" &&

<PlayerSetup
startGame={()=>setScreen("dashboard")}
/>

}



{screen==="dashboard" &&

<Dashboard
goToMap={()=>setScreen("game")}
/>

}



{screen==="game" &&

<GameManager
completeGame={()=>setScreen("quiz")}
/>

}



{screen==="quiz" &&

<CChallenge
completeLevel={()=>setScreen("game")}
/>

}



</div>

)

}


export default App;