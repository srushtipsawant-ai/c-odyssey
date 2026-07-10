import {useState,useRef} from "react";


function ClickSpeed({completeGame}){


const goal =
Math.floor(Math.random()*11)+10;


const time =
Math.floor(Math.random()*4)+5;



const [clicks,setClicks]=useState(0);

const [started,setStarted]=useState(false);

const [finished,setFinished]=useState(false);

const clicksRef=useRef(0);





function click(){



if(finished)
return;



if(!started){


setStarted(true);



clicksRef.current=1;

setClicks(1);



setTimeout(()=>{


setFinished(true);



if(clicksRef.current>=goal){

completeGame(true);

}

else{

completeGame(false);

}



},time*1000);



}



else{


clicksRef.current++;

setClicks(clicksRef.current);


}



}





return(

<div className="content">


<h1>
CLICK SPEED
</h1>


<h2>
{clicks} / {goal}
</h2>


<p>
Click {goal} times in {time} seconds
</p>



<button onClick={click}>

CLICK FAST ⚡

</button>


</div>

);


}


export default ClickSpeed;