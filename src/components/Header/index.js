import React from 'react';

import Avatar from '../../assets/images/avatar.jpg';

import './style.css';

function Header() {
  return (
    <div className="header">
      <h1 className="header__title">My Books</h1>
      <div className="header__user-avatar">
        <img src={Avatar} alt="User Avatar" />
      </div>
    </div>
  );
}

export default Header;
