function StartPage({ setScreen }) {
  return (
    <div className="main-frame">
      <div className="left-panel">
        <h1>THE ENIGMA’S EDGE</h1>
        <p>Unlock your mind</p>
        <div className="image-box">?</div>
      </div>

      <div className="right-panel">
        <h2>Welcome Adventurer</h2>
        <p>Are you ready to solve the riddles and unlock the portal?</p>
        <button className="answer-btn" onClick={() => setScreen("riddle")}>
          Start Game
        </button>
      </div>
    </div>
  );
}

export default StartPage;
