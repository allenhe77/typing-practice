import Playing from "./Playing/Playing";
import SessionStats from "./SessionStats/SessionStats";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./WhiteScreen.css";
function WhiteScreen({ gameState }) {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const elapseTimer = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    return () => clearInterval(elapseTimer);
  }, [gameState]);
  if (gameState === "playing") {
    return <Playing elapsedTime={time} />;
  } else if (gameState === "end") {
    return <SessionStats />;
  }
}

export default WhiteScreen;

WhiteScreen.propTypes = {
  gameState: PropTypes.oneOf(["playing", "end"]),
};
