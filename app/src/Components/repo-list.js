'use strict';

import React, {PropTypes} from 'react';

const RepoList = () => (
    <div className="repo-list">
            <h4>Repositórios:</h4>
            <div className="repos">
              <a className="repo">
                <h2>Nome do repo</h2>
                <h5>Descrição do repositório</h5>
                <div className="line"></div>
                <p><Icon.Star color="#25F3ED" size={18}/> <span>100</span><Icon.Share2 className="share" color="#25F3ED" size={18}/><span> 100</span></p>
              </a>
              <a className="repo">
                <h2>Nome do repo</h2>
                <h5>Descrição do repositório</h5>
                <div className="line"></div>
                <p><Icon.Star color="#25F3ED" size={18}/> <span>100</span><Icon.Share2 className="share" color="#25F3ED" size={18}/><span> 100</span></p>
              </a>
              <a className="repo">
                <h2>Nome do repo</h2>
                <h5>Descrição do repositório</h5>
                <div className="line"></div>
                <p><Icon.Star color="#25F3ED" size={18}/> <span>100</span><Icon.Share2 className="share" color="#25F3ED" size={18}/><span> 100</span></p>
              </a>
              <a className="repo">
                <h2>Nome do repo</h2>
                <h5>Descrição do repositório</h5>
                <div className="line"></div>
                <p><Icon.Star color="#25F3ED" size={18}/> <span>100</span><Icon.Share2 className="share" color="#25F3ED" size={18}/><span> 100</span></p>
              </a>
            </div>
            <Icon.ChevronDown className="chevron"/>
          </div>
);

export default RepoList;