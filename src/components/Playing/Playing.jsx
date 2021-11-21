import DisplayWord from "./DisplayWord";
import EnterWord from "./EnterWord";
import TimeElapsed from "./TimeElapsed";
import ActionButton from "../reusable/ActionButton";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
function Playing({ gameState, elapsedTime }) {
  const [words, setWords] = useState([]);
  const [currWord, setCurrWord] = useState("");
  const [enteredWord, setEnteredWord] = useState("");
  const [correct, setCorrect] = useState(true);
  useEffect(() => {
    const fetchWords = async () => {
      return fetch(
        "https://random-word-api.herokuapp.com/word?number=500"
      ).then((r) => r.json());
    };
    fetchWords().then((newWords) => {
      setWords((words) => newWords);
    });
  }, [gameState]);
  useEffect(() => {
    const getRandomWord = () => {
      setCurrWord(_.sample(words));
    };
    getRandomWord();
    setEnteredWord("");
  }, [correct, words]);

  const handleEnterWord = (e) => {
    setEnteredWord(e.target.value);
  };

  useEffect(() => {
    const checkCorrectness = () => {
      return [...enteredWord].reduce((prev, curr, index) => {
        return curr === currWord[index] && prev;
      }, true);
    };
    setCorrect(checkCorrectness());
  }, [enteredWord]);

  return (
    <div className="white-screen">
      <TimeElapsed elapsedTime={elapsedTime} />
      <DisplayWord word={currWord} />
      <EnterWord handleEnterWord={handleEnterWord} word={enteredWord} />
      <ActionButton action="end" />
    </div>
  );
}

export default Playing;

Playing.propTypes = {
  gameState: PropTypes.exact("playing"),
};
