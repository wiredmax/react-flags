import React from "react";
const {PropTypes} = React;
import Flag from "./Flag.js";

const App = React.createClass({
  getInitialState() {
    return {};
  },

  render() {
    return (
      <div>
        <Flag
          name="CA"
          size="ico"
          shiny={true}
        />
      </div>
    );
  }
});

React.render(<App />, document.body);
