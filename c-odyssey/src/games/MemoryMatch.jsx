import { useState } from "react";


function MemoryMatch({completeGame}){


const createCards = () => {


const values = [

"💻",
"🐛",
"⚡",
"🔥",
"💻",
"🐛",
"⚡",
"🔥"

];



return values

.sort(()=>Math.random()-0.5)

.map((value,index)=>(

{
id:index,
value:value,
flipped:false,
matched:false
}

));


};



const [cards,setCards]=useState(
createCards()
);


const [selected,setSelected]=useState([]);


const [lock,setLock]=useState(false);


const [message,setMessage]=useState(
"Find all matching pairs"
);



function flipCard(card){



if(

lock ||

card.flipped ||

card.matched

)

return;



const updatedCards = cards.map(c=>


c.id===card.id

?

{...c,flipped:true}

:

c


);



setCards(updatedCards);



const newSelected=[...selected,card];


setSelected(newSelected);



if(newSelected.length===2){


checkMatch(updatedCards,newSelected);


}


}




function checkMatch(updated,picked){


setLock(true);



const first=picked[0];

const second=picked[1];



if(first.value===second.value){



const matchedCards = updated.map(card=>


card.value===first.value

?

{...card,matched:true}

:

card


);



setCards(matchedCards);


setSelected([]);


setLock(false);



const completed = matchedCards.every(

card=>card.matched

);



if(completed){


setMessage("Memory Master 🎉");


setTimeout(()=>{


completeGame(true);


},1200);


}


}


else{


setMessage("Wrong pair ❌");



setTimeout(()=>{


const reset = updated.map(card=>


card.id===first.id ||

card.id===second.id

?

{...card,flipped:false}

:

card


);



setCards(reset);


setSelected([]);


setLock(false);


setMessage("Find all matching pairs");


},900);



}


}




return(


<div className="content">


<h1>
MEMORY MATCH
</h1>



<h2>
{message}
</h2>



<div

style={{

display:"grid",

gridTemplateColumns:"repeat(4,80px)",

gap:"15px",

justifyContent:"center",

marginTop:"30px"

}}

>


{

cards.map(card=>(


<button

key={card.id}

onClick={()=>flipCard(card)}

style={{

height:"80px",

width:"80px",

fontSize:"35px",

borderRadius:"15px",

cursor:"pointer",

background:

card.flipped || card.matched

?

"#111827"

:

"#050816",

color:"#00e5ff",

border:"2px solid #00e5ff",

boxShadow:

card.matched

?

"0 0 20px #00e5ff"

:

"0 0 10px #7c3aed"

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