import PropTypes from "prop-types";
function DisplayWord({ word }) {
  return <div>{word}</div>;
}

export default DisplayWord;

DisplayWord.propTypes = {
  word: PropTypes.string,
};
