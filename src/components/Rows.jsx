import { makeStyles } from "@material-ui/styles";
import React from "react";
import clsx from "clsx";
import { Typography, useMediaQuery } from "@mui/material";

const Rows = ({ guess, currentGuess }) => {
  // >> Media Query
  const isScreen1620 = useMediaQuery("(min-width:1620px)");
  const isScreen1366 = useMediaQuery("(max-width:1366px)");
  const boxSize = isScreen1620 ? "5rem" : "4rem";
  const multiBoxSize = isScreen1366 ? "3rem" : boxSize;

  // >> Styles
  const useStyles = makeStyles(() => ({
    rowContainer: {
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      width: "100%",
      height: "100%",
    },

    row: {
      display: "flex",
      width: multiBoxSize,
      height: multiBoxSize,
      border: "1px solid #bbb",
      margin: "4px",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      lineHeight: "2rem",
      textTransform: "uppercase",
      fontWeight: "bold",
      fontSize: "2.5rem",
      "&:nth-child(2)": {
        //never used before basically puts a delay on each squares animation, keyframes were assigned in index.css
        animationDelay: "0.4s",
      },
      "&:nth-child(3)": {
        animationDelay: "0.6s",
      },
      "&:nth-child(4)": {
        animationDelay: "0.8s",
      },
      "&:nth-child(5)": {
        animationDelay: "1.0s",
      },
    },

    green: {
      background: "#5ac85a",
      borderColor: "#5ac85a",
      animation: "flip 0.8s forwards",
    },
    grey: {
      background: "#a1a1a1",
      borderColor: "#a1a1a1",
      animation: "flip 0.8s forwards",
    },
    orange: {
      background: "#FF7F50",
      borderColor: "#FF7F50",
      animation: "flip 0.8s forwards",
    },
  }));
  // >> Styles
  const classes = useStyles();

  // >> Components

  // >> Functions
  if (guess) {
    return (
      <div className={classes.rowContainer}>
        {guess.map((item, index) => {
          let colorRow = item.color;

          return (
            <div
              key={index}
              className={clsx(
                classes.row,
                colorRow === "grey"
                  ? classes.grey
                  : colorRow === "green"
                  ? classes.green
                  : colorRow === "orange"
                  ? classes.orange
                  : classes.grey
              )}
            >
              <Typography align="center" variant="h3">
                {item.key}
              </Typography>
            </div>
          );
        })}
      </div>
    );
  }

  if (currentGuess) {
    let letters = currentGuess.split("");
    return (
      <div className={classes.rowContainer}>
        {letters?.map((item, index) => (
          <div key={index} className={clsx(classes.row, classes.filled)}>
            {item}
          </div>
        ))}
        {[...Array(5 - letters?.length)].map((item, index) => (
          <div key={index} className={classes.row}></div>
        ))}
      </div>
    );
  }

  // >> Render
  return (
    <div className={classes.rowContainer}>
      <div className={classes.row}></div>
      <div className={classes.row}></div>
      <div className={classes.row}></div>
      <div className={classes.row}></div>
      <div className={classes.row}></div>
    </div>
  );
};

export default Rows;
