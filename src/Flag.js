import React, {PropTypes} from "react";
import availableFlags from "./flags.json5";
import find from "lodash/collection/find";
import countries from "!filter-loader?cca2,cca3!world-countries/countries.json";

export default React.createClass({
  /**
   * React properties
   */

  propTypes: {
    // Alternative text of the flag <img> HTML tag.
    alt: PropTypes.string,

    // Base path to the content of /vendor
    basePath: PropTypes.string,

    // Country or region for this flag. (Legacy)
    country: PropTypes.string,

    // File format of the flag.
    format: PropTypes.oneOf(["png", "icns", "ico"]),

    // Height of the flag <img> HTML tag.
    height: PropTypes.number,

    // Name of country or region for this flag. (Legacy)
    name: PropTypes.string,

    // Size of the PNG country flag
    pngSize: PropTypes.oneOf([16, 24, 32, 48, 64]),

    // Shiny or Flat
    shiny: PropTypes.bool,

    // Width of the flag <img> HTML tag.
    width: PropTypes.number,
  },

  /**
   * React lifecycle
   */

  getDefaultProps() {
    return {
      basePath: "/img/flags",

      country: "_unknown",

      name: null,

      format: "png",

      pngSize: 32,

      shiny: false,

      width: null,

      height: null,

      alt: null
    };
  },

  // Get information about a country using the alpha-3 ISO code.
  cca3To2(cca3) {
    let country = find(countries, {"cca3": cca3});
    return country ? country.cca2 : "_unknown";
  },

  /**
   * React render
   */

  render() {
    let country = this.props.name ? this.props.name : this.props.country;

    country = country.length === 3 ?
      this.cca3To2(country)
    : country;

    const type = this.props.shiny ? "shiny" : "flat";

    const folder = (
      this.props.format === "icns" ||
      this.props.format === "ico"
    ) ? this.props.format : this.props.pngSize;

    const altText = this.props.alt ? this.props.alt : country;

    const file = country.charAt(0) === "_" ?
      country : country.toUpperCase();

    const flag = ~availableFlags.flags.indexOf(file) ?
      file : "_unknown";

    return (
      <img
        alt={altText}
        src={
          this.props.basePath + "/flags-iso/" +
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
