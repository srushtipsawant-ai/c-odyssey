import { useState } from "react";


function RockPaperScissors({ completeGame }) {

  const choices = ["🪨 Rock", "📄 Paper", "✂️ Scissors"];

  const [player, setPlayer] = useState("");
  const [computer, setComputer] = useState("");
  const [result, setResult] = useState("");


  function play(choice){

    const computerChoice =
      choices[Math.floor(Math.random()*3)];


    setPlayer(choice);
    setComputer(computerChoice);


    if(choice === computerChoice){

      setResult("Draw 😐");

    }

    else if(

      (choice.includes("Rock") && computerChoice.includes("Scissors")) ||
      (choice.includes("Paper") && computerChoice.includes("Rock")) ||
      (choice.includes("Scissors") && computerChoice.includes("Paper"))

    ){

      setResult("You Win 🎉");

      setTimeout(()=>{
        completeGame();
      },1000);

    }

    else{

      setResult("Computer Wins 😭");

    }

  }



  return (

    <div className="content">

      <h1>
        LEVEL 1
      </h1>


      <h2>
        Rock Paper Scissors
      </h2>


      <p>
        Beat the computer to unlock the C challenge!
      </p>


      <div>

      {
        choices.map(choice=>(

          <button
          key={choice}
          onClick={()=>play(choice)}
          >

          {choice}

          </button>

        ))
      }

      </div>


      <p>
        You: {player}
        <br/>
        Computer: {computer}
        <br/>
        {result}
      </p>


    </div>

  );

}


export default RockPaperScissors;