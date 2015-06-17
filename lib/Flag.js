"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var PropTypes = _react2["default"].PropTypes;

exports["default"] = _react2["default"].createClass({
  displayName: "Flag",

  /**
   * React properties
   */

  propTypes: {
    // Name of country or region for this flag.
    name: PropTypes.string,

    // Size of the country flag
    size: PropTypes.oneOf(["16", "24", "32", "48", "64", "icns", "ico"]),

    // Size of the country flag
    shiny: PropTypes.bool
  },

  /**
   * React lifecycle
   */

  getDefaultProps: function getDefaultProps() {
    return {
      // Default flag.
      name: "_unknown",

      // Default size of 32 pixels.
      size: "32",

      // Shiny flags (Default is flat)
      shiny: false
    };
  },

  getInitialState: function getInitialState() {
    return {};
  },

  /**
   * React render
   */

  render: function render() {
    var type = this.props.shiny ? "shiny" : "flat";

    var extension = _lodash2["default"].isNaN(parseInt(this.props.size)) ? this.props.size : "png";

    return _react2["default"].createElement(
      "span",
      null,
      _react2["default"].createElement("img", {
        src: "../vendor/flags/flags-iso/" + type + "/" + this.props.size + "/" + this.props.name + "." + extension
      })
    );
  }
});
module.exports = exports["default"];
//# sourceMappingURL=Flag.js.map