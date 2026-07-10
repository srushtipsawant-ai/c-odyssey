import {useState,useEffect} from "react";


function NumberTap({completeGame}){


const [number]=useState(()=>{


return Math.floor(

100000+

Math.random()*900000

).toString();



});



const [show,setShow]=useState(true);


const [input,setInput]=useState("");



const [message,setMessage]=useState(
"Remember the number"
);





useEffect(()=>{


const timer=setTimeout(()=>{


setShow(false);


setMessage(
"Enter the number"
);



},2000);



return()=>clearTimeout(timer);



},[]);







function submit(){



if(input===number){



setMessage(
"Correct 🎉"
);



setTimeout(()=>{


completeGame(true);


},1000);



}

else{


setMessage(
"Wrong ❌"
);



setTimeout(()=>{


completeGame(false);


},1000);



}



}





return(

<div className="content">


<h1>
NUMBER MEMORY
</h1>



<h2>
{message}
</h2>



{

show

?

<h1

style={{

letterSpacing:"15px"

}}

>

{number}

</h1>


:

<>


<input

type="number"

value={input}

onChange={(e)=>setInput(e.target.value)}

placeholder="Type number"

/>



<br/>


<button

onClick={submit}

>

SUBMIT

</button>


</>


}



</div>

);


}


export default NumberTap;