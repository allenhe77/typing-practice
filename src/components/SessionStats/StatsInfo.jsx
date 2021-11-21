import PropTypes, { oneOfType } from "prop-types";
import "./StatsInfo.css";
function StatsInfo({ info }) {
  return <div className="stats-info">{info}</div>;
}

export default StatsInfo;

StatsInfo.propTypes = {
  info: oneOfType([PropTypes.number, PropTypes.string]),
};
