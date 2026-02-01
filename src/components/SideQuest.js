import { useState } from "react";

function SideQuest({ setScreen }) {
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isSolved, setIsSolved] = useState(false);

  function handleSubmit() {
    if (answer.trim().toLowerCase() === "fire") {
      setFeedback("Correct! You have unlocked the treasure.");
      setIsSolved(true);
    } else {
      setFeedback("Wrong answer. Try again.");
    }
  }

  return (
    <div className="main-frame">
      <div className="left-panel">
        <h1>SIDE QUEST</h1>
        <p className="subtitle">Ancient Treasure Hunt</p>

        <div className="image-box">
          <img
            src={
              isSolved
                ? `${process.env.PUBLIC_URL}/treasure.png.png`
                : `${process.env.PUBLIC_URL}/hero.png.png`
            }
            alt="side quest"
            className={isSolved ? "character-img" : "character-img sidequest-img"}
          />
        </div>
      </div>

      <div className="right-panel">
        <p>
          A hidden path has appeared. Solve this challenge to unlock treasure.
        </p>

        <p className="riddle-text">
          I am not alive, but I grow. I don’t have lungs, but I need air. What am I?
        </p>

        {!isSolved && (
          <>
            <input
              type="text"
              placeholder="Your answer..."
              className="answer-btn"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />

            <button className="answer-btn" onClick={handleSubmit}>
              Submit
            </button>
          </>
        )}

        {feedback && <p className="feedback">{feedback}</p>}

        <button className="answer-btn" onClick={() => setScreen("start")}>
          Back
        </button>
      </div>
    </div>
  );
}

export default SideQuest;
