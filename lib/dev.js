"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _FlagJs = require("./Flag.js");

var _FlagJs2 = _interopRequireDefault(_FlagJs);

var PropTypes = _react2["default"].PropTypes;

var App = _react2["default"].createClass({
  displayName: "App",

  getInitialState: function getInitialState() {
    return {};
  },

  render: function render() {
    return _react2["default"].createElement(
      "div",
      null,
      _react2["default"].createElement(_FlagJs2["default"], {
        name: "CA",
        size: "ico",
        shiny: true
      })
    );
  }
});

_react2["default"].render(_react2["default"].createElement(App, null), document.body);
//# sourceMappingURL=dev.js.map