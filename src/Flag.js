import React, {PropTypes} from "react";
import Flag from "./Flag.js";

export default React.createClass({
  /**
   * React properties
   */

  propTypes: {
    // Name of country or region for this flag.
    name: PropTypes.string,

    format: PropTypes.oneOf(["png", "icns", "ico"]),

    // Size of the country flag
    pngSize: PropTypes.oneOf([16, 24, 32, 48, 64]),

    // Size of the country flag
    shiny: PropTypes.bool,

    // Width of the flag <img> HTML tag.
    width: PropTypes.number,

    // Height of the flag <img> HTML tag.
    height: PropTypes.number,

    // Alternative text of the flag <img> HTML tag.
    alt: PropTypes.string,
  },

  /**
   * React lifecycle
   */

  getDefaultProps() {
    return {
      // Default flag.
      name: "_unknown",

      // Default format in PNG.
      format: "png",

      // Default size of 32 pixels.
      pngSize: 32,

      // Shiny flags (Default is flat)
      shiny: false,

      width: null,

      height: null,

      alt: null
    };
  },

  /**
   * React render
   */

  render() {
    const type = this.props.shiny ? "shiny" : "flat";

    const folder = (this.props.format === "icns" || this.props.format === "ico") ?
      this.props.format : this.props.pngSize;

    const altText = this.props.alt ? this.props.alt : this.props.name;

    return (
      <img
        alt={altText}
        src={
          "../vendor/flags/flags-iso/" +
          type +
          "/" +
          folder +
          "/" +
          this.props.name +
          "." +
          this.props.format
        }
        width={this.props.width}
        height={this.props.height}
      />
    );
  }
});