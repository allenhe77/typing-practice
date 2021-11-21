import PropTypes from "prop-types";
import "./StatsTitle.css";
function StatsTitle({ title }) {
  return <div className="stats-title">{title}</div>;
}

export default StatsTitle;

StatsTitle.propTypes = {
  title: PropTypes.string,
};
