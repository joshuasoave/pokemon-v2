import React from "react";

export const CurrentPokemon = ({ pkmn }) => {
  console.log(pkmn);
  const sprite =
    pkmn && pkmn.sprites && pkmn.sprites.front_default
      ? pkmn.sprites.front_default
      : "";
  return (
    <div className="current-pokemon">
      {pkmn ? <img src={sprite}></img> : ""}
    </div>
  );
};
