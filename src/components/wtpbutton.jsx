import React from "react";
import axios from "axios";

export const WtpButton = ({ setCurrentPokemon }) => {
  const producePokemon = () => {
    //randomize for the amount of pokemon
    let number = Math.floor(Math.random() * 809 + 1);
    //make a ajax call based on that number
    axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`).then((data) => {
      setCurrentPokemon(data.data);
    });
  };

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
