import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import user1 from '../assets/images/user-1.jpg';
import user2 from '../assets/images/user-3.jpg';
import user3 from '../assets/images/user-9.jpg';


const OurTeam = () => {
  return(
    <>
      <section className="testimonial-bg py-5">
        <div className="container my-5">
        <h2 className="my-5 text-center heading_style">Our Management Team</h2>
          <div className="title mb-4">
                  <h2>Who we Are Overview</h2>
                  <p>About us</p>
          </div>
          <div className="row">
            <div className="col-12">
              <Swiper style={{height:"auto",padding:"0px 0px 30px"}}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              pagination={{ clickable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>            
              <div
              className="team__item set-bg"
              style={{backgroundImage: `url(${user2})`}}>
              <div className="team__text">
                  <div className="team__title">
                    <h4>Furkan Giray</h4>
                    <span>Web Developer</span>
                  </div>
                  <p>
                    Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies
                    consectetur. Ut viverra porta leo, non tincidunt mauris condimentu
                    eget. Vivamus non turpis elit. Aenean ultricies nisl sit amet.
                  </p>
                  <div className="team__social">
                    <a href="#">
                      <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>            
              <div
              className="team__item set-bg"
              style={{backgroundImage: `url(${user3})`}}>
              <div className="team__text">
                  <div className="team__title">
                    <h4>Furkan Giray</h4>
                    <span>Web Developer</span>
                  </div>
                  <p>
                    Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies
                    consectetur. Ut viverra porta leo, non tincidunt mauris condimentu
                    eget. Vivamus non turpis elit. Aenean ultricies nisl sit amet.
                  </p>
                  <div className="team__social">
                    <a href="#">
                      <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>            
              <div
              className="team__item set-bg"
              style={{backgroundImage: `url(${user1})`}}>
              <div className="team__text">
                  <div className="team__title">
                    <h4>Furkan Giray</h4>
                    <span>Web Developer</span>
                  </div>
                  <p>
                    Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies
                    consectetur. Ut viverra porta leo, non tincidunt mauris condimentu
                    eget. Vivamus non turpis elit. Aenean ultricies nisl sit amet.
                  </p>
                  <div className="team__social">
                    <a href="#">
                      <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>            
              <div
              className="team__item set-bg"
              style={{backgroundImage: `url(${user2})`}}>
              <div className="team__text">
                  <div className="team__title">
                    <h4>Furkan Giray</h4>
                    <span>Web Developer</span>
                  </div>
                  <p>
                    Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies
                    consectetur. Ut viverra porta leo, non tincidunt mauris condimentu
                    eget. Vivamus non turpis elit. Aenean ultricies nisl sit amet.
                  </p>
                  <div className="team__social">
                    <a href="#">
                      <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurTeam;