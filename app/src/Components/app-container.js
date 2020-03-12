import React from 'react';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
import Search from './search';
import UserInfo from './user-info';
import Actions from './actions';
import RepoList from './repo-list';

const AppContainer = ({handleSearch, userinfo, repos, starred, getRepos, getStarred}) => (
    <div className="app-container">
        <div className="filter">

            <Search handleSearch={handleSearch}/>
            {!!userinfo && <UserInfo userinfo={userinfo} />}
            {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred}/>}

            {!!repos.length && <RepoList title="Repositórios:" repos={repos} />}
            {!!starred.length && <RepoList title="Favoritos:" repos={starred} />}

            {!!repos.length && 
            <div className="loading-repos">
                <div className="container-chevron">
                    <Icon.ChevronDown className="chevron"/>
                </div>
            </div>
            }

            {!!starred.length && 
            <div className="loading-repos">
                <div className="container-chevron">
                    <Icon.ChevronDown className="chevron"/>
                </div>
            </div>
            }
        </div>  
    </div>
);

AppContainer.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    userinfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired,
    getRepos: PropTypes.func.isRequired,
    getStarred: PropTypes.func.isRequired
}

export default AppContainer;