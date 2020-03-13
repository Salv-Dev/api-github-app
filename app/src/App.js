import React from 'react';
import AppContainer from './Components/app-container';
import Ajax from './ajax';
import './styles.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false,
      isFetchingRepos: false
    }
  }

  handleSearch(e) {
    if(e.keyCode === 13){
      this.setState({
        userinfo: null,
        repos: [],
        starred: [],
        isFetching: true
      })
      Ajax(`https://api.github.com/users/${e.target.value}`).then(result => {
        this.setState({
          userinfo: {
            username: result.name,
            photo: result.avatar_url,
            login: result.login,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following,
            blog: result.blog 
          },
          repos: [],
          starred: [],
          isFetching: false
        })
      })
      .catch(err => {
        console.error(err);
        this.setState({
          isFetching: false
        })
      })
      e.target.value = "";
    }
  }

  getRepos(type){
    return (e) => {
      this.setState({
        repos: [],
        starred: [],
        isFetchingRepos: true
      })
      Ajax(`https://api.github.com/users/${this.state.userinfo.login}/${type}`).then(result => {
        this.setState({
          [type]: result.map(repo => {
            return {
              name: repo.name,
              desc: repo.description,
              url: repo.html_url,
              starred: repo.watchers,
              fork: repo.forks
            }
          }),
          
          [type === 'repos'?'starred':'repos']:[],
          isFetchingRepos: false
        })
      })
      .catch(err => {
        console.error(err);
        this.setState({
          isFetchingRepos: false
        })
      })
    }
  }

  render(){
    return (
      <AppContainer
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
        isFetching={this.state.isFetching}
        isFetchingRepos={this.state.isFetchingRepos}
      />
    )
  }
}

export default App;
