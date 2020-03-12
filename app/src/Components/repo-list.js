'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';

const RepoList = ({title, repos}) => (
    <div className="repo-list">
            <h4>{title}</h4>
            <div className="repos">
            {repos.map((repo, index) => (
              <a key={index} className="repo">
                <h2>{repo.name}</h2>
                <h5>{repo.desc}</h5>
                <div className="line"></div>
                <p><Icon.Star color="#25F3ED" size={18}/> <span>{repo.starred}</span><Icon.Share2 className="share" color="#25F3ED" size={18}/><span>{repo.fork}</span></p>
              </a>
            ))}
            </div>
          </div>
);

RepoList.propTypes = {
    title: PropTypes.string.isRequired,
    repos: PropTypes.array.isRequired
}

export default RepoList;