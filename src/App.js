import React, { useCallback, useEffect, useState } from "react";
import dictionaryArray from "./utilities/dictionary";
import _ from "lodash";
import { makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import Wordle from "./components/Wordle";
import HelpIcon from "@material-ui/icons/Help";
import { IconButton } from "@mui/material";
import HowToPlayPopup from "./components/popup/HowToPlayPopup";
import EventEmitter from "./utilities/EventEmitter";

// >> Styles

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    height: "100vh",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "5%",
  },
  mainContentArea: {
    width: "100%",
    height: "95%",
  },
}));

const App = () => {
  // >> State
  const [wordsArrary, setWordsArray] = useState(null);
  const [wordOfTheDay, setWordOfTheDay] = useState(null);

  // >> Media
  const isScreen1024 = useMediaQuery("(min-width:1024px)");

  // >> API

  // >> Functions

  // funtion random selects 10 random words from the dictionary array using lodash
  const getRandomWords = useCallback(() => {
    let shuffleWords = _.sampleSize(dictionaryArray, 10);

    // Stores random 10 words
    setWordsArray(shuffleWords);

    // From the 10 words select 1 word
    setWordOfTheDay(_.sample(shuffleWords, 1));
  }, []);

  // Gives us access to the state and function found in useWorld component

  // >> useEffect
  useEffect(() => {
    getRandomWords();
  }, [getRandomWords]);

  // >> Styles
  const classes = useStyles();

  // >> Render
  return (
    <div className={classes.container}>
      {isScreen1024 ? (
        <>
          <div className={classes.header}>
            <div></div>
            <div>
              <Typography align="center" variant="h5">
                Word Puzzle
              </Typography>
            </div>
            <div>
              <IconButton onClick={() => EventEmitter.emit("event_show_hint")}>
                <HelpIcon />
              </IconButton>
            </div>
          </div>
          <div className={classes.mainContentArea}>
            {/* only show wordle component when a word of the day is generated */}
            {wordOfTheDay && <Wordle word={wordOfTheDay} />}
          </div>
          <HowToPlayPopup />
        </>
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">
            Mobile view of this website is still under construction please view
            on a laptop to play the wordle clone
          </Typography>
        </div>
      )}
    </div>
  );
};

export default App;
