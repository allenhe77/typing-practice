import "./StartGame.css";
import PropTypes from "prop-types";
function StartGame({ onClick }) {
  return <button onClick={onClick}>Start Game</button>;
}

export default StartGame;

StartGame.propTypes = {
  onClick: PropTypes.func,
};
