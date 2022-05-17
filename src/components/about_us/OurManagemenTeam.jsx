import React from 'react';

const OurManagemenTeam = () => {
  return(
    <>
      <section className="section-team">
        <div className="container">
          {/* Start Header Section */}
          <div className="row justify-content-center text-center">
            <div className="text-center px-lg-0 px-3">
              <h2 className="heading_style"><span className="divider">Let's meet with our team</span></h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem accusantium optio consectetur culpa exercitationem omnis laudantium iure recusandae possimus commodi.</p>
            </div>
          </div>
          {/* / End Header Section */}
          <div className="row my-5 pb-5">
            {/* Start Single Person */}
            <div className="col-sm-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-delay="200">
              <div className="single-person">
                <div className="person-image">
                  <img src="https://i.ibb.co/G2CBWvb/person1.jpg" alt="" />
                  <span className="icon">
                    <i className="fab fa-html5" />
                  </span>
                </div>
                <div className="person-info">
                  <h3 className="full-name">John Doe</h3>
                  <span className="speciality">Web Developer</span>
                </div>
              </div>
            </div>
            {/* / End Single Person */}
            {/* Start Single Person */}
            <div className="col-sm-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-delay="500">
              <div className="single-person">
                <div className="person-image">
                  <img src="https://i.ibb.co/nbpNr4r/person2.jpg" alt="" />
                  <span className="icon">
                    <i className="fab fa-wordpress-simple" />
                  </span>
                </div>
                <div className="person-info">
                  <h3 className="full-name">Robert Smith</h3>
                  <span className="speciality">WordPress Developer</span>
                </div>
              </div>
            </div>
            {/* / End Single Person */}
            {/* Start Single Person */}
            <div className="col-sm-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-delay="800">
              <div className="single-person">
                <div className="person-image">
                  <img src="https://i.ibb.co/25zdRMr/person3.jpg" alt="" />
                  <span className="icon">
                    <i className="fab fa-angular" />
                  </span>
                </div>
                <div className="person-info">
                  <h3 className="full-name">John Doe</h3>
                  <span className="speciality">Angular Developer</span>
                </div>
              </div>
            </div>
            {/* / End Single Person */}
            {/* Start Single Person */}
            <div className="col-sm-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-delay="1000">
              <div className="single-person">
                <div className="person-image">
                  <img src="https://i.ibb.co/w0ynr2Q/person4.jpg" alt="" />
                  <span className="icon">
                    <i className="fab fa-js" />
                  </span>
                </div>
                <div className="person-info">
                  <h3 className="full-name">John Smith</h3>
                  <span className="speciality">Javascript Developer</span>
                </div>
              </div>
            </div>
            {/* / End Single Person */}
          </div>
        </div>
      </section>
    </>
  )
}

export default OurManagemenTeam;