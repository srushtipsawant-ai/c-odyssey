import {useState,useEffect} from "react";


const colors=[

"#ff4b4b",
"#4287f5",
"#42d66b",
"#ffd43b",
"#a855f7",
"#ff922b"

];



function randomNumber(){

return Math.floor(
Math.random()*9
);

}





function MemorySequence({completeGame}){


const [positions,setPositions]=useState([]);

const [sequence,setSequence]=useState([]);

const [flash,setFlash]=useState(-1);

const [watching,setWatching]=useState(true);

const [playerStep,setPlayerStep]=useState(0);

const [round,setRound]=useState(1);

const [message,setMessage]=useState("");

const [clicked,setClicked]=useState(-1);

const [correctFlash,setCorrectFlash]=useState(-1);

const [wrongFlash,setWrongFlash]=useState(-1);







useEffect(()=>{

startGame();

},[]);







function startGame(){


let board=[];


while(board.length<2){


let n=randomNumber();


if(!board.includes(n))

board.push(n);


}



setPositions(board);

setSequence(board);

showPattern(board);



}








function showPattern(pattern){


setWatching(true);


let i=0;



let timer=setInterval(()=>{


setFlash(pattern[i]);



i++;



if(i>=pattern.length){


clearInterval(timer);



setTimeout(()=>{


setFlash(-1);

setWatching(false);

setPlayerStep(0);



},500);



}


},900);



}









function nextRound(){



let newPosition;



do{

newPosition=randomNumber();


}

while(

positions.includes(newPosition)

);




let newBoard=[

...positions,

newPosition

];



setPositions(newBoard);

setSequence(newBoard);


setRound(round+1);


showPattern(newBoard);



}









function clickCircle(index){



if(watching)

return;





// click animation

setClicked(index);


setTimeout(()=>{

setClicked(-1);

},200);






if(index!==sequence[playerStep]){



setWrongFlash(index);



setMessage("❌ Wrong Pattern");


setTimeout(()=>{

setWrongFlash(-1);

completeGame(false);


},700);



return;


}






// correct feedback

setCorrectFlash(index);


setTimeout(()=>{

setCorrectFlash(-1);

},300);





let next=playerStep+1;



setPlayerStep(next);






if(next===sequence.length){



setMessage("✅ Correct!");



setTimeout(()=>{


setMessage("");

nextRound();


},900);



}



}









return(

<div className="content">


<h1>
🧠 Memory Sequence
</h1>



<h2>
Round {round}
</h2>



<h3>

{

watching

?

"👀 Watch the flashes"

:

"👇 Repeat the pattern"

}

</h3>






<div

style={{

display:"grid",

gridTemplateColumns:"repeat(3,90px)",

gap:"25px",

justifyContent:"center"

}}

>



{

Array.from({length:9}).map((_,index)=>(



<div

key={index}

onClick={()=>clickCircle(index)}


style={{

width:"90px",

height:"90px",

borderRadius:"50%",



background:


flash===index

?

colors[index%colors.length]

:

correctFlash===index

?

"#42d66b"


:

wrongFlash===index

?

"#ff0000"


:

"#444",




border:"3px solid white",



cursor:

watching

?

"default"

:

"pointer",




transform:

clicked===index

?

"scale(1.15)"

:

"scale(1)",



boxShadow:

clicked===index

?

"0 0 25px white"

:

"none",



transition:"0.2s"

}}


/>



))

}



</div>




<h2>
{message}
</h2>



</div>

);


}



export default MemorySequence;