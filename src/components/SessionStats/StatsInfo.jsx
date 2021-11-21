import PropTypes from "prop-types";

function StatsInfo({ info }) {
  return <div>{info}</div>;
}

export default StatsInfo;

StatsInfo.propTypes = {
  info: PropTypes.string,
};
