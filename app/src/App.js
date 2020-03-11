import React from 'react';
import * as Icon from 'react-feather';
import './styles.css';

class App extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div className="app-container">
        <div className="filter">
          <div className="search">
            <div className="input">
              <input type="text" />
              <Icon.Search className="icon-search" size={22}/>
              <div className="effect" />
            </div>
          </div>

          <div className="user-info">
            <div className="photo">
              <img src="https://images3.alphacoders.com/658/658828.jpg" alt="profile-pic" />
            </div>
            <div className="infos">
              <h1 className="username"><a href="#">Fulano de tal</a></h1>
              <h3 className="login">login do Fulano</h3>
              <ul className="info-repos">
                <li><Icon.Book color="#25F3ED" size={18}/><span>100</span></li>
                <li><Icon.Users color="#25F3ED" size={18}/><span>100</span></li>
                <li><Icon.UserPlus color="#25F3ED" size={18}/><span>100</span></li>
              </ul>
              <p className="website"><a href="#">https://website.com</a></p>
            </div>
          </div>

          <div className="actions">
            <button><Icon.Book className="icon-button" size={18}/><p>Repositórios</p><i></i></button>
            <button><Icon.Star className="icon-button" size={18}/><p>Favoritos</p><i></i></button>
          </div>

          <div className="repo-list">
            <h4>Repositórios:</h4>
            <div className="repos">
              <div className="repo">
                <h2>Nome do repo</h2>
                <h5>Descrição do repositório</h5>
                <div className="line"></div>
                <p><Icon.Star color="#25F3ED" size={18}/> <span>100</span><Icon.Share2 className="share" color="#25F3ED" size={18}/><span> 100</span></p>
              </div>
              <div className="repo">
                <h2>Nome do repo</h2>
                <h5>Descrição do repositório</h5>
                <div className="line"></div>
                <p><Icon.Star color="#25F3ED" size={18}/> <span>100</span><Icon.Share2 className="share" color="#25F3ED" size={18}/><span> 100</span></p>
              </div>
              <div className="repo">
                <h2>Nome do repo</h2>
                <h5>Descrição do repositório</h5>
                <div className="line"></div>
                <p><Icon.Star color="#25F3ED" size={18}/> <span>100</span><Icon.Share2 className="share" color="#25F3ED" size={18}/><span> 100</span></p>
              </div>
              <div className="repo">
                <h2>Nome do repo</h2>
                <h5>Descrição do repositório</h5>
                <div className="line"></div>
                <p><Icon.Star color="#25F3ED" size={18}/> <span>100</span><Icon.Share2 className="share" color="#25F3ED" size={18}/><span> 100</span></p>
              </div>
              <div className="loading-repo">
                <Icon.ChevronDown className="chevron"/>
              </div>
            </div>
          </div>
        </div>  
      </div>
    )
  }
}

export default App;
