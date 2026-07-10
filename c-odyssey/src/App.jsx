import { useState } from "react";

import Background from "./components/Background";

import Intro from "./pages/Intro";
import PlayerSetup from "./pages/PlayerSetup";
import Dashboard from "./pages/Dashboard";

import RockPaperScissors from "./games/RockPaperScissors";


function App(){

const [screen,setScreen]=useState("home");


return(

<div className="app">

<Background/>


{screen==="home" &&

<div className="content">

<h1>
C ODYSSEY
</h1>

<h2>
Escape The Code Lab
</h2>

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
goToMap={()=>setScreen("game1")}
/>

}



{screen==="game1" &&

<RockPaperScissors
completeGame={()=>setScreen("quiz1")}
/>

}



{screen==="quiz1" &&

<div className="content">

<h1>
C CHALLENGE
</h1>

<h2>
What keyword stores integer values?
</h2>

<button>
int
</button>

<button>
float
</button>

<button>
char
</button>


</div>

}



</div>

)

}


export default App;