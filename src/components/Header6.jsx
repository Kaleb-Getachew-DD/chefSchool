import React from 'react';
import './Header.css';
import loogo2 from './images/loogo2.jpg';


function Header6() {
  return (
    <div>
      <section className="footer">
        <img src={loogo2} className="log" width="500" height="500" id="forlog" alt="Logo" />

        <div className="container">
          <div>
            <h3>Address</h3>
            <p>Sabian Meskelegna</p>
            <p>+251942689385</p>
            <p>+251945999633</p>
          </div>

          <div>
            <h3>Contact Us</h3>
            <span>Oracle Chef School</span>
            <span>0992080828</span>
            <span>birukayinalem874@gmail.com</span>
            <span>www.oracleChefSchool.com</span>
          </div>
          
        </div>

        <div data-aos="fade-up">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.714416874034!2d41.83857811413097!3d9.619839782105277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1630fdfc4d2e6799%3A0xc16b82af024c9388!2sDire-Dawa%20University!5e0!3m2!1sam!2set!4v1676497289565!5m2!1sam!2set"
            width="100%"
            height="450"
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
<hr />
        <p>&copy; 2024 Reserved by Oracle Team</p>
      </section>
    </div>
  );
}

export default Header6;
