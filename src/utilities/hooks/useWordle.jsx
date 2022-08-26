import { useSnackbar } from "notistack";
import { useState } from "react";
import dictionaryArray from "../dictionary";

const useWordle = (word) => {
  // >> State
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]); // each guess is an array, create an array with 6 empty spaces
  const [history, setHistory] = useState([]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({}); // {a: 'green' , b:'yellow', c:'grey'}

  // >> Snackbar
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  // >> Functions

  //  format a guess into an array of letter objects
  // e.g [{key: 'a', color: 'yellow'}]

  const formatGuess = () => {
    let wordsArray = [...word];
    let formattedGuess = [...currentGuess].map((item) => {
      return { key: item, color: "grey" };
    });

    // find any green letters
    // find where the formatted array equals the same letter in the words array and make it green
    formattedGuess.forEach((item, index) => {
      if (wordsArray[index] === item.key) {
        formattedGuess[index].color = "green";
        wordsArray[index] = null;
      }
    });

    // find any orange letters
    // dont overwrite green letters
    formattedGuess.forEach((item, index) => {
      if (wordsArray.includes(item.key) && item.color !== "green") {
        formattedGuess[index].color = "orange";
        wordsArray[wordsArray.indexOf(item.key)] = null;
      }
    });

    return formattedGuess;
  };

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state

  const addNewGuess = (formattedGuess) => {
    if (currentGuess === word) {
      setIsCorrect(true);
    }

    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });
    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess];
    });

    setTurn((prevTurn) => {
      return prevTurn + 1;
    });
    setUsedKeys((prevUsedKeys) => {
      let newKeys = { ...prevUsedKeys };
      formattedGuess.forEach((l) => {
        const currentColor = newKeys;

        if (l.color === "green") {
          newKeys[l.key] = "green";
          return;
        }
        if (l.color === "orange" && currentColor !== "green") {
          newKeys[l.key] = "orange";
          return;
        }
        if (
          l.color === "grey" &&
          currentColor !== "green" &&
          currentColor !== "orange"
        ) {
          newKeys[l.key] = "grey";
          return;
        }
      });
      return newKeys;
    });
    setCurrentGuess("");
  };

  // handle keyup event & track current guess
  // if user presses enter, add the new guess

  const handleKeyup = ({ key }) => {
    if (key === "Enter") {
      // only add guess turn is < 5
      // no duplicates

      if (turn > 5) {
        enqueueSnackbar("Guesses done", { variant: "warning" });
        return;
      }

      if (history.includes(currentGuess)) {
        enqueueSnackbar("already tried word", { variant: "error" });
        return;
      }

      if (currentGuess.length !== 5) {
        enqueueSnackbar("must be 5 letters", { variant: "error" });
        return;
      }

      if (!dictionaryArray.includes(currentGuess)) {
        enqueueSnackbar("Please enter a valid word", { variant: "error" });
        return;
      }

      const formatted = formatGuess();
      addNewGuess(formatted);
    }

    // If key === backspace, remove the last entered value from the string
    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }

    // regualar expression to only store letters and not other key presses
    // Only store entered value if below 5 characters
    if (/^[A-Za-z]$/.test(key) && currentGuess.length < 5) {
      setCurrentGuess((prev) => {
        return prev + key;
      });
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup, usedKeys };
};

export default useWordle;
