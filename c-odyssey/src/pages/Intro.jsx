function Intro({ startGame }) {

  return (

    <div className="intro">

      <h1>
        SYSTEM ONLINE...
      </h1>


      <p>
        Welcome, C Explorer.
        <br/><br/>

        The Code Lab has been corrupted.
        <br/>

        Ten security doors are locked.
        <br/><br/>

        Each door contains a C programming challenge.
        <br/>

        Solve them to escape.
        <br/><br/>

        Your journey begins now.
      </p>


      <button onClick={startGame}>
        ENTER THE ODYSSEY
      </button>


    </div>

  );

}


export default Intro;