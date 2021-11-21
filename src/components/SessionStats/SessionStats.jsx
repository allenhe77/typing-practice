import StatsTitle from "./StatsTitle";
import StatsInfo from "./StatsInfo";
import ActionButton from "../reusable/ActionButton";

function SessionStats() {
  return (
    <div>
      <StatsTitle title="a title" />
      <StatsInfo info="info" />
      <StatsTitle title="a title" />
      <StatsInfo info="info" />
      <ActionButton action="end" />
    </div>
  );
}

export default SessionStats;
