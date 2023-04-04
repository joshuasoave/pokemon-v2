import React from "react";

export const AboutModal = ({ closeAbout, rocketStyle }) => {
  return (
    <div
      className={rocketStyle ? "rocket-modal" : "about-modal"}
      id="about-modal"
    >
      <div className="modal-textbox" id="about-text">
        <p>This is a game to test your Pokemon knowledge.</p>{" "}
        <p id="btm-text">
          Click on the Who's That Pokemon button to start your journey!
        </p>
        <button
          type="button"
          id="close-abt"
          className={rocketStyle ? "rocket-close" : "close-btn"}
          onClick={closeAbout}
        >
          Close
        </button>
      </div>
    </div>
  );
};
