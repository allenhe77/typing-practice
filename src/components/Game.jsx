import { useState } from "react";
import StartGame from "./StartGame";
import WhiteScreen from "./WhiteScreen";
import "./Game.css";
function Game() {
  const [gameState, setGameState] = useState("start");

  return (
    <div className="container">
      {gameState === "start" ? (
        <StartGame onClick={() => setGameState((state) => "playing")} />
      ) : (
        <WhiteScreen gameState="playing" />
      )}
    </div>
  );
}

export default Game;
