function Dashboard({ goToLevels }) {
  const playerName = localStorage.getItem("playerName") || "Explorer";

  return (
    <div className="content">

      <h1>C ODYSSEY</h1>

      <h2>Welcome, {playerName}</h2>

      <p>
        🏆 Rank: Code Rookie
        <br /><br />
        ⭐ XP: 0 / 100
        <br /><br />
        🪙 Coins: 100
        <br /><br />
        ❤️ Lives: ❤️❤️❤️❤️❤️
      </p>

      <button onClick={goToLevels}>
        LEVEL MAP
      </button>

    </div>
  );
}

export default Dashboard;