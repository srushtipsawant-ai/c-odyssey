import {useState} from "react";

import games from "../data/games";

import RockPaperScissors from "../games/RockPaperScissors";
import TicTacToe from "../games/TicTacToe";


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



if(game==="tictactoe"){

return (

<TicTacToe
completeGame={completeGame}
/>

);

}



return (

<div className="content">

<h1>
Coming Soon
</h1>

</div>

);


}


export default GameManager;