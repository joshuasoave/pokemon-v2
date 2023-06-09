import React from "react";

export const Results = ({
  isAnswerCorrect,
  pkmn,
  userAnswer,
  setShowResults,
  producePokemon,
  setUserAnswer,
  rocketStyle,
}) => {
  const closeResults = () => {
    setShowResults(false);
    producePokemon();
    setUserAnswer();
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      {isAnswerCorrect ? (
        <div
          id="correct-answer results-modal"
          className={
            rocketStyle ? "correct-answer-rocket" : "correct-answer-normal"
          }
        >
          <p>
            Correct! It's
            <span clasName="name"> {capitalizeFirstLetter(pkmn.name)}</span>
          </p>
          <p>You're becoming the very best!</p>
        </div>
      ) : (
        <div
          id="wrong-answer results-modal"
          className={
            rocketStyle ? "wrong-answer-rocket" : "wrong-answer-normal"
          }
        >
          <p>
            No, it's not <span> {userAnswer}</span>
          </p>
          <p>
            This Pokemon's name is
            <span className="name"> {capitalizeFirstLetter(pkmn.name)}</span>
          </p>
          <p>You'll get it right next time!</p>
        </div>
      )}
      <button
        className={rocketStyle ? "rocket-btn" : "close-btn"}
        onClick={closeResults}
      >
        Next
      </button>
    </>
  );
};
