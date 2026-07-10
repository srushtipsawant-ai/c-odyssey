import { useState } from "react";
import questions from "../data/questions";


function Quiz({ finishLevel }) {

  const levelQuestions = questions.filter(
    q => q.level === 1
  );


  const [current, setCurrent] = useState(0);

  const [xp, setXp] = useState(0);


  function checkAnswer(option){

    if(option === levelQuestions[current].answer){

      setXp(xp + 20);

      if(current < levelQuestions.length - 1){

        setCurrent(current + 1);

      }
      else{

        finishLevel();

      }

    }
    else{

      alert("❌ Wrong Answer!");

    }

  }


  return (

    <div className="content">

      <h1>MISSION 1</h1>

      <h2>
        Variables & Data Types
      </h2>


      <p>
        XP: {xp}
      </p>


      <h2>

      {levelQuestions[current].question}

      </h2>


      {
        levelQuestions[current].options.map(
          (option)=>(

          <button
          key={option}
          onClick={()=>checkAnswer(option)}
          >

          {option}

          </button>

          )
        )
      }


    </div>

  );

}


export default Quiz;