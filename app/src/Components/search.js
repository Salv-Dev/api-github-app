import React from 'react';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';

const Search = ({handleSearch}) => (
    <div className="search">
      <div className="input">
          <input type="text" onKeyUp={handleSearch}/>
          <Icon.Search className="icon-search" size={22}/>
        <div className="effect" />
      </div>
    </div>
);

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default Search;