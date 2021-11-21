import { useEffect, useState } from "react";
import StartGame from "./StartGame";
import WhiteScreen from "./WhiteScreen";
import "./Game.css";
function Game() {
  const [gameState, setGameState] = useState("start");
  const endGame = () => {
    setGameState("end");
  };

  const retryGame = () => {
    setGameState("playing");
  };

  return (
    <div className="container">
      {gameState === "start" ? (
        <StartGame onClick={() => setGameState((state) => "playing")} />
      ) : (
        <WhiteScreen
          gameState={gameState}
          endGame={endGame}
          retryGame={retryGame}
        />
      )}
    </div>
  );
}

export default Game;
