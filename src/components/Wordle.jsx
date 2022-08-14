import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useEffect } from "react";
import useWordle from "../utilities/hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";

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

  // >> UseEffect
  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect) {
      alert("Congrats You Win!!!");
      window.addEventListener("keyup", handleKeyup);
    }

    if (turn > 5) {
      alert("Unlucky Out Of Guess");
      window.addEventListener("keyup", handleKeyup);
    }

    //Cleanup function to stop multiple instances of key up function
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, isCorrect, turn]);

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
    </div>
  );
};

export default Wordle;
