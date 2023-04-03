import React from "react";

export const WtpButton = ({ producePokemon }) => {
  return (
    <button
      type="button"
      className="normal-randomizer"
      id="randomizer"
      onClick={producePokemon}
    >
      Who's That Pokemon?
    </button>
  );
};
