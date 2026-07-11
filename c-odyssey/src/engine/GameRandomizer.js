function randomItem(arr){

return arr[
Math.floor(Math.random()*arr.length)
];

}



export function getNextGame(games){


let used =
JSON.parse(
localStorage.getItem("usedGames")
) || [];



let available =
games.filter(
game=>!used.includes(game.id)
);



if(available.length===0){

used=[];

available=[...games];

localStorage.setItem(
"usedGames",
JSON.stringify([])
);

}




let selected=randomItem(available);



used.push(selected.id);



localStorage.setItem(

"usedGames",

JSON.stringify(used)

);



return selected;


}







export function getNextQuestion(questions){


let used =
JSON.parse(
localStorage.getItem("usedQuestions")
) || [];



let available =
questions.filter(
q=>!used.includes(q.id)
);





if(available.length===0){


used=[];

available=[...questions];


localStorage.setItem(

"usedQuestions",

JSON.stringify([])

);


}




let selected=randomItem(available);



used.push(selected.id);



localStorage.setItem(

"usedQuestions",

JSON.stringify(used)

);



return selected;


}