import { useState, useEffect } from "react";

function PatternMemory({ completeGame }) {

  const [sequence] = useState(() => {
    let arr = [];
    while (arr.length < 5) {
      arr.push(Math.floor(Math.random() * 9));
    }
    return arr;
  });

  const [showing, setShowing] = useState(true);
  const [active, setActive] = useState(-1);
  const [playerIndex, setPlayerIndex] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [message, setMessage] = useState("Watch Carefully...");

  useEffect(() => {

    let i = 0;

    function flash() {

      if (i >= sequence.length) {

        setActive(-1);

        setShowing(false);

        setMessage("Repeat the pattern!");

        return;

      }

      setActive(sequence[i]);

      setTimeout(() => {

        setActive(-1);

        i++;

        setTimeout(flash, 250);

      }, 600);

    }

    flash();

  }, []);





  function click(index) {

    if (showing) return;

    let newClicked = [...clicked, index];
    setClicked(newClicked);

    if (index !== sequence[playerIndex]) {

      setMessage("❌ Wrong Pattern!");

      setTimeout(() => {

        completeGame(false);

      }, 1000);

      return;

    }

    if (playerIndex + 1 === sequence.length) {

      setMessage("🎉 Perfect!");

      setTimeout(() => {

        completeGame(true);

      }, 1000);

      return;

    }

    setPlayerIndex(playerIndex + 1);

  }







  return (

    <div className="content">

      <h1>SIMON MEMORY</h1>

      <h2>{message}</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,90px)",
          gap: "15px",
          justifyContent: "center",
          marginTop: "30px"
        }}
      >

        {Array.from({ length: 9 }).map((_, i) => (

          <button

            key={i}

            onClick={() => click(i)}

            style={{

              width: "90px",

              height: "90px",

              borderRadius: "50%",

              border: "none",

              cursor: showing ? "default" : "pointer",

              background:
                active === i
                  ? "#FFD700"
                  : clicked.includes(i)
                  ? "#00BFFF"
                  : "#444",

              transition: "0.2s"

            }}

          />

        ))}

      </div>

    </div>

  );

}

export default PatternMemory;