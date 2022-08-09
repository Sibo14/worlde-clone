import React from "react";
import { IconButton, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SectionHeading from "../common/SectionHeading";
import CloseIcon from "@material-ui/icons/Close";
import PropTypes from "prop-types";
import clsx from "clsx";

// >> CSS

// >> CSS

/**
 * @param {{
 * open: boolean,
 * close: funciton,
 * title: string,
 * titleVariant: titleVariantTypeDef,
 * width: string,
 * height: string,
 * }} props
 *
 * + `props.open` -  `*REQUIRED` the state variable that determines whether the popup is open or not
 * + `props.close` -  `*REQUIRED` the function that closes the popup
 * + `props.title` -  `*REQUIRED` the title of the popup
 * + `props.titleVariant` -  the variant of the title typography
 * + `props.width` -  the width of the popup `1980 x 1080 and UP`
 * + `props.height` -  the height of the popup `1980 x 1080 and UP`
 

 * @description A standardised popup that can display content
 * + [Cascading Sizing](https://v4.mui.com/customization/breakpoints/#breakpoints) - the sizing will cascade down media queries from the highest one that you have provided
 *
 * @returns a standardised popup with your content in it
 *
 * @example
 * <Popup
 *  open={showProductInfoPopup} // required
 *  close={closeProductInfoPopup} // required
 *  title="Quick Product Search" // required
 *  width="65%" // optional
 *  height="80%" // optional

 * >
 *   <QuickSearchPopupContent />
 * </Popup>
 *
 * @typedef {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'subtitle1' | 'subtitle2' | 'button' | 'caption' | 'overline' | 'inherit'} titleVariantTypeDef
 * @typedef {'info' | 'warning' | 'error' | 'help' | 'success'} tooltipVariantTypeDef
 * @typedef {'default' | 'success' | 'warning' | 'error' | 'primary' | 'secondary'} tooltipColorTypeDef
 */
const Popup = ({
  children,
  open,
  close,
  title,
  titleVariant,
  width = "50%",
  height = "70%",
}) => {
  // >> Styles
  const useStyles = makeStyles(() => ({
    modal: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "none",
    },
    modalContainer: {
      display: "grid",
      gridTemplateAreas: `
      'header-section'
      'content-section'
      `,
      gridTemplateColumns: "1fr",
      gridTemplateRows: "auto 1fr",
      background: "#121213",
      outline: "none",
      borderRadius: "4px",
      boxShadow: "0 6px 12px rgb(0 0 0 / 18%)",
      boxSizing: "border-box",
      padding: "10px",
      width: width,
      height: height,
    },
    // >> Header Section
    headerSection: {
      gridArea: "header-section",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingBottom: "5px",
    },
    headingContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    },
    // >> Content Section
    contentSection: {
      gridArea: "content-section",
      width: "100%",
      height: "100%",
      overflow: "auto",
    },
    closeIcon: {
      color: "#fff",
    },
  }));
  const classes = useStyles();

  // > RENDER
  return (
    <Modal open={open} className={classes.modal}>
      <div
        className={clsx(classes.modalContainer)}
        // style={{
        //   width: width,
        //   height: height,
        // }}
      >
        <div className={classes.headerSection}>
          <div className={classes.headingContainer}>
            {/* Heading */}
            <SectionHeading text={title} variant={titleVariant} />
            <IconButton className={classes.closeIcon} onClick={close}>
              <CloseIcon />
            </IconButton>
          </div>
          {/* Close Button */}
        </div>

        {/* !!!--- Content ---!!! */}
        <div className={classes.contentSection}>{children}</div>
      </div>
    </Modal>
  );
};

Popup.propTypes = {
  open: PropTypes.oneOf([true, false]).isRequired,
  close: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  titleVariant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "body1",
    "body2",
    "subtitle1",
    "subtitle2",
    "button",
    "caption",
    "overline",
    "inherit",
  ]),
  width: PropTypes.string,
  height: PropTypes.string,
};

export default React.memo(Popup);
