import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import client1 from '../assets/images/client-1.jpg';
import client2 from '../assets/images/client-2.jpg';
import client3 from '../assets/images/client-3.jpg';
import client4 from '../assets/images/client-4.jpg';
import client5 from '../assets/images/client-5.jpg';
import client6 from '../assets/images/client-6.jpg';
import client7 from '../assets/images/client-7.jpg';
import client8 from '../assets/images/client-8.jpg';
import client9 from '../assets/images/client-9.jpg';
import client10 from '../assets/images/client-10.jpg';
import client11 from '../assets/images/client-11.jpg';
import client12 from '../assets/images/client-12.jpg';
import client13 from '../assets/images/client-13.jpg';
import client14 from '../assets/images/client-14.jpg';
import client15 from '../assets/images/client-15.jpg';
import client16 from '../assets/images/client-16.jpg';
import client17 from '../assets/images/client-17.jpg';
import client18 from '../assets/images/client-18.jpg';



const OurClients = () => {
  return(
    <>
      <section className="pb-5">
        <div className="container my-5">
          <div className="text-center">
            <h2 className="heading_style"><span className="divider">Our Clients</span></h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem accusantium optio consectetur culpa exercitationem omnis laudantium iure recusandae possimus commodi.</p>
          </div>
          <div className="row my-5" data-aos="zoom-in">
            <div className="col-12 slider_img">
              <Swiper style={{height:"75px"}}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={0}
              breakpoints={{
                // when window width is >= 640px
                640: {
                  width: 640,
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 2,
                }
              }}
              navigation
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>            
                <img src={client1} alt=""></img>
              </SwiperSlide>
              <SwiperSlide>            
                <img src={client2} alt=""></img>
              </SwiperSlide>
              <SwiperSlide>            
                <img src={client3} alt=""></img>
              </SwiperSlide>
              <SwiperSlide>            
                <img src={client4} alt=""></img>
              </SwiperSlide>
              <SwiperSlide>            
                <img src={client5} alt=""></img>
              </SwiperSlide>
              <SwiperSlide>            
                <img src={client6} alt=""></img>
              </SwiperSlide>
              <SwiperSlide>            
                <img src={client7} alt=""></img>
              </SwiperSlide>
              <SwiperSlide>            
                <img src={client8} alt=""></img>
              </SwiperSlide>
              <SwiperSlide>            
                <img src={client9} alt=""></img>
              </SwiperSlide>
              <SwiperSlide>            
                <img src={client10} alt=""></img>
              </SwiperSlide>
              <SwiperSlide>            
                <img src={client11} alt=""></img>
              </SwiperSlide>
              <SwiperSlide>            
                <img src={client12} alt=""></img>
              </SwiperSlide>
              <SwiperSlide>            
                <img src={client14} alt=""></img>
              </SwiperSlide>
              <SwiperSlide>            
                <img src={client15} alt=""></img>
              </SwiperSlide>
              <SwiperSlide>            
                <img src={client16} alt=""></img>
              </SwiperSlide>
              <SwiperSlide>            
                <img src={client17} alt=""></img>
              </SwiperSlide>
              <SwiperSlide>            
                <img src={client18} alt=""></img>
              </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurClients;