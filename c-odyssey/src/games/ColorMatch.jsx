import {useState,useEffect} from "react";


function ColorMatch({completeGame}){


const colors=[

{
name:"RED",
code:"#ff0033"
},

{
name:"BLUE",
code:"#008cff"
},

{
name:"GREEN",
code:"#00cc66"
},

{
name:"YELLOW",
code:"#ffd000"
}

];




function randomColor(){

return colors[
Math.floor(Math.random()*colors.length)
];

}



const [word,setWord]=useState(
randomColor()
);


const [textColor,setTextColor]=useState(
randomColor()
);



const [round,setRound]=useState(1);



const [time,setTime]=useState(6);







useEffect(()=>{


const timer=setInterval(()=>{


setTime(t=>{


if(t<=1){


clearInterval(timer);


completeGame(false);


return 0;


}



return t-1;


});


},1000);



return()=>clearInterval(timer);



},[round]);








function choose(color){



if(color.name===textColor.name){



if(round===5){


completeGame(true);


}

else{


setRound(round+1);


setWord(randomColor());


setTextColor(randomColor());


setTime(6);


}



}

else{


completeGame(false);


}



}







return(

<div className="content">


<h1>
COLOR MATCH
</h1>



<h2>
Round {round}/5
</h2>



<h2>
⏱️ {time}s
</h2>



<p>
Choose the color of the letters
</p>



<h1

style={{

color:textColor.code,

fontSize:"80px"

}}

>

{word.name}

</h1>




{

colors.map(c=>(


<button

key={c.name}

onClick={()=>choose(c)}

>

{c.name}

</button>


))

}



</div>

);


}


export default ColorMatch;