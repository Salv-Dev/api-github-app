'use strict';

import React, {PropTypes} from 'react';

const Actions = () => (
    <div className="actions">
        <button><Icon.Book className="icon-button" size={18}/><p>Repositórios</p><i></i></button>
        <button><Icon.Star className="icon-button" size={18}/><p>Favoritos</p><i></i></button>
    </div>
);

export default Actions;