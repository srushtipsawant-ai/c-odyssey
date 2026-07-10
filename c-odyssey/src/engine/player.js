const defaultPlayer = {

    level:1,

    xp:0,

    coins:0

};



export function getPlayer(){


const saved =
localStorage.getItem("player");



if(saved){

return JSON.parse(saved);

}



localStorage.setItem(
"player",
JSON.stringify(defaultPlayer)
);



return defaultPlayer;


}



export function savePlayer(player){


localStorage.setItem(

"player",

JSON.stringify(player)

);


}



export function resetPlayer(){


localStorage.setItem(

"player",

JSON.stringify(defaultPlayer)

);



return defaultPlayer;


}

