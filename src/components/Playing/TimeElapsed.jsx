import PropTypes from "prop-types";
import "./TimeElapsed.css";
function TimeElapsed({ elapsedTime }) {
  return (
    <div className="time-elapsed">
      <h4 className="title">Time Elapsed</h4>
      <p className="time">{elapsedTime}</p>
    </div>
  );
}

export default TimeElapsed;

TimeElapsed.propTypes = {
  elapsedTime: PropTypes.number,
};
