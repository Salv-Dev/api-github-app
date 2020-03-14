import React from 'react';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
import Search from './search';
import UserInfo from './user-info';
import Actions from './actions';
import RepoList from './repo-list';

const AppContainer = ({
    handleSearch,
    userinfo,
    repos,
    starred,
    getRepos,
    getStarred,
    isFetching,
    isFetchingRepo,
    isFetchingStarred,
    chevron,
    chevronClick,
    btnRepoActive
}) => (
    <div className={`app-container ${chevron}`}>

            <Search handleSearch={handleSearch} isDisabled={isFetching} chevron={chevron}/>
            {isFetching && <div className="loading --search" />}
            {!!userinfo && <UserInfo userinfo={userinfo} />}
            {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} btnRepoActive={btnRepoActive} isFetchingRepo={isFetchingRepo} isFetchingStarred={isFetchingStarred}/>}

            {!!repos.length && <RepoList title="Repositórios:" repos={repos} chevron={chevron}/>}
            {!!starred.length && <RepoList title="Favoritos:" repos={starred} chevron={chevron}/>}

            {(!!repos.length && repos.length > 2) && 
            <div className="loading-repos">
                <div className="container-chevron">
                    <div className="btn-chevron" onClick={chevronClick}>
                        <Icon.ChevronDown className={`chevron ${chevron}`}/>
                    </div>
                </div>
            </div>
            }

            {!!starred.length && 
                <div className="loading-repos">
                <div className="container-chevron">
                    <div className="btn-chevron" onClick={chevronClick}>
                        <Icon.ChevronDown className={`chevron ${chevron}`}/>
                    </div>
                </div>
            </div>
            }
    </div>
);

AppContainer.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    userinfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired,
    getRepos: PropTypes.func.isRequired,
    getStarred: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    isFetchingRepo: PropTypes.bool.isRequired,
    isFetchingStarred: PropTypes.bool.isRequired,
    chevron: PropTypes.string.isRequired,
    chevronClick: PropTypes.func.isRequired,
    btnRepoActive: PropTypes.string.isRequired
}

export default AppContainer;