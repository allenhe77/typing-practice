import PropTypes from "prop-types";
function StatsTitle({ title }) {
  return <div>{title}</div>;
}

export default StatsTitle;

StatsTitle.propTypes = {
  title: PropTypes.string,
};
