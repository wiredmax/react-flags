(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-flags"] = factory(require("react"));
	else
		root["react-flags"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _flagsJson5 = __webpack_require__(3);

	var _flagsJson52 = _interopRequireDefault(_flagsJson5);

	exports["default"] = _react2["default"].createClass({
	  displayName: "Flag",

	  /**
	   * React properties
	   */

	  propTypes: {
	    // Alternative text of the flag <img> HTML tag.
	    alt: _react.PropTypes.string,

	    // Base path to the content of /vendor
	    basePath: _react.PropTypes.string,

	    // File format of the flag.
	    format: _react.PropTypes.oneOf(["png", "icns", "ico"]),

	    // Height of the flag <img> HTML tag.
	    height: _react.PropTypes.number,

	    // Name of country or region for this flag.
	    name: _react.PropTypes.string,

	    // Size of the PNG country flag
	    pngSize: _react.PropTypes.oneOf([16, 24, 32, 48, 64]),

	    // Shiny or Flat
	    shiny: _react.PropTypes.bool,

	    // Width of the flag <img> HTML tag.
	    width: _react.PropTypes.number
	  },

	  /**
	   * React lifecycle
	   */

	  getDefaultProps: function getDefaultProps() {
	    return {
	      basePath: "/img/flags",

	      name: "_unknown",

	      format: "png",

	      pngSize: 32,

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

	    var name = this.props.name.charAt(0) === "_" ? this.props.name : this.props.name.toUpperCase();

	    var flag = ~_flagsJson52["default"].flags.indexOf(name) ? name : "_unknown";

	    return _react2["default"].createElement("img", {
	      alt: altText,
	      src: this.props.basePath + "/flags-iso/" + type + "/" + folder + "/" + flag + "." + this.props.format,
	      width: this.props.width,
	      height: this.props.height
	    });
	  }
	});
	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
		"flags": [
			"_abkhazia",
			"_basque-country",
			"_british-antarctic-territory",
			"_commonwealth",
			"_england",
			"_gosquared",
			"_kosovo",
			"_mars",
			"_nagorno-karabakh",
			"_nato",
			"_northern-cyprus",
			"_olympics",
			"_red-cross",
			"_scotland",
			"_somaliland",
			"_south-ossetia",
			"_united-nations",
			"_unknown",
			"_wales",
			"AD",
			"AE",
			"AF",
			"AI",
			"AL",
			"AM",
			"AN",
			"AO",
			"AQ",
			"AR",
			"AS",
			"AT",
			"AU",
			"AW",
			"AX",
			"AZ",
			"BA",
			"BB",
			"BD",
			"BE",
			"BF",
			"BG",
			"BH",
			"BI",
			"BJ",
			"BL",
			"BM",
			"BN",
			"BO",
			"BR",
			"BS",
			"BT",
			"BW",
			"BY",
			"BZ",
			"CA",
			"CC",
			"CD",
			"CF",
			"CG",
			"CH",
			"CI",
			"CK",
			"CL",
			"CM",
			"CN",
			"CO",
			"CR",
			"CU",
			"CV",
			"CW",
			"CX",
			"CY",
			"CZ",
			"DE",
			"DJ",
			"DK",
			"DM",
			"DO",
			"DZ",
			"EC",
			"EE",
			"EG",
			"EH",
			"ER",
			"ES",
			"ET",
			"EU",
			"FI",
			"FJ",
			"FK",
			"FM",
			"FO",
			"FR",
			"GA",
			"GB",
			"GD",
			"GE",
			"GG",
			"GH",
			"GI",
			"GL",
			"GM",
			"GN",
			"GQ",
			"GR",
			"GS",
			"GT",
			"GU",
			"GW",
			"GY",
			"HK",
			"HN",
			"HR",
			"HT",
			"HU",
			"ID",
			"IE",
			"IL",
			"IM",
			"IN",
			"IQ",
			"IR",
			"IS",
			"IT",
			"JE",
			"JM",
			"JO",
			"JP",
			"KE",
			"KG",
			"KH",
			"KI",
			"KM",
			"KN",
			"KP",
			"KR",
			"KW",
			"KY",
			"KZ",
			"LA",
			"LB",
			"LC",
			"LI",
			"LK",
			"LR",
			"LS",
			"LU",
			"LV",
			"LY",
			"MA",
			"MC",
			"MD",
			"ME",
			"MF",
			"MG",
			"MH",
			"MK",
			"ML",
			"MM",
			"MN",
			"MO",
			"MP",
			"MQ",
			"MR",
			"MS",
			"MT",
			"MU",
			"MV",
			"MW",
			"MX",
			"MY",
			"MZ",
			"NA",
			"NC",
			"NE",
			"NG",
			"NI",
			"NL",
			"NO",
			"NP",
			"NR",
			"NU",
			"NZ",
			"OM",
			"PA",
			"PE",
			"PF",
			"PG",
			"PH",
			"PK",
			"PL",
			"PN",
			"PR",
			"PS",
			"PT",
			"PW",
			"PY",
			"QA",
			"RO",
			"RS",
			"RU",
			"RW",
			"SA",
			"SB",
			"SD",
			"SE",
			"SG",
			"SH",
			"SI",
			"SK",
			"SL",
			"SM",
			"SN",
			"SO",
			"SR",
			"SS",
			"ST",
			"SV",
			"SY",
			"SZ",
			"TC",
			"TD",
			"TF",
			"TG",
			"TH",
			"TJ",
			"TK",
			"TL",
			"TM",
			"TN",
			"TO",
			"TR",
			"TT",
			"TW",
			"TZ",
			"UA",
			"UG",
			"US",
			"UY",
			"UZ",
			"VA",
			"VC",
			"VE",
			"VG",
			"VI",
			"VN",
			"VU",
			"WF",
			"WS",
			"YE",
			"YT",
			"ZA",
			"ZM",
			"ZW"
		]
	}

/***/ }
/******/ ])
});
;