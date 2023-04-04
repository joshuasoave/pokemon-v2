import "./App.css";
import React, { useState } from "react";
import { Header } from "./components/header";
import { AboutModal } from "./components/aboutModal";
import { WtpButton } from "./components/wtpbutton";
import { CurrentPokemon } from "./components/currentPokemon";
import { HintModal } from "./components/hintModal";
import { Score } from "./components/score";
import axios from "axios";
import { Results } from "./components/results";
import { Footer } from "./components/footer";

function App() {
  const [showAboutModal, setShowModal] = useState(true);
  const [score, setScore] = useState(0);
  const [totalGuesses, setTotalGuesses] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [showHint, setShowHint] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [rocketStyle, setRocketStyle] = useState(false);

  const closeAbout = () => {
    setShowModal(false);
  };

  const closeHintClick = () => {
    setShowHint(false);
  };

  const showHintClick = () => {
    setShowHint(true);
  };

  const producePokemon = () => {
    //randomize for the amount of pokemon
    let number = Math.floor(Math.random() * 809 + 1);
    //make a ajax call based on that number
    axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`).then((data) => {
      setCurrentPokemon(data.data);
    });
    if (isPlaying !== true) {
      setIsPlaying(true);
    }
  };

  return (
    <div className="App">
      <Header rocketStyle={rocketStyle}></Header>
      <div className="container">
        {showAboutModal ? (
          <AboutModal
            closeAbout={closeAbout}
            rocketStyle={rocketStyle}
          ></AboutModal>
        ) : null}
        <div className="wtp-button">
          {isPlaying ? null : (
            <WtpButton
              setIsPlaying={setIsPlaying}
              setCurrentPokemon={setCurrentPokemon}
              producePokemon={producePokemon}
              rocketStyle={rocketStyle}
            ></WtpButton>
          )}
        </div>
        {isPlaying && !showResults ? (
          <>
            <Score
              score={score}
              rocketStyle={rocketStyle}
              totalGuesses={totalGuesses}
            ></Score>
            <CurrentPokemon
              pkmn={currentPokemon}
              showHintClick={showHintClick}
              score={score}
              totalGuesses={totalGuesses}
              setTotalGuesses={setTotalGuesses}
              setScore={setScore}
              producePokemon={producePokemon}
              userAnswer={userAnswer}
              setUserAnswer={setUserAnswer}
              setIsAnswerCorrect={setIsAnswerCorrect}
              setShowResults={setShowResults}
              rocketStyle={rocketStyle}
            ></CurrentPokemon>
          </>
        ) : null}
        {showHint ? (
          <HintModal
            pkmn={currentPokemon}
            closeHintClick={closeHintClick}
            rocketStyle={rocketStyle}
          ></HintModal>
        ) : null}
        {isPlaying && showResults ? (
          <Results
            pkmn={currentPokemon}
            isAnswerCorrect={isAnswerCorrect}
            userAnswer={userAnswer}
            setShowResults={setShowResults}
            producePokemon={producePokemon}
            setUserAnswer={setUserAnswer}
            rocketStyle={rocketStyle}
          ></Results>
        ) : null}
        <Footer rocketStyle={rocketStyle} setRocketStyle={setRocketStyle} />
      </div>
    </div>
  );
}

export default App;
