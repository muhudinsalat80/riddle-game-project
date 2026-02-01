import { useState } from "react";

function RiddlePanel({ setScreen, setIsCorrect }) {
  const riddles = [
    {
      question: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?",
      answers: ["A Dream", "A Map", "A Reflection", "A Painting"],
      correct: "A Map",
      hint: "It is something you can hold in your hands.",
    },
    {
      question: "What has keys but can’t open locks?",
      answers: ["A Door", "A Chest", "A Map", "A Piano"],
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
      answers: ["Memories", "Footsteps", "Air", "Time"],
      correct: "Footsteps",
      hint: "Think about walking.",
    }
  ];

  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [level, setLevel] = useState(1);
  const [triesLeft, setTriesLeft] = useState(2);
  const [wrongAnswer, setWrongAnswer] = useState(null);
  const [hasAnsweredCorrectly, setHasAnsweredCorrectly] = useState(false);

  const currentRiddle = riddles[index];

  function handleAnswer(ans) {
    if (ans === currentRiddle.correct) {
      const nextIndex = index + 1;

      setFeedback("Correct! +50 points");
      setScore(score + 50);
      setLevel(level + 1);
      setWrongAnswer(null);
      setShowHint(false);
      setTriesLeft(2);
      setHasAnsweredCorrectly(true);

      setTimeout(() => {
        if (nextIndex >= riddles.length) {
          setIsCorrect(true);
          setScreen("result");
        } else {
          setIndex(nextIndex);
          setHasAnsweredCorrectly(false);
        }
      }, 700);
    } else {
      const newTries = triesLeft - 1;
      setWrongAnswer(ans);

      if (newTries <= 0) {
        setIsCorrect(false);
        setScreen("result");
      } else {
        setTriesLeft(newTries);
        setFeedback("Wrong answer. Try again.");
      }
    }
  }

  return (
    <div className="main-frame">
      <div className="left-panel">
        <h1>THE ENIGMA’S EDGE</h1>

        <div className="image-box">
          <img
            src={`${process.env.PUBLIC_URL}/hero.png.png`}
            alt="hero"
            className="character-img"
          />
        </div>

        <p>Level: {level}</p>
        <p>Score: {score}</p>
      </div>

      <div className="right-panel">
        <div className="status-bar">Tries left: {triesLeft}</div>

        <div className="riddle-text">{currentRiddle.question}</div>

        {!showHint && (
          <button className="hint-btn" onClick={() => setShowHint(true)}>
            Hint
          </button>
        )}

        {showHint && <p className="hint-text">{currentRiddle.hint}</p>}

        {currentRiddle.answers.map((ans) => {
          let btnClass = "answer-btn";

          if (hasAnsweredCorrectly && ans === currentRiddle.correct) {
            btnClass += " correct-btn";
          }

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
      </div>
    </div>
  );
}

export default RiddlePanel;
