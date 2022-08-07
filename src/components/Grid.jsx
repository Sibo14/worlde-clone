import { makeStyles } from "@material-ui/styles";
import React from "react";
import Rows from "./Rows";

// >> Styles
const useStyles = makeStyles(() => ({
  gridContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
}));

const Grid = ({ turn, currentGuess, guesses }) => {
  // >> Styles
  const classes = useStyles();
  // >> render
  return (
    <div className={classes.gridContainer}>
      {guesses.map((item, index) => {
        // if the turn === row number then print out what the user is typing into the current row
        if (turn === index) {
          return <Rows key={index} currentGuess={currentGuess} />;
        }
        return <Rows key={index} guess={item} />;
      })}
    </div>
  );
};

export default Grid;
