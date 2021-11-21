function EnterWord({ word, handleEnterWord }) {
  return <input value={word} onChange={handleEnterWord} />;
}

export default EnterWord;
