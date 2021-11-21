import PropTypes from "prop-types";
import "./ActionButton.css";
function ActionButton({ action, endGame }) {
  switch (action) {
    case "end":
      return (
        <button className="action-button" onClick={endGame}>
          End Session
        </button>
      );

    case "retry":
      return <button className="action-button">Retry</button>;
    default:
  }
}

export default ActionButton;

ActionButton.propTypes = {
  action: PropTypes.oneOf(["end", "retry"]),
  endGame: PropTypes.func,
};
