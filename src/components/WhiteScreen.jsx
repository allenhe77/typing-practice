import Playing from "./Playing/Playing";
import SessionStats from "./SessionStats/SessionStats";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./WhiteScreen.css";

function WhiteScreen({ gameState, endGame }) {
  const [time, setTime] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);
  useEffect(() => {
    console.log(numCorrect);
  }, [numCorrect]);
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
      <SessionStats action="end" elapsedTime={time} wordsCorrect={numCorrect} />
    );
  }
}

export default WhiteScreen;

WhiteScreen.propTypes = {
  gameState: PropTypes.oneOf(["playing", "end"]),
};
