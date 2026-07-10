import {useState} from "react";


function NumberGuess({completeGame}){


const [number] = useState(

Math.floor(Math.random()*10)+1

);


const [guess,setGuess]=useState("");

const [message,setMessage]=useState("");



function check(){


const value=Number(guess);



if(value===number){


setMessage("Correct 🎉");


setTimeout(()=>{

completeGame(true);

},1000);


}

else if(value>number){


setMessage("Too High ⬆️");


}

else{


setMessage("Too Low ⬇️");


}


}



return(

<div className="content">


<h1>
Number Guess
</h1>


<p>
Guess a number between 1-10
</p>


<input

value={guess}

onChange={(e)=>setGuess(e.target.value)}

type="number"

/>


<br/>


<button onClick={check}>
Guess
</button>


<h2>
{message}
</h2>


</div>

);


}


export default NumberGuess;