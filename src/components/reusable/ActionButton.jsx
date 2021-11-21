import PropTypes from "prop-types";
function ActionButton({ action }) {
  return <div>{action}</div>;
}

export default ActionButton;

ActionButton.propTypes = {
  action: PropTypes.oneOf(["end", "retry"]),
};
