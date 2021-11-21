import Playing from "./Playing/Playing";
import SessionStats from "./SessionStats/SessionStats";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./WhiteScreen.css";

function WhiteScreen({ gameState, endGame, retryGame }) {
  const [time, setTime] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);
  useEffect(() => {
    if (gameState !== "end") {
      setNumCorrect(0);
      setTime(0);
    }
  }, [gameState]);
  const increaseNumCorrect = () => {
    setNumCorrect((numCorrect) => numCorrect + 1);
  };

  if (gameState === "playing") {
    return (
      <Playing
        elapsedTime={time}
        setNumCorrect={increaseNumCorrect}
        gameState={gameState}
        endGame={endGame}
        setTime={setTime}
      />
    );
  } else if (gameState === "end") {
    return (
      <SessionStats
        action="end"
        elapsedTime={time}
        wordsCorrect={numCorrect}
        retryGame={retryGame}
      />
    );
  }
}

export default WhiteScreen;

WhiteScreen.propTypes = {
  gameState: PropTypes.oneOf(["playing", "end"]),
  retryGame: PropTypes.func,
};
