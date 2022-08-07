import { makeStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { alphabetArray } from "../utilities/alphabet";

// >> Styles
const useStyles = makeStyles(() => ({
  keypad: {
    maxWidth: "500px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  eachKey: {
    margin: "5px",
    width: "40px",
    height: "50px",
    background: "#eee",
    display: "flex",
    borderRadius: "6px",
    lineHeight: "30px",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
  green: {
    background: "#5ac85a",
    color: "#fff",
    transition: "all 0.3s ease-in",
  },
  grey: {
    background: "#a1a1a1",
    color: "#fff",
    transition: "all 0.3s ease-in",
  },
  orange: {
    background: "#FF7F50",
    color: "#fff",
    transition: "all 0.3s ease-in",
  },
}));

const Keypad = ({ usedKeys }) => {
  // >> Styles
  const classes = useStyles();
  // >> State
  const [letters, setLetters] = useState(null);

  // >> UseEffect
  useEffect(() => {
    setLetters(alphabetArray);
  }, []);
  // >> Render
  return (
    <div className={classes.keypad}>
      {letters &&
        letters.map((item, index) => {
          return (
            <div key={index} className={clsx(classes.eachKey)}>
              <Typography variant="h6"> {item}</Typography>
            </div>
          );
        })}
    </div>
  );
};

export default Keypad;
