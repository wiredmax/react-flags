import PropTypes from 'prop-types';
import React from 'react';
import availableFlags from './flags.json5';
import countries from '!filter-loader?cca2,cca3!world-countries/countries.json';
import find from 'lodash/find';
class Flag extends React.Component {
  /**
   * React properties
   */

  /**
   * React lifecycle
   */

  // Get information about a country using the alpha-3 ISO code.
  cca3To2(cca3) {
    let country = find(countries, { cca3: cca3 });
    return country ? country.cca2 : '_unknown';
  }

  /**
   * React render
   */

  render() {
    let country = this.props.name ? this.props.name : this.props.country;

    country = country.length === 3 ? this.cca3To2(country) : country;

    const type = this.props.shiny ? 'shiny' : 'flat';

    const folder =
      this.props.format === 'icns' || this.props.format === 'ico' || this.props.format === 'svg'
        ? this.props.format
        : this.props.pngSize;

    const altText = this.props.alt ? this.props.alt : country;

    const file = country.charAt(0) === '_' ? country : country.toUpperCase();

    const flag = ~availableFlags.flags.indexOf(file) ? file : '_unknown';

    return (
      <img
        alt={altText}
        title={this.props.title}
        src={
          this.props.basePath +
          '/flags-iso/' +
          type +
          '/' +
          folder +
          '/' +
          flag +
          '.' +
          this.props.format
        }
        className={this.props.className}
        width={this.props.width}
        height={this.props.height}
      />
    );
  }
}

Flag.propTypes = {
  // Alternative text of the flag <img> HTML tag.
  alt: PropTypes.string,

  // Base path to the content of /vendor
  basePath: PropTypes.string,

  // Country or region for this flag. (Legacy)
  country: PropTypes.string,

  // File format of the flag.
  format: PropTypes.oneOf(['png', 'icns', 'ico', 'svg']),

  // Height of the flag <img> HTML tag.
  height: PropTypes.number,

  // Image className
  className: PropTypes.string,

  // Name of country or region for this flag. (Legacy)
  name: PropTypes.string,

  // Size of the PNG country flag
  pngSize: PropTypes.oneOf([16, 24, 32, 48, 64]),

  // Shiny or Flat
  shiny: PropTypes.bool,
  
  // Title attribute for the flag <img> HTML tag
  title: PropTypes.string,

  // Width of the flag <img> HTML tag.
  width: PropTypes.number
};

Flag.defaultProps = {
	basePath: '/img/flags',

	country: '_unknown',

	name: null,

	format: 'png',

	pngSize: 32,

	shiny: false,

	className: '',

	width: null,

	height: null,

	alt: null,

	title: null
};

export default Flag;
