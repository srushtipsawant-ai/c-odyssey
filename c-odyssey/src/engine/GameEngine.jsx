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



function shuffleArray(arr){

return [...arr].sort(
()=>Math.random()-0.5
);

}



function getQuestion(){

let pool=JSON.parse(

localStorage.getItem("questionPool")

);



if(!pool || pool.length===0){

pool=shuffleArray(

questions.map(q=>q.id)

);

localStorage.setItem(

"questionPool",

JSON.stringify(pool)

);

}



let id=pool.shift();

localStorage.setItem(

"questionPool",

JSON.stringify(pool)

);



let q=questions.find(

x=>x.id===id

);



return{

...q,

options:shuffleArray(q.options)

};

}





function GameEngine(){



const [player,setPlayer]=useState(getPlayer());
const playerName =
JSON.parse(
localStorage.getItem("cOdysseyPlayer")
)?.name || "Player";



const [stage,setStage]=useState(

"game"

);



const [game,setGame]=useState(

randomItem(games)

);



const [question,setQuestion]=useState(

getQuestion()

);



const [message,setMessage]=useState("");



const [showLesson,setShowLesson]=useState(false);





function updatePlayer(data){

setPlayer(data);

savePlayer(data);

}






function completeGame(result){

if(result){

setStage("question");

}

else{

let updated={...player};

updated.xp=Math.max(

0,

updated.xp-20

);

updatePlayer(updated);

setStage("question");

}

}






function answerQuestion(option){

let updated={...player};



if(option===question.answer){

updated.level+=1;

updated.xp+=100;

updated.coins+=10;

setMessage("🟢 Correct Answer!");

}

else{

updated.xp=Math.max(

0,

updated.xp-20

);

setMessage("🔴 Wrong Answer!");

}



updatePlayer(updated);

setStage("result");

}







function continueNext(){

setQuestion(

getQuestion()

);

setGame(

randomItem(games)

);

setShowLesson(false);

setMessage("");

setStage("game");

}







function showGame(){

const SelectedGame=

GameRegistry[game.id];



if(!SelectedGame){

return null;

}



return(

<SelectedGame

completeGame={completeGame}

/>

);

}







function showQuestion(){

return(

<div className="content">

<h1>
C CHALLENGE
</h1>



<h2>

{question.question}

</h2>

{

question.options.map(option=>(

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
function showResult(){

return(

<div className="content">

<h1>

{message}

</h1>



{

message==="🟢 Correct Answer!"

?

<h2 style={{color:"#4CAF50"}}>

🎉 Great job!

</h2>

:

<h2 style={{color:"#ff4d4d"}}>

❌ Better luck next time!

</h2>

}



<h2>

Correct Answer:

</h2>

<h3>

{question.answer}

</h3>



<h3>

📚 Explanation

</h3>

<p>

{question.explanation}

</p>



{

!showLesson &&

<button

onClick={()=>setShowLesson(true)}

>

📖 Learn this Topic

</button>

}



{

showLesson &&

<div

style={{

marginTop:"20px",

padding:"15px",

border:"2px solid #ffffff33",

borderRadius:"10px",

background:"#111"

}}

>

<h2>

📚 {question.topic}

</h2>

<p

style={{

whiteSpace:"pre-line",

textAlign:"left"

}}

>

{question.lesson}

</p>

<button

onClick={()=>setShowLesson(false)}

>

⬅ Back

</button>

</div>

}



{

!showLesson &&

<button

onClick={continueNext}

>

Continue 🎮

</button>

}

</div>

);

}





return(


<>

<div
style={{
position:"fixed",
left:"20px",
top:"20px",
width:"200px",
padding:"15px",
background:"#111",
border:"2px solid #ffffff33",
borderRadius:"15px",
zIndex:1000,
textAlign:"left"
}}
>

<h3>
👤 {
JSON.parse(localStorage.getItem("cOdysseyPlayer"))?.name || "Player"
}
</h3>

<p>
⭐ Level: {player.level}
</p>

<p>
✨ XP: {player.xp}
</p>

<p>
🪙 Coins: {player.coins}
</p>

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
showResult()
}


</>

);

}



export default GameEngine;