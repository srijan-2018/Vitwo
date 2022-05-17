import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer mt-5">
        <div className="waves">
          <div className="wave" id="wave1" />
          <div className="wave" id="wave2" />
          <div className="wave" id="wave3" />
          <div className="wave" id="wave4" />
        </div>
        <ul className="social-icon">
          <li className="social-icon__item"><a className="social-icon__link" href="#">
              <i className="fa-brands fa-facebook"></i>
            </a></li>
          <li className="social-icon__item"><a className="social-icon__link" href="#">
            <i className="fa-brands fa-twitter"></i>
            </a></li>
          <li className="social-icon__item"><a className="social-icon__link" href="#">
            <i className="fa-brands fa-linkedin"></i>
            </a></li>
          <li className="social-icon__item"><a className="social-icon__link" href="#">
            <i className="fa-brands fa-instagram"></i>
            </a></li>
        </ul>
        <ul className="menu">
          <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
          <li className="menu__item"><a className="menu__link" href="#">About</a></li>
          <li className="menu__item"><a className="menu__link" href="#">Services</a></li>
          <li className="menu__item"><a className="menu__link" href="#">Team</a></li>
          <li className="menu__item"><a className="menu__link" href="#">Contact</a></li>
        </ul>
        <p>©2022 Achievex Solutions Pvt Ltd. | All Rights Reserved</p>
      </footer>
    </>
  )
}

export default Footer;