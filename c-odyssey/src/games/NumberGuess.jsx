import {useState} from "react";


function NumberGuess({completeGame}){


const [number]=useState(

Math.floor(Math.random()*100)+1

);



const [guess,setGuess]=useState("");

const [attempts,setAttempts]=useState(7);


const [message,setMessage]=useState(
"Guess the number"
);





function check(){


const value=Number(guess);



if(!value)
return;




if(value===number){


setMessage(
"🎉 Correct!"
);



setTimeout(()=>{


completeGame(true);


},1000);



return;


}





let remaining=attempts-1;


setAttempts(remaining);





if(remaining<=0){


setMessage(

`💀 Game Over! Number was ${number}`

);



setTimeout(()=>{


completeGame(false);


},1500);



return;


}





if(value>number){


setMessage(

"⬇️ Too High! Try lower"

);


}

else{


setMessage(

"⬆️ Too Low! Try higher"

);


}



setGuess("");



}







return(

<div className="content">


<h1>
NUMBER GUESS
</h1>



<h2>
1 - 100
</h2>


<h3>
Attempts Left: {attempts}
</h3>



<input

type="number"

value={guess}

onChange={(e)=>setGuess(e.target.value)}

placeholder="Enter guess"

/>



<br/>


<button onClick={check}>

GUESS

</button>



<h2>
{message}
</h2>


</div>

);


}


export default NumberGuess;