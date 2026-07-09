import { useState } from "react";
import Background from "./components/Background";
import Intro from "./pages/Intro";


function App() {


const [screen,setScreen]=useState("home");



return (

<div className="app">


<Background />


{

screen==="home" &&

<div className="content">


<h1>
C ODYSSEY
</h1>


<h2>
Escape The Code Lab
</h2>


<p>
The ultimate journey to master C programming.
<br/>
Solve challenges. Unlock levels. Become a C Legend.
</p>


<button onClick={()=>setScreen("intro")}>

START JOURNEY

</button>


</div>

}



{

screen==="intro" &&

<Intro startGame={()=>setScreen("game")}/>

}


{

screen==="game" &&

<div className="content">

<h1>
COMING SOON...
</h1>

<p>
The Code Lab awaits.
</p>

</div>

}



</div>

);


}


export default App;