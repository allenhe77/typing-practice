import PropTypes from "prop-types";
import "./ActionButton.css";
function ActionButton({ action, endGame, retryGame }) {
  switch (action) {
    case "end":
      return (
        <button className="action-button" onClick={endGame}>
          End Session
        </button>
      );

    case "retry":
      return (
        <button className="action-button" onClick={retryGame}>
          Retry
        </button>
      );
    default:
  }
}

export default ActionButton;

ActionButton.propTypes = {
  action: PropTypes.oneOf(["end", "retry"]),
  endGame: PropTypes.func,
  retryGame: PropTypes.func,
};
