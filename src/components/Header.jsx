import React from 'react';

import './Header.css';
import loogo2 from './images/loogo2.jpg';





function Header() {
  return (
    <div>
      <header>
        <a href="#" className="logo">
          <img src={loogo2} height="100" width="100" id="logfor" alt="Logo" />
        </a>
        <nav className="navbar">
          <a href="#home" className="active">
            home
          </a>
          <a href="#about">services</a>
          <a href="#menu">available programs</a>
          <a href="#team">instructor chefs</a>
          <a href="/test">Test</a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
