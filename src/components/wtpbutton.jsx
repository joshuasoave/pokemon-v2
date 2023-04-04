import React from "react";

export const WtpButton = ({ producePokemon, rocketStyle }) => {
  return (
    <button
      type="button"
      className={rocketStyle ? "rocket-randomizer" : "normal-randomizer"}
      id="randomizer"
      onClick={producePokemon}
    >
      Who's That Pokemon?
    </button>
  );
};
