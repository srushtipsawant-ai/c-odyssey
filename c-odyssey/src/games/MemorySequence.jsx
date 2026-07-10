import {useState,useEffect} from "react";


function MemorySequence({completeGame}){


const colors=[

"🔴",
"🔵",
"🟢",
"🟡"

];



const [sequence]=useState(()=>{


let arr=[];


for(let i=0;i<4;i++){


arr.push(

colors[
Math.floor(Math.random()*colors.length)
]

);


}


return arr;


});



const [show,setShow]=useState(true);


const [index,setIndex]=useState(0);


const [message,setMessage]=useState(
"Remember!"
);



useEffect(()=>{


const timer=setTimeout(()=>{


setShow(false);


setMessage(
"Repeat the sequence"
);


},2000);



return()=>clearTimeout(timer);



},[]);







function press(color){



if(color!==sequence[index]){


setMessage(
"Wrong ❌"
);


setTimeout(()=>{


completeGame(false);


},1000);


return;


}




if(index===sequence.length-1){


setMessage(
"Correct 🎉"
);


setTimeout(()=>{


completeGame(true);


},1000);


}

else{


setIndex(index+1);


}



}





return(

<div className="content">


<h1>
MEMORY SEQUENCE
</h1>



<h2>
{message}
</h2>



{

show

?

<h1

style={{

fontSize:"55px",

letterSpacing:"15px"

}}

>

{sequence.join(" ")}

</h1>


:

<div>


<h2>
Step {index+1}/4
</h2>


{

colors.map(c=>(


<button

key={c}

style={{

fontSize:"30px",

margin:"10px"

}}

onClick={()=>press(c)}

>

{c}

</button>


))

}


</div>


}



</div>

);


}


export default MemorySequence;