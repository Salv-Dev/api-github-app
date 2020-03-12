'use strict';

import React, {PropTypes} from 'react';

const UserInfo = () => (
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
);

export default UserInfo;