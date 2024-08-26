import React from 'react';
// import './Header.css';
import './os.css';
import  shadow from './images/shadow.png'
import  nonfasting from './images/nonfasting.jpg'
import  chechebsa from './images/chechebsa.jpg'
import  dirkosh from './images/dirkosh.jpg'


function Header4() {
  return (
    <div id="menu">
      <div className="banner">
        <div className="container">
          <div className="slider-container has-scrollbar">

            <div className="slider-item">
                <br />
                <br />
              <img src={nonfasting} alt="S23 ultra" className="banner-img" width ="25%" />
              <div className="banner-content">
                <h1 className="banner-subtitle" >regular programs</h1>
                <h2 className="banner-title">foreign food      1500/month</h2>
                <h2 className="banner-title">culturan foods    1500/month</h2>
                <h2 className="banner-title"> cultural beverages 1000/month </h2>
                <a href="/registration.jsx" className="banner-btn">register</a>
              </div>
            </div>

            <div className="slider-item">
                <br />
                <br />
              <img src={chechebsa} alt="iPhone 14 Pro Max" className="banner-img"  width="25%"/>
              <div className= "banner-content">
              
                <h1 className="banner-subtitle">weekend program</h1>
                <h2 className="banner-title">foreign food      1000/month</h2>
                <h2 className="banner-title">culturan foods    1000/month</h2>
                <h2 className="banner-title"> cultural beverages 800/month </h2>
                <a href="/registration.jsx" className="banner-btn">register</a>
              </div>
            </div>

            <div className="slider-item">
                <br />
                <br />
              <img src={dirkosh} alt="Nothing phone" className="banner-img"  width="25%"/>
              <div className="banner-content">
              <h1 className="banner-subtitle">night programs</h1>
                <h2 className="banner-title">foreign food      1000/month</h2>
                <h2 className="banner-title">culturan foods    1000/month</h2>
                <h2 className="banner-title"> cultural beverages 800/month </h2>
                <a href="/registration.jsx" className="banner-btn">register</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Header4;
