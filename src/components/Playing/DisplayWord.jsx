import PropTypes from "prop-types";
import "./DisplayWord.css";
function DisplayWord({ word }) {
  return <div className="display-word">{word}</div>;
}

export default DisplayWord;

DisplayWord.propTypes = {
  word: PropTypes.string,
};
