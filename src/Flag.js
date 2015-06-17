import React from "react";

const PropTypes = React.PropTypes;

export default React.createClass({
  /**
   * React properties
   */

  propTypes: {
    // Name of country or region for this flag.
    name: PropTypes.string
  },

  /**
   * React lifecycle
   */

  getDefaultProps: function () {
    return {
      // Default flag.
      name: "_unknown",
    };
  },

  getInitialState: function () {
    return {

    };
  },

  /**
   * React render
   */

  render: function() {

  return (
    <span>
      Flag!
    </span>
  );

  }
});