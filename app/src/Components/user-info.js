import React from 'react';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';

const UserInfo = ({userinfo}) => (
    <div className="user-info">
        <div className="photo">
              <img src={userinfo.photo} alt="profile-pic" />
        </div>
        <div className="infos">
            <h1 className="username"><a href={`https://github.com/${userinfo.login}`} title={userinfo.username} target="_blank" rel="noopener noreferrer">{userinfo.username? (userinfo.username.length > 10? `${userinfo.username.substr(0, 10)}...`:userinfo.username):'no name'}</a></h1>
            <h3 className="login">{userinfo.login}</h3>
            <ul className="info-repos">
                <li><Icon.Book color="#25F3ED" size={18}/><span>{userinfo.repos}</span></li>
                <li><Icon.Users color="#25F3ED" size={18}/><span>{userinfo.followers}</span></li>
                <li><Icon.UserPlus color="#25F3ED" size={18}/><span>{userinfo.following}</span></li>
            </ul>
            <p className="website"><a href={userinfo.blog} target="_blank" rel="noopener noreferrer">{userinfo.blog}</a></p>
        </div>
    </div>
);

UserInfo.propTypes = {
    userinfo: PropTypes.shape({
        username: PropTypes.string,
        photo: PropTypes.string,
        login: PropTypes.string,
        repos: PropTypes.number,
        followers: PropTypes.number,
        following: PropTypes.number
    })
}

export default UserInfo;