import "./App.css";
import React, { useState } from "react";
import { Header } from "./components/header";
import { AboutModal } from "./components/aboutModal";
import { WtpButton } from "./components/wtpbutton";
import { CurrentPokemon } from "./components/currentPokemon";

function App() {
  const [showModal, setShowModal] = useState(true);
  const [score, setScore] = useState(0);
  const [totalGuesses, setTotalGuesses] = useState(0);
  const [currentPokemon, setCurrentPokemon] = useState({});

  const openAbout = () => {
    setShowModal(true);
  };

  const closeAbout = () => {
    setShowModal(false);
  };
  return (
    <div className="App">
      <Header openAbout={openAbout}></Header>
      <div className="container">
        {showModal ? <AboutModal closeAbout={closeAbout}></AboutModal> : ""}
        <div className="wtp-button">
          <WtpButton setCurrentPokemon={setCurrentPokemon}></WtpButton>
        </div>
        <CurrentPokemon pkmn={currentPokemon}></CurrentPokemon>
      </div>
    </div>
  );
}

export default App;
