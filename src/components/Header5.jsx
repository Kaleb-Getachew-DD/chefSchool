import React from 'react'
import './Header.css'
import  shadow from './images/shadow.png'
function Header5() {
  return (
    <div>
      <section className="our-team" id="team">
        <h1 className="heading">master chef lectures</h1>
        <center>
            <h3 className="sub-heading">among our skillfull of chefs</h3>
        </center>

        <div className="our-chef">
            <div className="item">
                <div className="image">
                    <img src={shadow}alt="" />
                </div>

                <div className="chef-info">
                    <div>
                        <h3>chef biruk</h3>
                        <span>master chef</span>

                        <ul>
                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-whatsapp"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-linkedin_in"></i></a></li>



                        </ul>
                    </div>
                </div>
            </div>



            <div className="item">
                <div className="image">
                <img src={shadow}alt="" />
                </div>

                <div className="chef-info">
                    <div>
                        <h3>chef egnuma</h3>
                        <span>foreign foods chef</span>

                        <ul>
                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-whatsapp"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-linkedin_in"></i></a></li>



                        </ul>
                    </div>
                </div>
            </div>
       
       
       
            <div className="item">
                <div className="image">
                <img src={shadow}alt="" />
                </div>

                <div className="chef-info">
                    <div>
                        <h3>chef lidia</h3>
                        <span>master chef</span>

                        <ul>
                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-whatsapp"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-linkedin_in"></i></a></li>



                        </ul>
                    </div>
                </div>
            </div>
       
       
       
       
       
        </div>
    </section>

    </div>
  )
}

export default Header5
