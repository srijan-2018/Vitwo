import React from 'react';
import StartUp_img from '../assets/images/img-10.png';

const SupportSection = () => {

  return(
    <>
      <div className="section-image d-flex align-items-center" >
        <div className="container-fluid SupportSection_max_width">
          <div className="row">
            <div className="col-lg-6 col-md-12 d-flex align-items-center">
              <div className="container pb-4">
                <div className="mockup mockup-macbook loaded opened">
                  <div className="laptop_bg_text">
                    <h2>Show our roadmap</h2>
                    <div className="scroll-prompt" scroll-prompt ng-show="showPrompt" style={{opacity: 1}}>
                      <div className="scroll-prompt-arrow-container">
                        <div className="scroll-prompt-arrow"><div /></div>
                        <div className="scroll-prompt-arrow"><div /></div>
                      </div>
                    </div>
                  </div>
                  <div className="part top">
                    <img src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-top.svg" alt="" className="top" />
                    <img src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-cover.svg" alt="" className="cover" />
                    <img src={StartUp_img} alt="" className="laptop_img" />
                  </div>
                  <div className="part bottom">
                    <img src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-cover.svg" alt="" className="cover" />
                    <img src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-bottom.svg" alt="" className="bottom" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 d-flex align-items-center mt-5 mt-md-0">
              <div>
                <div className="title mb-4">
                  <h2 className="text-white">Who we Are Overview</h2>
                  <p>About us</p>
                </div>
                <p className="mb-5">ViTWO aims to service these entities to provide significant value by collaborating with them for growth and sustenance. Our Outsourced Finance Function (OFF) service offering wherein we closely interact and work with the stake-holders to identify the issues faced by their businesses for key business areas like:</p>
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <div className="SupportSection_icon-box d-flex align-items-center mb-3">
                      <div className="icon-box">
                        <i className="fa-solid fa-business-time"></i>
                      </div>
                      <div className="SupportSection_caption">
                        <h3>Business strategy & performance measurement</h3>
                      </div>
                    </div>
                    <div className="SupportSection_icon-box d-flex align-items-center mb-3">
                      <div className="icon-box">
                        <i className="fa-solid fa-user-gear"></i>
                      </div>
                      <div className="SupportSection_caption">
                        <h3>Operational excellence</h3>
                      </div>
                    </div>
                    <div className="SupportSection_icon-box d-flex align-items-center mb-3">
                      <div className="icon-box">
                        <i className="fa-solid fa-building"></i>
                      </div>
                      <div className="SupportSection_caption">
                        <h3>Corporate Governance.</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="SupportSection_icon-box d-flex align-items-center mb-3">
                      <div className="icon-box">
                        <i className="fa-solid fa-hand-holding-dollar"></i>
                      </div>
                      <div className="SupportSection_caption">
                        <h3>Capital structure and funds management.</h3>
                      </div>
                    </div>
                    <div className="SupportSection_icon-box d-flex align-items-center mb-3">
                      <div className="icon-box">
                        <i className="fa-solid fa-magnifying-glass-dollar"></i>
                      </div>
                      <div className="SupportSection_caption">
                        <h3>Enhanced tax efficiency.</h3>
                      </div>
                    </div>
                    <div className="SupportSection_icon-box d-flex align-items-center mb-3">
                      <div className="icon-box">
                        <i className="fa-solid fa-laptop-code"></i>
                      </div>
                      <div className="SupportSection_caption">
                        <h3>IT & Peoples capabilities.</h3>
                      </div>
                    </div>
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

export default SupportSection;