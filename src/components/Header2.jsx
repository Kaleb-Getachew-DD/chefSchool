import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import './Header.css'

function Header2() {
  useEffect(() => {
    new Swiper('.home-slider', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,
    });
  }, []);

  return (
    <div>
      <div className="home" id="home">
        <div className="swiper home-slider">
          <div className="swiper-wrapper wrapper">
            <div className="swiper-slide slide slide1">
              <div className="content">
             
                <h3>Talented Chefs</h3>
                <h1>Every plate has to have a good taste</h1>
                <a href="registration.php" className="btn">Register</a>
              </div>
            </div>
            <div className="swiper-slide slide slide2">
                    <div className="content">
                        <img src="" />
                        <h3>learn how to cook </h3>
                        <h1></h1>
                       
                    </div>
                </div>

                <div className="swiper-slide slide slide3">
                    <div className="content">
                        <img src="" />

                        <h1>we are open 365</h1>
                      
                        <p>
                            you will enjoy sessions
                        </p>
                       
                    </div>
                </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
}

export default Header2;
