import {useState} from "react";

import games from "../data/games";

import RockPaperScissors from "../games/RockPaperScissors";


function GameManager({completeGame}){


const [game] = useState(

games[
Math.floor(Math.random()*games.length)
]

);



if(game==="rock"){

return (

<RockPaperScissors
completeGame={completeGame}
/>

);

}



return (

<div className="content">

<h1>
Random Game Selected
</h1>

<h2>
{game}
</h2>

<p>
This game will be added soon 🎮
</p>

</div>

);


}


export default GameManager;