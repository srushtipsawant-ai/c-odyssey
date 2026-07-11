import { useState } from "react";


function createSecret(){

    let digits=[];

    while(digits.length < 4){

        let n=Math.floor(Math.random()*10).toString();

        if(!digits.includes(n)){
            digits.push(n);
        }

    }

    return digits;

}





function checkAnswer(secret,guess){

    let result=[
        "gray",
        "gray",
        "gray",
        "gray"
    ];


    let secretCopy=[...secret];



    // First check correct position 🟩

    for(let i=0;i<4;i++){

        if(guess[i]===secret[i]){

            result[i]="green";

            secretCopy[i]=null;

        }

    }



    // Then check wrong position 🟨

    for(let i=0;i<4;i++){

        if(result[i]==="green")
            continue;


        let index=secretCopy.indexOf(guess[i]);


        if(index!==-1){

            result[i]="yellow";

            secretCopy[index]=null;

        }

    }


    return result;

}







function Mastermind({completeGame}){


    const [secret]=useState(
        createSecret()
    );


    const [guess,setGuess]=useState("");



    const [history,setHistory]=useState([]);

    

    const [attempts,setAttempts]=useState(8);



    const [message,setMessage]=useState(
        "Guess the 4 digit code"
    );




    function submitGuess(){


        if(guess.length!==4){

            setMessage(
                "Enter 4 digits"
            );

            return;

        }



        let digits=guess.split("");



        let result=checkAnswer(
            secret,
            digits
        );



        let newHistory=[

            ...history,

            {
                digits,
                result
            }

        ];



        setHistory(newHistory);




        if(
            digits.join("") === secret.join("")
        ){


            setMessage(
                "🎉 Code Cracked!"
            );


            setTimeout(()=>{

                completeGame(true);

            },1000);


            return;

        }




        let left=attempts-1;


        setAttempts(left);



        if(left===0){


            setMessage(
                "❌ Failed! Code was "+secret.join("")
            );


            setTimeout(()=>{

                completeGame(false);

            },1500);


            return;


        }




        setGuess("");

        setMessage(
            "Try again"
        );


    }
    




    return (

        <div className="content">


            <h1>
                NUMBER WORDLE
            </h1>


            <h2>
                {message}
            </h2>


            <p>
                Crack the secret 4 digit code
            </p>


            <p>
                Attempts Left: {attempts}
            </p>



            <div
            style={{
                marginTop:"20px",
                display:"flex",
                flexDirection:"column",
                gap:"12px",
                alignItems:"center"
            }}
            >


            {
                history.map((row,index)=>(


                    <div

                    key={index}

                    style={{
                        display:"flex",
                        gap:"10px"
                    }}

                    >


                    {

                    row.digits.map((digit,i)=>(


                        <div

                        key={i}

                        style={{

                            width:"60px",

                            height:"60px",

                            borderRadius:"8px",

                            display:"flex",

                            justifyContent:"center",

                            alignItems:"center",

                            fontSize:"28px",

                            fontWeight:"bold",

                            color:"white",

                            background:

                            row.result[i]==="green"

                            ?

                            "green"

                            :

                            row.result[i]==="yellow"

                            ?

                            "gold"

                            :

                            "#555"


                        }}

                        >

                            {digit}

                        </div>


                    ))

                    }


                    </div>


                ))

            }


            </div>





            <div

            style={{

                marginTop:"25px"

            }}

            >


                <input


                type="text"


                value={guess}


                maxLength="4"


                placeholder="Enter 4 digits"


                onChange={(e)=>{


                    let value=e.target.value;


                    value=value.replace(
                        /[^0-9]/g,
                        ""
                    );


                    setGuess(value);


                }}



                style={{

                    width:"150px",

                    padding:"12px",

                    fontSize:"20px",

                    textAlign:"center"

                }}


                />



                <br/>


                <button

                onClick={submitGuess}

                style={{

                    marginTop:"15px"

                }}

                >

                    GUESS

                </button>



            </div>






            <div

            style={{

                marginTop:"30px",

                textAlign:"left",

                display:"inline-block"

            }}

            >

                <h3>
                    How hints work:
                </h3>


                <p>
                    🟩 Correct position - digit is correct and in the correct place
                </p>


                <p>
                    🟨 Wrong position - digit exists but is in the wrong place
                </p>


                <p>
                    ⬜ Not present - digit does not exist in the code
                </p>


            </div>




        </div>

    );


}


export default Mastermind;