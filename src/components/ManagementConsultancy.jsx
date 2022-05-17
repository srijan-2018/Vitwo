import React from 'react';
// import computer from '../assets/images/computer_screen.png'

const ManagementConsultancy = () => {
  return (
    <>
      <div className="container-fluid padding_top_bottom_100 " style={{overflow: 'hidden'}}>
        <div className="container text-center">
          <h2 className="heading_style"><span className="divider">Management Consultancy</span></h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem accusantium optio consectetur culpa exercitationem omnis laudantium iure recusandae possimus commodi.</p>
        </div>
        
        {/* <div className="row">
          <div className="col-lg-6 col-md-12" data-aos="fade-right" data-aos-delay="200">
            <div className="pt-100">
              <div className="title">
                <h2>Financial Management Services</h2>
              </div>
              <p>Aimed at helping to enhance finance function’s performance and increase its value to the business, we at VITWO provide a range of financial management services namely Finance Operations & Strategies, Decision Support System & Outsourced Finance Function</p>
              <div>
                <a href="/contact" className="btn_style">View More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 display-res-none" data-aos="fade-left" data-aos-delay="200">
            <div className="contentwrapper">
                <div className="screen-wrapper flip" style={{position: 'relative'}}>
                  <img className="screen-frame" loading="lazy" src={computer} alt="Screen" width={960} height={928} />
                  <video className="screen-image" playsInline autoPlay loop muted preload="none" src=" " type="video/mp4" width={720} height={405} />
                </div>
            </div>
          </div>
        </div>


        <div className="row mb-5">
          <div className="col-lg-6 col-md-12 display-res-none" data-aos="fade-right" data-aos-delay="600">
            <div className="contentwrapper">
                <div className="screen-wrapper " style={{position: 'relative'}}>
                  <img className="screen-frame" loading="lazy" src={computer} alt="Screen" width={960} height={928} />
                  <video className="screen-image" playsInline autoPlay loop muted preload="none" src=" " type="video/mp4" width={720} height={405} />
                </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 mt-5 mt-lg-0 lyer_down" data-aos="fade-left" data-aos-delay="600">
            <div className="pt-100">
              <div className="title">
              <h2>360<sup>0</sup> Governance</h2>
              </div>
              <p>We aim to service the mid-segment companies to provide significant value which are largely promoter / owner – managed businesses, by collaborating with them for growth and sustenance.</p>
              <p>We help to understand the owner’s perspective of criticality vis-à-vis the current status by conducting the Gap Analysis for key business areas</p>
              <div>
                <a href="/contact" className="btn_style">View More</a>
              </div>
            </div>
          </div>
        </div> */}


          <section className="about-section">
          <div className="container">
            <div className="row">                
              <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="title">Our Overview</span>
                    <h2>We are leader in <br />Industrial market Since 2000</h2>
                  </div>
                  <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.</div>
                  <ul className="list-style-one">
                    <li>Lorem Ipsum is simply dummy tex</li>
                    <li>Consectetur adipisicing elit</li>
                    <li>Sed do eiusmod tempor incididunt</li>
                  </ul>
                  <div>
                    <a href="/contact" className="btn_style" style={{ padding : "15px 45px"}}>View More</a>
                  </div>
                </div>
              </div>
              {/* Image Column */}
              <div className="image-column col-lg-6 col-md-12 col-sm-12 one5">
                <div className="inner-column wow fadeInLeft one">
                  <figure className="image-1"><a href="#" className="lightbox-image" data-fancybox="images"><img src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg" alt="" /></a></figure>
                  <figure className="image-2"><a href="#" className="lightbox-image" data-fancybox="images"><img src="https://i.ibb.co/JvN0NVB/image-2-about.jpg" alt="" /></a></figure>
                </div>
              </div>
            </div>
          </div>
          </section>

      </div>
    </>
  )
}


export default ManagementConsultancy;