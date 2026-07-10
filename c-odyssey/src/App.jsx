import { useState } from "react";

import Background from "./components/Background";

import Intro from "./pages/Intro";
import PlayerSetup from "./pages/PlayerSetup";
import Dashboard from "./pages/Dashboard";

import GameEngine from "./engine/GameEngine";
import {getPlayer, resetPlayer} from "./engine/player";


function App(){


const [screen,setScreen]=useState("home");



return(

<div className="app">


<Background />



{screen==="home" &&

<div className="content">


<h1>
C ODYSSEY
</h1>


<h2>
Escape The Code Lab
</h2>


<p>
Master C Programming Through Games
</p>



<button

onClick={()=>{

resetPlayer();

setScreen("intro");

}}

>

NEW GAME

</button>



<br/><br/>



<button

onClick={()=>{


const player=getPlayer();


if(player){

setScreen("dashboard");

}


}}

>

CONTINUE JOURNEY

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

<GameEngine />

}



</div>

)


}


export default App;