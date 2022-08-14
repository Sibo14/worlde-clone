import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

// >> CSS
const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  textColor: {
    color: "#fff",
  },
}));

const GameStatePopup = ({ isCorrect, turn, solution }) => {
  // >> Styles
  const classes = useStyles();

  // >> Return
  return (
    <div className={classes.container}>
      {isCorrect && (
        <div>
          <Typography className={classes.textColor}>You Win!</Typography>
          <Typography className={classes.textColor}>
            You found the word in {turn} guesses
          </Typography>
        </div>
      )}
      {!isCorrect && (
        <div>
          <Typography className={classes.textColor}>
            Better Luck Next Time
          </Typography>
          <Typography className={classes.textColor}>
            The word was:
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              {" "}
              {solution}
            </span>
          </Typography>
        </div>
      )}
    </div>
  );
};

export default GameStatePopup;
