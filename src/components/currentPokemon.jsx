import React from "react";

export const CurrentPokemon = ({
  pkmn,
  showHintClick,
  score,
  totalGuesses,
  setScore,
  setTotalGuesses,
  setUserAnswer,
  userAnswer,
  setIsAnswerCorrect,
  setShowResults,
  rocketStyle,
}) => {
  const sprite =
    pkmn && pkmn.sprites && pkmn.sprites.front_default
      ? pkmn.sprites.front_default
      : "";
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userAnswer.toLowerCase() === pkmn.name.toLowerCase()) {
      const newScore = score + 1;
      const newGuesses = totalGuesses + 1;
      setScore(newScore);
      setTotalGuesses(newGuesses);
      setIsAnswerCorrect(true);
    } else {
      const newGuesses = totalGuesses + 1;
      setTotalGuesses(newGuesses);
      setIsAnswerCorrect(false);
    }
    setShowResults(true);
  };
  return (
    <div>
      <div className="current-pokemon">
        {pkmn ? <img id="pkmn-sprite" src={sprite} alt={pkmn.name}></img> : ""}
      </div>
      <div className="hint-div">
        <button
          type="button"
          id="hint"
          className={rocketStyle ? "rocket-hint" : "normal-hint"}
          onClick={showHintClick}
        >
          Hint
        </button>
      </div>
      <div className="submit-form">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="input-holder">
            <input
              type="text"
              onChange={(e) => {
                setUserAnswer(e.target.value);
              }}
              placeholder="Name this pokemon"
              value={userAnswer}
            />
            <button
              type="submit"
              id="submit-btn"
              className={rocketStyle ? "rocket-submit" : "normal-submit"}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
