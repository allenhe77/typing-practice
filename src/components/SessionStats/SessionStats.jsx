import StatsTitle from "./StatsTitle";
import StatsInfo from "./StatsInfo";
import ActionButton from "../reusable/ActionButton";
import PropTypes, { number, string } from "prop-types";

function SessionStats({ action, elapsedTime, wordsCorrect }) {
  const getWordsPerMin = (num, time) => {
    return (num * (time / 60)).toFixed(1);
  };
  return (
    <div className="white-screen">
      <StatsTitle title="Elapsed Time" />
      <StatsInfo info={elapsedTime} />
      <StatsTitle title="Words Per Minute" />
      <StatsInfo info={getWordsPerMin(wordsCorrect, elapsedTime)} />
      <ActionButton action="retry" />
    </div>
  );
}

export default SessionStats;

SessionStats.propTypes = {
  action: string,
  elapsedTime: number,
  wordsCorrect: PropTypes.oneOfType([string, number]),
};
