function LandingPage({ isCorrect, setScreen }) {
  return (
    <div className="main-frame">
      <div className="left-panel">
        <h1>THE ENIGMA’S EDGE</h1>
        <p>Unlock your mind</p>
        <div className="image-box">✓</div>
      </div>

      <div className="right-panel">
        {isCorrect ? (
          <>
            <h2>Riddle Solved!</h2>
            <p>+50 points. Level unlocked.</p>
          </>
        ) : (
          <>
            <h2>Wrong Answer</h2>
            <p>Try again.</p>
          </>
        )}

        <button className="answer-btn" onClick={() => setScreen("riddle")}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
