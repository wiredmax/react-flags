import React, {PropTypes} from "react";
import availableFlags from "./flags.json5";

export default React.createClass({
  /**
   * React properties
   */

  propTypes: {
    // Alternative text of the flag <img> HTML tag.
    alt: PropTypes.string,

    // File format of the flag.
    format: PropTypes.oneOf(["png", "icns", "ico"]),

    // Height of the flag <img> HTML tag.
    height: PropTypes.number,

    // Name of country or region for this flag.
    name: PropTypes.string,

    // Size of the country flag
    pngSize: PropTypes.oneOf([16, 24, 32, 48, 64]),

    // Size of the country flag
    shiny: PropTypes.bool,

    // Width of the flag <img> HTML tag.
    width: PropTypes.number,
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

    const folder = (
      this.props.format === "icns" ||
      this.props.format === "ico"
    ) ? this.props.format : this.props.pngSize;

    const altText = this.props.alt ? this.props.alt : this.props.name;

    const name = this.props.name.charAt(0) === "_" ?
      this.props.name : this.props.name.toUpperCase();

    const flag = ~availableFlags.flags.indexOf(name) ?
      name : "_unknown";

    return (
      <img
        alt={altText}
        src={
          "../vendor/flags/flags-iso/" +
          type +
          "/" +
          folder +
          "/" +
          flag +
          "." +
          this.props.format
        }
        width={this.props.width}
        height={this.props.height}
      />
    );
  }
});
