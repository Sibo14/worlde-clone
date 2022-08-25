import React, { useState, useEffect, useCallback } from "react";
import Popup from "./common/Popup";
import GameStatePopup from "./popup/GameStatePopup";

const GameState = ({ isCorrect, turn, word }) => {
  const [showModal, setShowModal] = useState(false);

  // >> UseEffect
  useEffect(() => {
    console.log(isCorrect);
    console.log(turn);

    if (isCorrect) {
      setTimeout(() => {
        setShowModal(true);
      }, 2000);
    }

    if (turn > 5 && !isCorrect) {
      setTimeout(() => {
        setShowModal(true);
      }, 2000);
    }
  }, [isCorrect, turn]);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);
  return (
    <Popup
      title="Thank You For Playing!"
      height="30%"
      width="30%"
      open={showModal}
      close={closeModal}
    >
      <GameStatePopup isCorrect={isCorrect} turn={turn} solution={word} />
    </Popup>
  );
};

export default GameState;
