import React from 'react';
import StartUp_img from '../assets/images/img-2.png';

const StartUp = () => {
  return (
    <>
      <section className="startup_bg">
        <div className="container padding_top_bottom_100 ">
          <div className="row">
            <div className="col-12">
              <div className=" container text-center">
                <h2 className="heading_style"><span className="divider">StartUp, Micro, Small & Medium Enterprise</span></h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem accusantium optio consectetur culpa exercitationem omnis laudantium iure recusandae possimus commodi.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 d-flex align-items-center" data-aos="flip-left">
              <div>
                <div className="d-flex align-items-center mb-3">
                  <div>
                    <i className="fa-solid fa-circle-check fa-2x"></i>
                  </div>
                  <div>
                    <p className="px-3 m-0">The contribution of M&SME and Start-up companies in India has been significant towards the economic progress of the nation and possesses immense potential to contribute further.</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <div>
                    <i className="fa-solid fa-circle-check fa-2x"></i>
                  </div>
                  <div>
                    <p className="px-3 m-0">The contribution of M&SME and Start-up companies in India has been significant towards the economic progress of the nation and possesses immense potential to contribute further.</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <div>
                    <i className="fa-solid fa-circle-check fa-2x"></i>
                  </div>
                  <div>
                    <p className="px-3 m-0">The contribution of M&SME and Start-up companies in India has been significant towards the economic progress of the nation and possesses immense potential to contribute further.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12" data-aos="flip-right">
              <img src={StartUp_img} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default StartUp;