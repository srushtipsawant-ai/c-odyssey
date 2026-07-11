import {useState} from "react";


function BinaryPuzzle({completeGame}){


const [decimal]=useState(

Math.floor(Math.random()*50)+1

);



const answer=decimal.toString(2);



const [input,setInput]=useState("");





function check(){


completeGame(

input===answer

);


}



return(

<div className="content">


<h1>
BINARY PUZZLE
</h1>


<h2>
Convert {decimal} to binary
</h2>


<input

value={input}

onChange={(e)=>setInput(e.target.value)}

/>



<button onClick={check}>

SUBMIT

</button>



</div>

);


}


export default BinaryPuzzle;