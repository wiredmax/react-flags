import _ from "lodash";
import React from "react";

const PropTypes = React.PropTypes;

export default React.createClass({
  /**
   * React properties
   */

  propTypes: {
    // Name of country or region for this flag.
    name: PropTypes.string,

    // Size of the country flag
    size: PropTypes.oneOf(["16", "24", "32", "48", "64", "icns", "ico"]),

    // Size of the country flag
    shiny: PropTypes.bool,
  },

  /**
   * React lifecycle
   */

  getDefaultProps() {
    return {
      // Default flag.
      name: "_unknown",

      // Default size of 32 pixels.
      size: "32",

      // Shiny flags (Default is flat)
      shiny: false
    };
  },

  getInitialState() {
    return {

    };
  },

  /**
   * React render
   */

  render() {
    let type = this.props.shiny ? "shiny" : "flat";

    let extension = _.isNaN(parseInt(this.props.size)) ?
      this.props.size
    : "png";

    return (
      <span>
        <img
          src={
            "../vendor/flags/flags-iso/" +
            type +
            "/" +
            this.props.size +
            "/" +
            this.props.name +
            "." +
            extension
          }
        />
      </span>
    );
  }
});