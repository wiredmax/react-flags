"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _FlagJs = require("./Flag.js");

var _FlagJs2 = _interopRequireDefault(_FlagJs);

exports["default"] = _react2["default"].createClass({
  displayName: "Flag",

  /**
   * React properties
   */

  propTypes: {
    // Name of country or region for this flag.
    name: _react.PropTypes.string,

    format: _react.PropTypes.oneOf(["png", "icns", "ico"]),

    // Size of the country flag
    pngSize: _react.PropTypes.oneOf([16, 24, 32, 48, 64]),

    // Size of the country flag
    shiny: _react.PropTypes.bool,

    // Width of the flag <img> HTML tag.
    width: _react.PropTypes.number,

    // Height of the flag <img> HTML tag.
    height: _react.PropTypes.number,

    // Alternative text of the flag <img> HTML tag.
    alt: _react.PropTypes.string
  },

  /**
   * React lifecycle
   */

  getDefaultProps: function getDefaultProps() {
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

  render: function render() {
    var type = this.props.shiny ? "shiny" : "flat";

    var folder = this.props.format === "icns" || this.props.format === "ico" ? this.props.format : this.props.pngSize;

    var altText = this.props.alt ? this.props.alt : this.props.name;

    return _react2["default"].createElement("img", {
      alt: altText,
      src: "../vendor/flags/flags-iso/" + type + "/" + folder + "/" + this.props.name + "." + this.props.format,
      width: this.props.width,
      height: this.props.height
    });
  }
});
module.exports = exports["default"];
//# sourceMappingURL=Flag.js.map