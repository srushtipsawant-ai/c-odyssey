const PLAYER_KEY="cOdysseyPlayer";


const defaultPlayer={

name:"Player",

level:1,

xp:0,

coins:0,


gamesPlayed:0,

gamesWon:0,


bestScores:{}

};





export function getPlayer(){


let saved=localStorage.getItem(
PLAYER_KEY
);



if(saved){

return JSON.parse(saved);

}



localStorage.setItem(

PLAYER_KEY,

JSON.stringify(defaultPlayer)

);



return defaultPlayer;



}







export function savePlayer(player){


localStorage.setItem(

PLAYER_KEY,

JSON.stringify(player)

);


}







export function resetPlayer(){


localStorage.removeItem(
PLAYER_KEY
);


}

