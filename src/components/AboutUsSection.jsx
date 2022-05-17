import React, {useEffect} from 'react';
import aboutUs from '../assets/images/about-us-section.jpg';

const AboutUsSection = () => {

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* <div className="col-lg-6 col-md-12 ">
            <a className="" href="https://www.youtube.com/watch?v=Lb4IcGF5iTQ" target="_blank">
            <img src={aboutUs} alt="" />
            </a>
          </div>
          <div className="col-lg-6 col-md-12 mt-5 mt-lg-0 d-flex align-items-center">
            <div>
              <div className="title">
                <h2>Who we Are</h2>
                <p>About us</p>
              </div>
              <p>ViTWO was conceptualized and established to have a competitive presence across the country, offering the entire gamut of services including Management Consultation, Advisory & Assurance, Corporate Governance, Indirect Tax & regulatory and Risk Advisory services..</p>
              <a href="/contact" className="btn_style">Read More</a>
              <div className="box-sign">
                <img alt="sign" src={sign} />
                <b>Albert Patterson</b>
                <span>Founder & CEO</span>
              </div>
            </div>
          </div> */}

            <div id="container">
              <div className='row'>
                <div className="col-12 col-lg-6 d-flex align-items-center">
                  <div>
                    <h1> Crafting Customer Journeys That Bring Revenue to Your Door</h1>
                    <button className="primary"> Increase Revenue </button>
                    <button> Our Services </button>
                  </div>
                </div>
                <div className="col-12 col-lg-6 pt-5 pt-0 display-res">
                  <div className="quarter one1">
                    <div className="one">
                      <p>DRIVE</p>
                    </div>
                  </div>
                  <div className="quarter two2">
                    <div className="two">
                      <p>CAPTURE</p>
                    </div>
                  </div>
                  <div className="quarter three3">
                    <div className="three">
                      <p>CONVERT</p>
                    </div>
                  </div>
                  <div className="quarter four4">
                    <div className="four">
                      <p>OPTIMIZE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}


export default AboutUsSection;