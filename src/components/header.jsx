import React from "react";

export const Header = ({ rocketStyle }) => {
  return (
    <header className={rocketStyle ? "rocket-header" : " normal-header"}>
      <h1>Pokemon Quiz Game</h1>
    </header>
  );
};
