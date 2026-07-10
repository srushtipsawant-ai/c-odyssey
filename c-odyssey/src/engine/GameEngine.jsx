import {useState} from "react";

import games from "../data/games";
import questions from "../data/questions";

import GameRegistry from "../games/GameRegistry";

import {
getPlayer,
savePlayer
} from "./player";



function randomItem(arr){

return arr[
Math.floor(Math.random()*arr.length)
];

}





function getQuestion(){


let history = JSON.parse(

localStorage.getItem("questionHistory")

) || [];



let available = questions.filter(

q=>!history.includes(q.id)

);





if(available.length===0){


history=[];


available=[...questions];


}



let selected=randomItem(available);



history.push(selected.id);



localStorage.setItem(

"questionHistory",

JSON.stringify(history)

);



return selected;


}









function GameEngine(){



const [player,setPlayer]=useState(
getPlayer()
);



const [stage,setStage]=useState(
"game"
);



const [message,setMessage]=useState("");



const [currentGame,setCurrentGame]=useState(
randomItem(games)
);



const [currentQuestion,setCurrentQuestion]=useState(
()=>getQuestion()
);








function updatePlayer(data){

setPlayer(data);

savePlayer(data);

}







function completeGame(result){



if(result){



setMessage(
"🎉 Game Completed"
);



setStage("result");



setTimeout(()=>{


setMessage("");

setStage("question");


},1200);



}



else{



let updated={...player};



updated.xp=Math.max(

0,

updated.xp-20

);



updatePlayer(updated);



setMessage(
"❌ Game Failed -20 XP"
);



setStage("result");



setTimeout(()=>{


setCurrentGame(
randomItem(games)
);


setMessage("");

setStage("game");


},1200);



}



}









function answerQuestion(option){



if(option===currentQuestion.answer){



let updated={...player};



updated.level+=1;

updated.xp+=100;

updated.coins+=10;



updatePlayer(updated);



setMessage(
"🏆 Level Up!"
);



setStage("result");



setTimeout(()=>{


setCurrentGame(
randomItem(games)
);



setCurrentQuestion(
getQuestion()
);



setMessage("");

setStage("game");



},1500);



}



else{


let updated={...player};



updated.xp=Math.max(

0,

updated.xp-20

);



updatePlayer(updated);



setMessage(
"❌ Wrong Answer -20 XP"
);



setStage("result");



setTimeout(()=>{


setMessage("");

setStage("question");


},1200);



}



}









function showGame(){


const SelectedGame=
GameRegistry[currentGame.id];



if(SelectedGame){


return(

<SelectedGame

completeGame={completeGame}

/>

);


}



return null;


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
&&
showGame()
}





{
stage==="question"
&&
showQuestion()
}





{
stage==="result"
&&

<div className="content">

<h1>
{message}
</h1>

</div>

}





</>

);


}


export default GameEngine;