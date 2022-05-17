import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Testimonial1 from '../assets/images/testimonial-1.jpg';


const Testimonial = () => {
  return(
    <>
      <section className="testimonial-bg padding_top_bottom_100">
        <div className="container my-0 my-lg-5">
        <div className="container my-0 my-lg-5 text-center">
          <h2 className="heading_style"><span className="divider">Review of our happy clients</span></h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem accusantium optio consectetur culpa exercitationem omnis laudantium iure recusandae possimus commodi.</p>
        </div>
          {/* <div className="title mb-4">
            <h2>Who we Are Overview</h2>
            <p>About us</p>
          </div> */}
          <div className="row" data-aos="zoom-in">
            <div className="col-12">
              <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={15}
              breakpoints={{
                // when window width is >= 640px
                640: {
                  width: 640,
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 2,
                }
              }}
              pagination={{ clickable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>            
                <div className="cnt-box  cnt-box-testimonials-bubble">
                  <p>  
                    The question I ask myself like almost every day is if am I doing the most important thing I could be doing.                   
                  </p>
                  <div className="thumb-bar">
                    <img src={Testimonial1} alt=" " />
                    <p>
                      <span>Mark Zuckerberg</span>
                      <span>Microsoft</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>            
                <div className="cnt-box  cnt-box-testimonials-bubble">
                  <p>  
                    The question I ask myself like almost every day is if am I doing the most important thing I could be doing.                   
                  </p>
                  <div className="thumb-bar">
                    <img src={Testimonial1} alt=" " />
                    <p>
                      <span>Mark Zuckerberg</span>
                      <span>Microsoft</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>            
                <div className="cnt-box  cnt-box-testimonials-bubble">
                  <p>  
                    The question I ask myself like almost every day is if am I doing the most important thing I could be doing.                   
                  </p>
                  <div className="thumb-bar">
                    <img src={Testimonial1} alt=" " />
                    <p>
                      <span>Mark Zuckerberg</span>
                      <span>Microsoft</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>            
                <div className="cnt-box  cnt-box-testimonials-bubble">
                  <p>  
                    The question I ask myself like almost every day is if am I doing the most important thing I could be doing.                   
                  </p>
                  <div className="thumb-bar">
                    <img src={Testimonial1} alt=" " />
                    <p>
                      <span>Mark Zuckerberg</span>
                      <span>Microsoft</span>
                    </p>
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

export default Testimonial;