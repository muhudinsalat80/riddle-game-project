function StartPage({ setScreen }) {
  return (
    <div className="main-frame">
      <div className="left-panel">
        <h1>THE ENIGMA’S EDGE</h1>
        <p className="subtitle">Unlock your mind</p>

        <div className="image-box">
          <img
            src={`${process.env.PUBLIC_URL}/hero.png.png`}
            alt="hero"
            className="character-img"
          />
        </div>
      </div>

      <div className="right-panel">
        <h2>Welcome Adventurer</h2>
        <p>Are you ready to solve the riddles and unlock the portal?</p>

        <button className="answer-btn" onClick={() => setScreen("riddle")}>
          Start Game
        </button>

        <button className="answer-btn" onClick={() => setScreen("sidequest")}>
          Side Quest
        </button>
      </div>
    </div>
  );
}

export default StartPage;
