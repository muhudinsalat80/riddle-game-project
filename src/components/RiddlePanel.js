import { useState } from "react";

function RiddlePanel() {
  const riddles = [
    {
      question: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?",
      answers: ["A Map", "A Dream", "A Reflection"],
      correct: "A Map",
    },
    {
      question: "What has keys but can’t open locks?",
      answers: ["A Piano", "A Door", "A Chest"],
      correct: "A Piano",
    },
    {
      question: "What runs but never walks?",
      answers: ["A River", "A Dog", "A Clock"],
      correct: "A River",
    },
    {
      question: "The more you take, the more you leave behind. What am I?",
      answers: ["Footsteps", "Memories", "Air"],
      correct: "Footsteps",
    },
    {
      question: "What has a heart but no organs?",
      answers: ["A Tree", "A City", "A Rock"],
      correct: "A City",
    },
  ];

  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [triesLeft, setTriesLeft] = useState(2);

  const [canGoNext, setCanGoNext] = useState(false);
  const [showRetry, setShowRetry] = useState(false);
  const [hasAnsweredCorrectly, setHasAnsweredCorrectly] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const [wrongAnswer, setWrongAnswer] = useState(null);

  const currentRiddle = riddles[index];

  function handleAnswer(ans) {
    if (hasAnsweredCorrectly || gameOver) return;

    if (ans === currentRiddle.correct) {
      setWrongAnswer(null); // clear red
      setFeedback("Correct! +50 points");
      setScore((prev) => prev + 50);
      setLevel((prev) => prev + 1);
      setHasAnsweredCorrectly(true);
      setCanGoNext(true);
      setShowRetry(false);
    } else {
      const newTries = triesLeft - 1;
      setWrongAnswer(ans); // mark this one red

      if (newTries <= 0) {
        setTriesLeft(0);
        setGameOver(true);
        setFeedback("No tries left. Game over.");
      } else {
        setTriesLeft(newTries);
        setFeedback("Oops! Try again.");
        setShowRetry(true);
      }
    }
  }

  function retryRiddle() {
    let newIndex = index;
    while (newIndex === index) {
      newIndex = Math.floor(Math.random() * riddles.length);
    }

    setIndex(newIndex);
    setFeedback("");
    setShowRetry(false);
    setHasAnsweredCorrectly(false);
    setCanGoNext(false);
    setWrongAnswer(null);
  }

  function nextRiddle() {
    if (index === riddles.length - 1) {
      setGameOver(true);
      return;
    }

    setIndex(index + 1);
    setFeedback("");
    setCanGoNext(false);
    setShowRetry(false);
    setHasAnsweredCorrectly(false);
    setWrongAnswer(null);
  }

  function resetGame() {
    setIndex(0);
    setFeedback("");
    setScore(0);
    setLevel(1);
    setTriesLeft(2);
    setCanGoNext(false);
    setShowRetry(false);
    setHasAnsweredCorrectly(false);
    setGameOver(false);
    setWrongAnswer(null);
  }

  if (gameOver) {
    return (
      <div className="main-frame">
        <div className="left-panel">
          <h1>THE ENIGMA’S EDGE</h1>
          <div className="image-box">🏆</div>
          <p>Level: {level}</p>
          <p>Score: {score}</p>
        </div>

        <div className="right-panel">
          <h2>Results</h2>
          <p>Final Score: {score}</p>
          <p>Level Reached: {level}</p>

          <button className="answer-btn" onClick={resetGame}>
            Play Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="main-frame">
      <div className="left-panel">
        <h1>THE ENIGMA’S EDGE</h1>

        <div className="image-box">
          <img src={`${process.env.PUBLIC_URL}/hero.png.png`} alt="hero" />
        </div>

        <p>Level: {level}</p>
        <p>Score: {score}</p>
      </div>

      <div
        className="right-panel"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/portal.png.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="status-bar">Tries left: {triesLeft}</div>

        <div className="riddle-text">{currentRiddle.question}</div>

        {currentRiddle.answers.map((ans) => {
          let btnClass = "answer-btn";

          // green ONLY when correct chosen
          if (hasAnsweredCorrectly && ans === currentRiddle.correct) {
            btnClass += " correct";
          }

          // red ONLY when wrong chosen AND not yet correct
          if (!hasAnsweredCorrectly && ans === wrongAnswer) {
            btnClass += " wrong-btn";
          }

          return (
            <button
              key={ans}
              className={btnClass}
              onClick={() => handleAnswer(ans)}
            >
              {ans}
            </button>
          );
        })}

        {feedback && <p className="feedback">{feedback}</p>}

        {showRetry && (
          <button className="answer-btn" onClick={retryRiddle}>
            Try Again
          </button>
        )}

        {canGoNext && (
          <button className="answer-btn" onClick={nextRiddle}>
            Next Riddle →
          </button>
        )}
      </div>
    </div>
  );
}

export default RiddlePanel;
