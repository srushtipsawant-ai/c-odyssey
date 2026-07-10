import {useState} from "react";


function RockPaperScissors({completeGame}){


const choices=[
"🪨 Rock",
"📄 Paper",
"✂️ Scissors"
];


const [result,setResult]=useState("");

const [computer,setComputer]=useState("");



function play(player){


const cpu =
choices[
Math.floor(Math.random()*3)
];


setComputer(cpu);



if(player===cpu){

setResult("Draw 😐 Try Again");

return;

}



const win =

(player==="🪨 Rock" && cpu==="✂️ Scissors") ||

(player==="📄 Paper" && cpu==="🪨 Rock") ||

(player==="✂️ Scissors" && cpu==="📄 Paper");



if(win){

setResult("You Win 🎉");


setTimeout(()=>{

completeGame(true);

},1200);


}

else{


setResult("Computer Wins ❌");


setTimeout(()=>{

completeGame(false);

},1200);


}


}




return(

<div className="content">


<h1>
ROCK PAPER SCISSORS
</h1>


<h2>
Computer: {computer}
</h2>


<h2>
{result}
</h2>



{

choices.map(choice=>(


<button

key={choice}

onClick={()=>play(choice)}

>

{choice}

</button>


))

}



</div>

);


}


export default RockPaperScissors;