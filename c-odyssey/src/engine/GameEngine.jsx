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


let used=JSON.parse(

localStorage.getItem("usedQuestions")

)||[];




let available=questions.filter(

q=>!used.includes(q.id)

);




if(available.length===0){


localStorage.removeItem("usedQuestions");


used=[];


available=[...questions];


}





let selected=randomItem(available);



// shuffle options here
let shuffledQuestion={

...selected,

options:shuffleArray(selected.options)

};





localStorage.setItem(

"usedQuestions",

JSON.stringify(

[

...used,

selected.id

]

)

);




return shuffledQuestion;



}









function GameEngine(){



const [player,setPlayer]=useState(
getPlayer()
);



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



setMessage(

"🟢 Correct Answer!"

);



}

else{



updated.xp=Math.max(

0,

updated.xp-20

);



setMessage(

"🔴 Wrong Answer!"

);



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





<h2>

Correct Answer:

{question.answer}

</h2>





<h3>

📚 Explanation:

</h3>



<p>

{question.explanation}

</p>







{

!showLesson &&


<button

onClick={()=>setShowLesson(true)}

>

📚 Learn this topic

</button>

}





{

showLesson &&


<div>



<h2>

{question.topic}

</h2>




<p

style={{

whiteSpace:"pre-line"

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


<div className="content">


<h2>

⭐ Level {player.level}

</h2>



<h2>

XP: {player.xp}

</h2>



<h2>

🪙 Coins: {player.coins}

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

showResult()

}





</>


);



}



export default GameEngine;