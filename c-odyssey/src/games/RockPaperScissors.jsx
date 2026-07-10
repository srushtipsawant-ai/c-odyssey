import {useState} from "react";


function RockPaperScissors({completeGame}){


const choices=[

"🪨 Rock",

"📄 Paper",

"✂️ Scissors"

];



const [playerScore,setPlayerScore]=useState(0);

const [computerScore,setComputerScore]=useState(0);

const [message,setMessage]=useState(
"Choose your move"
);



function play(player){



const cpu =
choices[
Math.floor(Math.random()*choices.length)
];



let p=playerScore;

let c=computerScore;



if(player===cpu){


setMessage(
`Draw! Computer chose ${cpu}`
);


return;


}



let win =

(player==="🪨 Rock" && cpu==="✂️ Scissors") ||

(player==="📄 Paper" && cpu==="🪨 Rock") ||

(player==="✂️ Scissors" && cpu==="📄 Paper");





if(win){


p++;


setPlayerScore(p);


setMessage(
`You win round! Computer chose ${cpu}`
);



}

else{


c++;


setComputerScore(c);


setMessage(
`You lose round! Computer chose ${cpu}`
);


}






if(p===2){


setTimeout(()=>{


completeGame(true);


},1000);


}



if(c===2){


setTimeout(()=>{


completeGame(false);


},1000);


}




}





return(

<div className="content">


<h1>
ROCK PAPER SCISSORS
</h1>


<h2>
You: {playerScore} - {computerScore} : CPU
</h2>


<h3>
{message}
</h3>



{

choices.map(c=>(


<button

key={c}

onClick={()=>play(c)}

>

{c}

</button>


))

}



</div>

);


}


export default RockPaperScissors;