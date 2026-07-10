import {useState} from "react";
import questions from "../data/questions";


function CChallenge({completeLevel}){


const [question] = useState(

questions[
Math.floor(Math.random()*questions.length)
]

);


const [message,setMessage]=useState("");



function check(answer){


if(answer===question.answer){

setMessage("ACCESS GRANTED 🔓");


setTimeout(()=>{

completeLevel();

},1000);


}

else{

setMessage("WRONG ANSWER ❌");

}


}



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

onClick={()=>check(option)}

>

{option}

</button>

))

}


<p>{message}</p>


</div>


)


}


export default CChallenge;