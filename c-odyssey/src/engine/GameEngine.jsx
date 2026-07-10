import {useState} from "react";

import games from "../data/games";
import questions from "../data/questions";

import GameRegistry from "../games/GameRegistry";

import {
getPlayer,
savePlayer
} from "./player";


function randomItem(array){

return array[
Math.floor(Math.random()*array.length)
];

}



function GameEngine(){


const [player,setPlayer]=useState(getPlayer());


const [stage,setStage]=useState("game");


const [currentGame,setCurrentGame]=useState(
randomItem(games)
);


const [currentQuestion,setCurrentQuestion]=useState(
randomItem(questions)
);



function updatePlayer(updated){

setPlayer(updated);

savePlayer(updated);

}




function completeGame(result){



if(result===true){


setStage("question");


}

else{


let updated={...player};


updated.xp=Math.max(
0,
updated.xp-20
);


updatePlayer(updated);


alert("Game Failed ❌ XP -20");


setCurrentGame(
randomItem(games)
);


}


}





function nextLevel(){


let updated={...player};


updated.level +=1;

updated.xp +=100;

updated.coins +=10;



updatePlayer(updated);



setCurrentGame(
randomItem(games)
);



setCurrentQuestion(
randomItem(questions)
);



setStage("game");



}





function answerQuestion(option){



if(option===currentQuestion.answer){


alert("Correct 🎉");


nextLevel();


}

else{


let updated={...player};


updated.xp=Math.max(
0,
updated.xp-20
);



updatePlayer(updated);



alert("Wrong Answer ❌ XP -20");


}


}





function showGame(){


const SelectedGame =
GameRegistry[currentGame.id];



if(SelectedGame){


return(

<SelectedGame

completeGame={completeGame}

/>

);


}



return(

<div className="content">


<h1>
{currentGame.name}
</h1>


<button

onClick={()=>completeGame(true)}

>

Continue

</button>


</div>

);


}





function showQuestion(){


return(

<div className="content">


<h1>
C CHALLENGE
</h1>


<h2>
{currentQuestion.question}
</h2>



{

currentQuestion.options.map(option=>(


<button

key={option}

onClick={()=>answerQuestion(option)}

>

{option}

</button>


))

}



</div>

);


}




return(

<>


<div className="content">


<h2>
⭐ Level {player.level}
</h2>


<h2>
XP : {player.xp}
</h2>


<h2>
🪙 Coins : {player.coins}
</h2>


</div>



{

stage==="game"

?

showGame()

:

showQuestion()

}



</>


);


}


export default GameEngine;