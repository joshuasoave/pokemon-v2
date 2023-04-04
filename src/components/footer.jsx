import React from "react";

export const Footer = ({ rocketStyle, setRocketStyle }) => {
  const rocketStyleActivate = () => {
    setRocketStyle(true);
  };
  const rocketStyleDeactivate = () => {
    setRocketStyle(false);
  };
  console.log(rocketStyle);
  return (
    <footer>
      {!rocketStyle ? (
        <div className="team-rocket">
          <button type="button" id="rocket-mode" onClick={rocketStyleActivate}>
            Prepare For Trouble
          </button>
        </div>
      ) : (
        <div className="normal-style">
          <button
            type="button"
            id="normal-mode"
            onClick={rocketStyleDeactivate}
          >
            I Choose You!
          </button>
        </div>
      )}
    </footer>
  );
};
