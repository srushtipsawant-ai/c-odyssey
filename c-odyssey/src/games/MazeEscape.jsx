import {useState} from "react";


function MazeEscape({completeGame}){


const [moves,setMoves]=useState(0);



function move(){


let m=moves+1;


setMoves(m);



if(m>=5){


completeGame(true);


}



}





return(

<div className="content">


<h1>
MAZE ESCAPE
</h1>


<h2>
Moves: {moves}/5
</h2>


<button onClick={move}>

MOVE

</button>



</div>

);


}


export default MazeEscape;