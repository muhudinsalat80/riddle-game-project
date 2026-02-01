import { useState } from "react";
import "./App.css";

import StartPage from "./components/StartPage";
import RiddlePanel from "./components/RiddlePanel";
import LandingPage from "./components/LandingPage";
import SideQuest from "./components/SideQuest";

function App() {
  const [screen, setScreen] = useState("start");
  const [isCorrect, setIsCorrect] = useState(false);

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/portal.png.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {screen === "start" && <StartPage setScreen={setScreen} />}
      {screen === "riddle" && (
        <RiddlePanel setScreen={setScreen} setIsCorrect={setIsCorrect} />
      )}
      {screen === "result" && (
        <LandingPage isCorrect={isCorrect} setScreen={setScreen} />
      )}
      {screen === "sidequest" && <SideQuest setScreen={setScreen} />}
    </div>
  );
}

export default App;

