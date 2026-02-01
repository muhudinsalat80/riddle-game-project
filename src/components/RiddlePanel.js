import { useState } from "react";

function RiddlePanel() {
  const riddles = [
    {
      question: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?",
      answers: [ "A Dream", "A Map","A Reflection", "A Painting"],
      correct: "A Map",
      hint: "It is something you can hold in your hands.",
    },
    {
      question: "What has keys but can’t open locks?",
      answers: [ "A Door", "A Chest", "A Map","A Piano"],
      correct: "A Piano",
      hint: "There are many in a single place.",
    },
    {
      question: "What runs but never walks?",
      answers: ["A River", "A Dog", "A Clock", "A Shadow"],
      correct: "A River",
      hint: "It is often found in nature.",
    },
     {
      question: "I speak without a mouth and hear without ears. I have nobody, but I come alive with wind. What am I?",
      answers: ["An Echo", "A Whisper", "A Flag", "A Song"],
      correct: "An Echo",
      hint: "You hear it when sound bounces back.",
    },
    {
      question: "I’m light as a feather, yet the strongest person can’t hold me for five minutes. What am I?",
      answers: ["Breath", "A Cloud", "A Thought", "A Whisper"],
      correct: "Breath",
      hint: "You do it all the time without thinking.",
    },
    {
      question: "I have branches, but no fruit, trunk or leaves. What am I?",
      answers: ["A Bank", "A River", "A Library", "A Tree"],
      correct: "A Bank",
      hint: "You visit me when you need money services.",
    },
    {
      question: "What can travel around the world while staying in a corner?",
      answers: ["A Stamp", "A Satellite", "A Compass", "A Map"],
      correct: "A Stamp",
      hint: "You stick me on envelopes.",
    },
    {
      question: "What gets wetter the more it dries?",
      answers: ["A Sponge", "A Towel", "Rain", "A River"],
      correct: "A Towel",
      hint: "You use it after a shower.",
    },
    {
      question: "I have one eye, but cannot see. What am I?",
      answers: ["A Needle", "A Storm", "A Potato", "A Cyclops"],
      correct: "A Needle",
      hint: "Sewing needs me.",
    },
    {
      question: "What can you catch but not throw?",
      answers: ["A Ball", "A Cold", "A Fish", "A Train"],
      correct: "A Cold",
      hint: "It’s an illness, not an object.",
    },


    {
      question: "The more you take, the more you leave behind. What am I?",
      answers: [ "Memories","Footsteps", "Air", "Time"],
      correct: "Footsteps",
      hint: "Think about walking.",
    },
    {
      question: "What has a heart but no organs?",
      answers: ["A Tree", "A City", "A Rock", "A Cloud"],
      correct: "A City",
      hint: "It's a place where many people live.",
    },
    {
      question: "What has four legs in the morning, two legs in the afternoon, and three legs in the evening?",
      answers: [ "A Cat", "A Human", "A Table", "A Dog"],
      correct: "A Human",
      hint: "Think about the stages of life.",
    },
    {
      question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
      answers: [ "M", "A Second", "A Thought", "A Shadow"],
      correct: "M",
      hint: "It's something you can find in words.",
    },
    {
      question:" I am yours, but others use me more than you do. What am I?",
      answers: [ "Your Shadow","Your Name", "Your Time", "Your Voice"],
      correct: "Your Name",
      hint: "It's something that identifies you.",
    },
    {
      question: "I can be tall, I can be short, I can be strong, I can be weak. What am I?",
      answers: [ "A Tree", "A Building", "A Bridge", "A Candle"],
      correct: "A Candle",
      hint: "I only change when I am used.",
    },
    {
      question: "What has to be broken before you can use it?",
      answers: [ "A Seal", "An Egg", "A Code", "A Promise"],
      correct: "An Egg",
      hint: "It's something you often eat for breakfast.",
    }
  ];

  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
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
      setShowHint(false);

    }

    setIndex(newIndex);
    setFeedback("");
    setShowRetry(false);
    setHasAnsweredCorrectly(false);
    setCanGoNext(false);
    setWrongAnswer(null);
  }

  function nextRiddle() {
     setShowHint(false);
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

  function useHint() {
  setShowHint(true);
  setScore((prev) => Math.max(prev - 10, 0)); // optional point penalty
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

        {!showHint && (
  <button className="answer-btn" onClick={useHint}>
    💡 Hint (-10 points)
  </button>
)}

{showHint && (
  <p className="hint-text">
    Hint: {currentRiddle.hint}
  </p>
)}


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
