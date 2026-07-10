import { useState } from "react";


function TicTacToe({completeGame}){


const emptyBoard = Array(9).fill("");


const [board,setBoard]=useState(emptyBoard);


const [message,setMessage]=useState(
"Your move ⚡"
);


const [finished,setFinished]=useState(false);



const winPatterns=[

[0,1,2],
[3,4,5],
[6,7,8],

[0,3,6],
[1,4,7],
[2,5,8],

[0,4,8],
[2,4,6]

];



function checkWinner(b){


for(let pattern of winPatterns){


const [a,b1,c]=pattern;


if(

b[a] &&
b[a]===b[b1] &&
b[a]===b[c]

){

return b[a];

}


}



if(!b.includes("")){

return "draw";

}


return null;

}





function findBestMove(b,symbol){


let empty =
b.map((x,i)=>x===""?i:null)
.filter(x=>x!==null);



for(let index of empty){


let copy=[...b];


copy[index]=symbol;



if(checkWinner(copy)===symbol){

return index;

}


}


return null;

}





function computerMove(b){


let move;



// Try winning

move=findBestMove(b,"O");



// Block player

if(move===null){

move=findBestMove(b,"X");

}



// Take center

if(move===null && b[4]===""){

move=4;

}



// Random

if(move===null){


let empty =
b.map((x,i)=>x===""?i:null)
.filter(x=>x!==null);



move=
empty[
Math.floor(Math.random()*empty.length)
];


}



b[move]="O";


return b;

}





function play(index){


if(

board[index]!=="" ||

finished

)

return;



let updated=[...board];


updated[index]="X";



let result=checkWinner(updated);



if(result){

finish(result);

return;

}



updated=computerMove(updated);



result=checkWinner(updated);



setBoard([...updated]);



if(result){

finish(result);

}



}




function finish(result){



if(result==="X"){


setFinished(true);


setMessage("🏆 You Win!");



setTimeout(()=>{


completeGame(true);


},1200);



}



else if(result==="O"){


setFinished(true);


setMessage("💀 Computer Wins");


setTimeout(()=>{


completeGame(false);


},1200);



}



else{


// DRAW - restart game

setMessage("⚔ Draw! Restarting...");



setTimeout(()=>{


setBoard(Array(9).fill(""));


setFinished(false);


setMessage("Your move ⚡");


},1200);



}



}




return(


<div className="content">


<h1>
TIC TAC TOE
</h1>



<h2>
{message}
</h2>



<div

style={{

display:"grid",

gridTemplateColumns:"repeat(3,90px)",

gap:"12px",

justifyContent:"center",

marginTop:"30px"

}}

>


{

board.map((cell,index)=>(


<button

key={index}

onClick={()=>play(index)}

style={{

height:"90px",

width:"90px",

fontSize:"40px",

fontWeight:"bold",

borderRadius:"15px",

cursor:"pointer",

background:"#050816",

color:

cell==="X"

?

"#00e5ff"

:

"#ff0055",

border:"2px solid #00e5ff",

boxShadow:"0 0 15px #00e5ff"

}}

>

{cell}

</button>


))


}


</div>


</div>


);


}


export default TicTacToe;