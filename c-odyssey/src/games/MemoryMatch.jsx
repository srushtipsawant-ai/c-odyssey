import {useState,useEffect} from "react";


function MemoryMatch({completeGame}){


const values=[

"A","A",
"B","B",
"C","C",
"D","D",
"E","E",
"F","F"

];



const shuffle=(arr)=>{

return [...arr].sort(
()=>Math.random()-0.5
);

};



const [cards,setCards]=useState(()=>


shuffle(values).map((value,index)=>({

id:index,

value,

flipped:true,

matched:false


}))


);



const [preview,setPreview]=useState(true);


const [first,setFirst]=useState(null);

const [second,setSecond]=useState(null);

const [lock,setLock]=useState(false);





useEffect(()=>{


let timer=setTimeout(()=>{


setCards(prev=>

prev.map(card=>({

...card,

flipped:false

}))

);


setPreview(false);


},2000);



return()=>clearTimeout(timer);



},[]);








function clickCard(index){


if(lock)
return;


if(preview)
return;



if(cards[index].flipped)
return;



let updated=[...cards];


updated[index].flipped=true;


setCards(updated);



if(first===null){


setFirst(index);


}

else{


setSecond(index);


setLock(true);



if(

cards[first].value === cards[index].value

){


setTimeout(()=>{


setCards(prev=>

prev.map((card,i)=>

i===first || i===index

?

{

...card,

matched:true

}

:

card

)

);


setFirst(null);

setSecond(null);

setLock(false);



},700);



}

else{


setTimeout(()=>{


setCards(prev=>

prev.map((card,i)=>

i===first || i===index

?

{

...card,

flipped:false

}

:

card

)

);



setFirst(null);

setSecond(null);

setLock(false);



},1000);



}



}



}






useEffect(()=>{


if(

cards.length &&

cards.every(card=>card.matched)

){


setTimeout(()=>{


completeGame(true);


},800);


}


},[cards]);









return(


<div className="content">


<h1>
MEMORY MATCH
</h1>


<h2>

{
preview

?

"Remember the cards 👀"

:

"Find all pairs 🧠"

}

</h2>



<div

style={{

display:"grid",

gridTemplateColumns:"repeat(4,80px)",

gap:"15px",

justifyContent:"center"

}}

>


{

cards.map((card,index)=>(


<button

key={card.id}

onClick={()=>clickCard(index)}

style={{

width:"80px",

height:"80px",

fontSize:"30px",

borderRadius:"10px",

background:

card.flipped || card.matched

?

"#4caf50"

:

"#333",

color:"white"

}}

>


{

card.flipped || card.matched

?

card.value

:

"?"

}


</button>


))


}


</div>


</div>


);


}


export default MemoryMatch;