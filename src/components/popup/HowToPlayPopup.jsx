import { makeStyles } from "@material-ui/styles";
import Popup from "../common/Popup";
import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import hintIMG from "../../resources/wordle.png";
import EventEmitter from "../../utilities/EventEmitter";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  imgContainer: {
    width: "90%",
    height: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "auto",
  },
}));

const HowToPlayPopup = () => {
  // >> Styles
  const classes = useStyles();
  // >> State
  const [showHowToPlayPopup, setShowHowToPlayPopup] = useState(true);
  // >> Functions
  const closePopup = useCallback(() => {
    setShowHowToPlayPopup(false);
  }, []);
  const openPopup = useCallback(() => {
    window.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        setShowHowToPlayPopup(false);
        return;
      }
    });
    setShowHowToPlayPopup(true);
  }, []);

  useEffect(() => {
    const eventListner_show_hint = EventEmitter.addListener(
      "event_show_hint",
      openPopup
    );
    return () => {
      eventListner_show_hint.remove();
    };
  }, [openPopup]);
  return (
    <Popup
      title="How To Play"
      height="60%"
      width="30%"
      open={showHowToPlayPopup}
      close={closePopup}
    >
      <div className={classes.container}>
        <div className={classes.imgContainer}>
          <img src={hintIMG} alt="" className={classes.img} />
        </div>
      </div>
    </Popup>
  );
};

export default HowToPlayPopup;
