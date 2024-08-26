import React, { useEffect, useRef } from 'react';
import './Header.css';
import mcdonald from './images/mc donald.jpg';
import kitfo from './images/Kitfo-Ethiopia.jpg';
import tej from './images/tej.jpg';
import video from './images/video.mp4'

function Header3() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0; // Mute the video for autoplay
    }
  }, []);

  return (
    <div>
      <section className="welcome" id="about">
        <h1 className="heading">oracle chefs school</h1>
        <center><h3 className="sub-heading">services we give</h3></center>

        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src={mcdonald} alt="Modern Food Cooking" />
            </div>
            <div className="content">
              <h3>modern food cooking</h3>
              <p>Join us at oracle chef school and transform your passion for cooking into a rewarding career. With our modern food cooking teaching,
                you’ll be at the forefront of the culinary world, ready to innovate and inspire.
              </p>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={kitfo} alt="Cultural Food Cooking" />
            </div>
            <div className="content">
              <h3>cultural food cooking</h3>
              <p>Our focus on Ethiopian cuisine offers students a journey into a rich cultural heritage defined by its unique flavors,
                communal dining traditions, and vibrant culinary practices.
              </p>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={tej} alt="Cultural Beverage Making" />
            </div>
            <div className="content">
              <h3>cultural beverage making</h3>
              <p>Ethiopian beverages, deeply rooted in the country’s rich cultural and historical tapestry, offer a unique glimpse into its heritage.
              </p>
            </div>
          </div>
        </div>
 <br />
 <br />
 <div><video
          ref={videoRef}
          width="100%"
          height="500px"
          controls
          autoPlay
          muted
        >
          <source src={video}type="video/mp4" />
          Your browser does not support the video tag.
        </video></div>
        
      </section>
    </div>
  );
}

export default Header3;
