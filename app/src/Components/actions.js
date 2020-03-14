import React from 'react';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';

const Actions = ({getRepos, getStarred, isFetchingRepo, isFetchingStarred}) => (
    <div className="actions">
        <button onClick={getRepos}><Icon.Book className="icon-button" size={18}/><p>Repositórios</p>{isFetchingRepo? <i className="loading"></i>:<i></i>}</button>
        <button onClick={getStarred}><Icon.Star className="icon-button" size={18}/><p>Favoritos</p>{isFetchingStarred? <i className="loading"></i>:<i></i>}</button>
    </div>
);

Actions.propTypes = {
    getRepos: PropTypes.func.isRequired,
    getStarred: PropTypes.func.isRequired
}

export default Actions;