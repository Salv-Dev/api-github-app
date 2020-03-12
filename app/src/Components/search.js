'use strict';

import React, {PropTypes} from 'react';

const Search = () => (
    <div className="search">
      <div className="input">
          <input type="text" />
          <Icon.Search className="icon-search" size={22}/>
        <div className="effect" />
      </div>
    </div>
);

export default Search;