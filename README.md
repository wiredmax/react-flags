# react-flags

Flags of the world react component

[![Dependency Status][deps-badge]][deps]
[![devDependency Status][dev-deps-badge]][dev-deps]
[![peerDependency Status][peer-deps-badge]][peer-deps]

## Options

#### `country`: PropTypes.string (default: `_unknown`)

The ISO 3166-1 alpha-2 or alpha-3 of the country's flag or one of the following:
  - `_abkhazia`
  - `_basque-country`
  - `_british-antarctic-territory`
  - `_commonwealth`
  - `_england`
  - `_kosovo`
  - `_mars`
  - `_nagorno-karabakh`
  - `_nato`
  - `_northern-cyprus`
  - `_olympics`
  - `_red-cross`
  - `_scotland`
  - `_somaliland`
  - `_south-ossetia`
  - `_united-nations`
  - `_unknown`
  - `_wales`

#### `format`: PropTypes.string (default: 32)

  - `png`: square png file.
  - `icns`: square icns file.
  - `ico`: square ico file.

#### `pngSize`: PropTypes.number (default: 32)

Size of the flag if we are using the PNG format.

Possible values are:
  - `16`: 16 pixels
  - `24`: 24 pixels
  - `32`: 32 pixels
  - `48`: 48 pixels
  - `64`: 64 pixels

#### `shiny`: PropTypes.bool (default: `false`)

Display a shiny of flat flag. Default is a flat flag.

#### `width`: PropTypes.number (default: null)

Width of the flag <img> HTML tag.

#### `height`: PropTypes.number (default: null)

Height of the flag <img> HTML tag.

#### `alt`: PropTypes.string (default: `this.props.name`)

Alternative text of the flag <img> HTML tag.

#### `basePath`: PropTypes.string (default: `/img/flags`)

The base path of where the flags files from the vendor folder are in your project.

## Installation

```bash
npm install --save react-flags
```
You need to copy the content of the `vendor` folder to your local project. The default base path is `/img/flags`

## Usage
```js
import React from "react";
import Flag from "react-flags";

const App = React.createClass({
  render() {
    return (
      <div>
        <Flag
          name="CAN"
          format="png"
          pngSize={64}
          shiny={true}
          alt="Canada Flag"
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

## Change log
See the [change log](https://github.com/wiredmax/react-flags/blob/master/CHANGELOG.md).

## Sources
[GoSquared](https://www.gosquared.com) - [2600 Flag Icon Set](https://www.gosquared.com/resources/flag-icons/)

## Author
Maxime Poulin <mpoulin@roux.ca>

## License
MIT (See [LICENSE](https://github.com/wiredmax/react-flags/blob/master/LICENSE))

[deps-badge]: https://david-dm.org/wiredmax/react-flags.svg
[deps]: https://david-dm.org/wiredmax/react-flags

[dev-deps-badge]: https://david-dm.org/wiredmax/react-flags/dev-status.svg
[dev-deps]: https://david-dm.org/wiredmax/react-flags#info=devDependencies

[peer-deps-badge]: https://david-dm.org/wiredmax/react-flags/peer-status.svg
[peer-deps]: https://david-dm.org/wiredmax/react-flags#info=peerDependencies
