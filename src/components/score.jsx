import React from "react";

export const Score = ({ score, totalGuesses }) => {
  console.log(totalGuesses);
  return (
    <div id="score">
      <p id="score-text" className="normal-score">
        Score:
        <span id="current-score">
          {totalGuesses !== 0 ? `${score}/${totalGuesses}` : null}
        </span>
      </p>
    </div>
  );
};
