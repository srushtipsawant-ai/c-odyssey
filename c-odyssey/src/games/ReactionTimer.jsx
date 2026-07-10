import {useState,useEffect,useRef} from "react";


function ReactionTimer({completeGame}){


const [status,setStatus]=useState(
"Wait for green..."
);


const [canClick,setCanClick]=useState(false);


const [result,setResult]=useState("");



const startTime=useRef(null);



useEffect(()=>{


const delay =
Math.floor(Math.random()*3000)+2000;



const timer=setTimeout(()=>{


setStatus(
"CLICK NOW! ⚡"
);


setCanClick(true);



startTime.current=Date.now();



},delay);



return()=>clearTimeout(timer);



},[]);






function click(){



if(!canClick){


setStatus(
"Too early! Wait for green ❌"
);


return;


}




const reaction =
Date.now()-startTime.current;



setResult(
reaction+" ms"
);




if(reaction<700){


setTimeout(()=>{


completeGame(true);


},1000);



}

else{


setTimeout(()=>{


completeGame(false);


},1000);



}



}







return(

<div className="content">


<h1>
REACTION TIMER
</h1>



<h2>
{status}
</h2>



<h3>
{result}
</h3>



<button

onClick={click}

style={{

background:canClick
?
"#00ff88"
:
"#ff0055"

}}

>

CLICK

</button>



</div>

);


}


export default ReactionTimer;