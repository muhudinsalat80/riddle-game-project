function LandingPage({ isCorrect, setScreen }) {
  return (
    <div className="main-frame">
      <div className="left-panel">
        <h1>THE ENIGMA’S EDGE</h1>

        <div className="image-box">
          <img
            src={`${process.env.PUBLIC_URL}/hero.png.png`}
            alt="result"
            className="character-img"
          />
        </div>
      </div>

      <div className="right-panel">
        {isCorrect ? (
          <>
            <h2>Riddle Solved!</h2>
            <p>You proved your wisdom.</p>
            <p>+50 points. Level unlocked.</p>
          </>
        ) : (
          <>
            <h2>Game Over</h2>
            <p>The portal remains sealed.</p>
            <p>Reflect, and try again.</p>
          </>
        )}

        <button className="answer-btn" onClick={() => setScreen("riddle")}>
          Try Again
        </button>

        <button className="answer-btn" onClick={() => setScreen("start")}>
          Back to Start
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
