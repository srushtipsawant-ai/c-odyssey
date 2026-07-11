import {useState,useEffect} from "react";


const colors=[
"red",
"blue",
"green",
"yellow"
];



function randomColor(){

return colors[
Math.floor(Math.random()*colors.length)
];

}




function MemorySequence({completeGame}){


const [sequence,setSequence]=useState([]);


const [playerInput,setPlayerInput]=useState([]);


const [showing,setShowing]=useState(false);


const [active,setActive]=useState("");



const [round,setRound]=useState(1);


const [message,setMessage]=useState(
"Get ready..."
);






useEffect(()=>{

startRound();

},[]);







function startRound(){


let newSequence=[];



for(let i=0;i<round+1;i++){

newSequence.push(
randomColor()
);

}



setSequence(newSequence);


setPlayerInput([]);


setShowing(true);


setMessage(
"Remember the sequence 👀"
);



showSequence(newSequence);



}







function showSequence(seq){



let index=0;



let timer=setInterval(()=>{


setActive(
seq[index]
);



setTimeout(()=>{

setActive("");

},500);



index++;



if(index>=seq.length){



clearInterval(timer);



setTimeout(()=>{


setShowing(false);


setMessage(
"Repeat the sequence 🧠"
);



},700);



}



},900);



}









function clickColor(color){



if(showing)
return;




let updated=[

...playerInput,

color

];



setPlayerInput(updated);




let currentIndex=
updated.length-1;




if(
updated[currentIndex]
!==

sequence[currentIndex]

){



setMessage(
`❌ Wrong! Score: Round ${round}`
);



setTimeout(()=>{


completeGame(false);


},1500);



return;


}




if(updated.length===sequence.length){



setMessage(
"🎉 Correct! Next Round"
);



setTimeout(()=>{


setRound(round+1);


startRound();


},1200);



}



}








return(


<div className="content">


<h1>
COLOR FLASH MEMORY
</h1>



<h2>
Round: {round}
</h2>



<h2>
{message}
</h2>



<div

style={{

display:"grid",

gridTemplateColumns:"repeat(2,120px)",

gap:"20px",

justifyContent:"center",

marginTop:"30px"

}}

>


{

colors.map(color=>(


<button

key={color}

onClick={()=>clickColor(color)}

style={{

width:"120px",

height:"120px",

background:

active===color

?

"white"

:

color,

borderRadius:"20px",

border:"3px solid black",

cursor:"pointer"

}}


>

</button>


))


}


</div>


</div>


);


}



export default MemorySequence;