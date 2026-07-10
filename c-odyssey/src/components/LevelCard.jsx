function LevelCard({ level, onClick }) {

  return (

    <div
      className={`level-card ${level.unlocked ? "open" : "locked"}`}
      onClick={() => level.unlocked && onClick(level)}
    >

      <h2>🚪 Level {level.id}</h2>

      <p>{level.title}</p>

      <h3>

        {level.unlocked ? "🟢 UNLOCKED" : "🔒 LOCKED"}

      </h3>

    </div>

  );

}

export default LevelCard;