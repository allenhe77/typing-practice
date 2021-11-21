import DisplayWord from "./DisplayWord";
import EnterWord from "./EnterWord";
import TimeElapsed from "./TimeElapsed";
import ActionButton from "../reusable/ActionButton";

function Playing() {
  return (
    <div>
      <DisplayWord word="sample" />
      <EnterWord />
      <TimeElapsed />
      <ActionButton action="end" />
    </div>
  );
}

export default Playing;
