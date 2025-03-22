import React, { useState } from "react";
import StartMenu from "./components/Start";
import RenderArea from "./RenderArea";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [currentArea, setCurrentArea] = useState("forest");

  return (
    <div className="App">
      {!isGameStarted ? (
        <StartMenu setIsGameStarted={setIsGameStarted} />
      ) : (
        <RenderArea currentArea={currentArea} setCurrentArea={setCurrentArea} />
      )}
    </div>
  );
}

export default App;
