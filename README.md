# react-flags

Flags of the world react component

## Options

#### `name`: PropTypes.string (default: "_unknown")

The iso code of the country's flag.

#### `size`: PropTypes.string (default: "32")

Size of the flag.

Possible values are:
  - `16`: 16 pixels square png file.
  - `24`: 24 pixels square png file.
  - `32`: 32 pixels square png file.
  - `48`: 48 pixels square png file.
  - `64`: 64 pixels square png file.
  - `icns`: square icns file.
  - `ico`: square ico file.

#### `shiny`: PropTypes.bool (default: `false`)

Display a shiny of flat flag. Default is a flat flag.

## Installation

```bash
npm install --save react-flags
```

## Usage
```js
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

```


## Development and testing

```bash
npm install
npm start
```

Then work on the `Flag.jsx` component in `src`.

## Change logs
See the [change log](https://github.com/wiredmax/react-flags/blob/master/CHANGELOG.md).

## Sources
[GoSquared](https://www.gosquared.com) - [2600 Flag Icon Set](https://www.gosquared.com/resources/flag-icons/)

## License
MIT (See [LICENSE](https://github.com/wiredmax/react-flags/blob/master/LICENSE))