function Dashboard({ goToMap }) {
  const playerName = localStorage.getItem("playerName") || "Explorer";

  return (
    <div className="content">

      <h1>C ODYSSEY</h1>

      <h2>Welcome, {playerName}</h2>

      <div className="dashboard-card">

        <p>🏆 Rank</p>
        <h3>Code Rookie</h3>

        <p>⭐ XP</p>
        <div className="progress">
          <div className="progress-fill"></div>
        </div>

        <p>🪙 Coins : 100</p>

        <p>❤️ Lives : ❤️❤️❤️❤️❤️</p>

      </div>

      <button onClick={goToMap}>
        OPEN MISSION MAP
      </button>

    </div>
  );
}

export default Dashboard;