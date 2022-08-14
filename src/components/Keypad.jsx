import { makeStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { alphabetArray } from "../utilities/alphabet";

// >> Styles
const useStyles = makeStyles(() => ({}));

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
    <div className="keypad">
      {letters &&
        letters.map((item, index) => {
          const color = usedKeys[item];
          return (
            <div key={index} className={color}>
              <Typography variant="h6"> {item}</Typography>
            </div>
          );
        })}
    </div>
  );
};

export default Keypad;
