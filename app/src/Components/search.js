import React from 'react';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';

const Search = ({handleSearch, isDisabled, chevron}) => (
    <div className={`search ${chevron}`}>
      <div className="input">
          <input type="text" onKeyUp={handleSearch} disabled={isDisabled}/>
          <Icon.Search className="icon-search" size={22}/>
        <div className="effect" />
      </div>
    </div>
);

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  chevron: PropTypes.string.isRequired
}

export default Search;