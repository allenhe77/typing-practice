import Playing from "./Playing/Playing";
import SessionStats from "./SessionStats/SessionStats";
import PropTypes from "prop-types";
function WhiteScreen({ gameState }) {
  if (gameState === "playing") {
    return <Playing />;
  } else if (gameState === "end") {
    return <SessionStats />;
  }
}

export default WhiteScreen;

WhiteScreen.propTypes = {
  gameState: PropTypes.oneOf(["playing", "end"]),
};
