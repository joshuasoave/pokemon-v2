import React from "react";

export const Score = ({ score, totalGuesses, rocketStyle }) => {
  return (
    <div id="score">
      <p
        id="score-text"
        className={rocketStyle ? "rocket-score" : "normal-score"}
      >
        Score:
        <span id="current-score">
          {totalGuesses !== 0 ? `${score}/${totalGuesses}` : null}
        </span>
      </p>
    </div>
  );
};
