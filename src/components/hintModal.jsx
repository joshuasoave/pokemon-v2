import React from "react";

export const HintModal = ({ pkmn, closeHintClick, rocketStyle }) => {
  const sprite =
    pkmn && pkmn.sprites && pkmn.sprites.front_default
      ? pkmn.sprites.front_default
      : "";
  const types = pkmn && pkmn.types ? pkmn.types : [];
  const abilities = pkmn && pkmn.abilities ? pkmn.abilities : [];
  return (
    <div class="hint-modal">
      <div
        class={rocketStyle ? "rocket-modal" : "modal-textbox"}
        id="modal-text"
      >
        <div class="sprite">
          <img id="hint-sprite" src={sprite} alt={pkmn.name} />
        </div>
        <div class="typing">
          <h3 id="type-h3">Type:</h3>
          {types.map((type) => {
            return <p>{type.type.name}</p>;
          })}
        </div>
        <div class="abilities">
          <h3 id="ability-h3">Abilities:</h3>
          {abilities.map((ability) => {
            return <p>{ability.ability.name}</p>;
          })}
        </div>

        <button
          type="button"
          id="close-btn"
          class={rocketStyle ? "rocket-btn" : "close-btn"}
          onClick={closeHintClick}
        >
          Close
        </button>
      </div>
    </div>
  );
};
