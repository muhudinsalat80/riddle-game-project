function SideQuest({ setScreen }) {
  return (
    <div className="main-frame">
      <div className="left-panel">
        <h1>SIDE QUEST</h1>
        <p>Ancient Treasure Hunt</p>
        <div className="image-box">🗺️</div>
      </div>

      <div className="right-panel">
        <p>
          A hidden path has appeared. Solve this challenge to unlock treasure.
        </p>

        <button className="answer-btn" onClick={() => setScreen("start")}>
          Back
        </button>
      </div>
    </div>
  );
}

export default SideQuest;
