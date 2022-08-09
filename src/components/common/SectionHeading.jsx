import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

// >> CSS
const useStyles = makeStyles((theme) => ({
  headingContainer: {
    display: "flex",
    alignItems: "center",
    // justifyContent: 'center',
  },
  headingText: {
    width: "fit-content",
    borderBottom: `3px solid ${theme.palette.primary.main}`,
    color: "#fff",
  },
}));
// >> CSS

/**
 * @param {{ text: string,
 * variant: variantTypeDef,

 * }} props
 *
 * + `props.text` - `*Required` the text to display in the heading
 * + `props.variant` - the [`MUI Typography`](https://v4.mui.com/components/typography/#component) variant

 * @typedef {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'subtitle1' | 'subtitle2' | 'button' | 'caption' | 'overline' | 'inherit'} variantTypeDef
 * @typedef {'info' | 'warning' | 'error' | 'help' | 'success'} tooltipVariantTypeDef
 * @typedef {'default' | 'success' | 'warning' | 'error' | 'primary' | 'secondary'} tooltipColorTypeDef
 *
 * @returns a heading component
 *
 * @example
 * <SectionHeading text='Products' />
 */
const SectionHeading = ({ text, variant = "h5" }) => {
  // >> Styles
  const classes = useStyles();

  // > RENDER
  return (
    <div className={classes.headingContainer}>
      {/* Heading */}
      <Typography variant={variant} className={classes.headingText}>
        {text}
      </Typography>
    </div>
  );
};

// >> PropTypes
SectionHeading.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf([
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
};

export default React.memo(SectionHeading);
