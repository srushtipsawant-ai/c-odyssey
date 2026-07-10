import { useState } from "react";
import Background from "./components/Background";
import Intro from "./pages/Intro";
import PlayerSetup from "./pages/PlayerSetup";
import Dashboard from "./pages/Dashboard";
import Quiz from "./pages/Quiz";


function App(){

const [screen,setScreen]=useState("home");


return(

<div className="app">

<Background/>


{screen==="home" &&

<div className="content">

<h1>C ODYSSEY</h1>

<h2>Escape The Code Lab</h2>

<p>
Master C programming through challenges.
</p>

<button onClick={()=>setScreen("intro")}>
START JOURNEY
</button>

</div>

}



{screen==="intro" &&

<Intro startGame={()=>setScreen("player")}/>

}



{screen==="player" &&

<PlayerSetup startGame={()=>setScreen("dashboard")}/>

}



{screen==="dashboard" &&

<Dashboard goToMap={()=>setScreen("quiz")}/>

}



{screen==="quiz" &&

<Quiz finishLevel={()=>alert("LEVEL COMPLETE 🎉")}/>

}


</div>

)

}

export default App;