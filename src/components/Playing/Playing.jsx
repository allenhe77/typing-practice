import DisplayWord from "./DisplayWord";
import EnterWord from "./EnterWord";
import TimeElapsed from "./TimeElapsed";
import ActionButton from "../reusable/ActionButton";
import { useEffect, useState } from "react";
import PropTypes, { func } from "prop-types";
import _ from "lodash";
function Playing({ gameState, elapsedTime, setNumCorrect, endGame, setTime }) {
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
    const elapseTimer = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    return () => clearInterval(elapseTimer);
  }, [setTime, gameState]);

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

    if (enteredWord === currWord && enteredWord.length > 0) {
      setNumCorrect();
      setCorrect(false);
    } else {
      setCorrect(checkCorrectness());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enteredWord]);

  return (
    <div className="white-screen">
      <TimeElapsed elapsedTime={elapsedTime} />
      <DisplayWord word={currWord} />
      <EnterWord handleEnterWord={handleEnterWord} word={enteredWord} />
      <ActionButton action="end" endGame={endGame} />
    </div>
  );
}

export default Playing;

Playing.propTypes = {
  gameState: PropTypes.string,
  setNumCorrect: PropTypes.func,
  endGame: func,
  setTime: func,
};
