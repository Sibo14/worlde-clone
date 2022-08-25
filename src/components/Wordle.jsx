import { makeStyles } from "@material-ui/styles";
import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import useWordle from "../utilities/hooks/useWordle";
import Popup from "./common/Popup";
import GameState from "./GameState";
import Grid from "./Grid";
import Keypad from "./Keypad";
import GameStatePopup from "./popup/GameStatePopup";

// >> Styles
const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    height: "100%",
  },
  contentArea: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  gridArea: {
    width: "100%",
    height: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  keypadArea: {
    width: "100%",
    height: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Wordle = ({ word }) => {
  // >> Styles
  const classes = useStyles();
  // Gives us access to the state and function found in useWorld component
  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } =
    useWordle(word);
  // const [showModal, setShowModal] = useState(false);

  // >> UseEffect
  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    // console.log(isCorrect);
    // console.log(turn);
    // if (isCorrect) {
    //   setTimeout(() => {
    //     setShowModal(true);
    //   }, 2000);
    //   // window.addEventListener("keyup", handleKeyup);
    // }

    // if (turn > 5 && !isCorrect) {
    //   setTimeout(() => {
    //     setShowModal(true);
    //   }, 2000);
    //   // window.addEventListener("keyup", handleKeyup);
    // }

    //Cleanup function to stop multiple instances of key up function
    return () => {
      window.removeEventListener("keyup", handleKeyup);
    };
  }, [handleKeyup]);

  // const closeModal = useCallback(() => {
  //   setShowModal(false);
  // }, []);

  // >> Render
  return (
    <div className={classes.container}>
      <div className={classes.contentArea}>
        <div className={classes.gridArea}>
          <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
        </div>
        <div className={classes.keypadArea}>
          <Keypad usedKeys={usedKeys} />
        </div>
      </div>

      <GameState isCorrect={isCorrect} turn={turn} word={word} />
      {/* {showModal && ( */}
      {/* <Popup
        title="Thank You For Playing!"
        height="30%"
        width="30%"
        open={showModal}
        close={closeModal}
      >
        <GameStatePopup isCorrect={isCorrect} turn={turn} solution={word} />
      </Popup> */}
      {/* )} */}
    </div>
  );
};

export default Wordle;
