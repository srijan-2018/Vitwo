import React, { useEffect } from "react";
// import Industries from './Industries';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Aos from 'aos';
import 'aos/dist/aos.css'

import 'photoswipe/dist/photoswipe.css'
// import { Gallery, Item } from 'react-photoswipe-gallery'
// // import 'swiper/css/pagination';


// import Automobile from '../assets/images/services&industry/01-AUTO-01.png';
// import AutoComponents from '../assets/images/services&industry/Auto Components.png';
// import Apparels from '../assets/images/services&industry/CLOTHS-01.png';
// import Alcohol from '../assets/images/services&industry/Alcohol-01.png';
// import ArchitecturalLightning from '../assets/images/services&industry/Agriculture-01.png';
// import Engineering from '../assets/images/services&industry/Heavy Engineering-01-01.png';
// import Spun from '../assets/images/services&industry/Yarn-01.png';
// import Courier from '../assets/images/services&industry/Courier.png';
// import Food from '../assets/images/services&industry/Food & Beverages.png';
// import Health from '../assets/images/services&industry/Health Service Aggregators copy.png';
// import Internet from '../assets/images/services&industry/Internet Service Providers copy3.png';
// import Insurance from '../assets/images/services&industry/Insurance Advisory & Broking.png';
// import Advisory from '../assets/images/services&industry/Insurance2 copy.png';
// import Medical from '../assets/images/services&industry/Medical Tourism.png';
// import Online from '../assets/images/services&industry/Online Laundry.png';
// import Software from '../assets/images/services&industry/Software Development.png';
// import Systems from '../assets/images/services&industry/Systems Integrator.png';


const ClienteleDiversification = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  return (
    
    <>
      <section className="section-color" style={{ overflow: 'hidden' }}>
        <div className="container-fluid px-0 mb-3">
          <div className="main-section categories-view1-full">
            <span className="light-transparent" />
            <div className="container padding_top_bottom_100">
              <div className="row">
                <div className="col-md-12 mb-5" data-aos="fade-left">
                  {/* FancyTitle */}
                  <div className="text-center">
                    <h2 className="heading_style"><span className="divider">Manufacturing Industries</span></h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem accusantium optio consectetur culpa exercitationem omnis laudantium iure recusandae possimus commodi.</p>
                  </div>

                  {/* FancyTitle */}
                  {/* Categories List */}
                  <div className="categories categories-view1">
                    <ul className="row">
                      <li className="col-md-4">
                        <div className="categories-view1-wrap">
                          <i className="fas fa-biohazard" />
                          <a href="#">Lorem Ipsum</a>
                          <small>(3 Open Vacancies)</small>
                          <span>01</span>
                        </div>
                      </li>
                      <li className="col-md-4">
                        <div className="categories-view1-wrap">
                          <i className="fas fa-broadcast-tower" />
                          <a href="#">Lorem Ipsum</a>
                          <small>(2 Open Vacancies)</small>
                          <span>02</span>
                        </div>
                      </li>
                      <li className="col-md-4">
                        <div className="categories-view1-wrap">
                          <i className="far fa-chart-bar" />
                          <a href="#">Lorem Ipsum</a>
                          <small>(13 Open Vacancies)</small>
                          <span>03</span>
                        </div>
                      </li>
                      <li className="col-md-4">
                        <div className="categories-view1-wrap">
                          <i className="fab fa-codepen" />
                          <a href="#">Lorem Ipsum</a>
                          <small>(22 Open Vacancies)</small>
                          <span>04</span>
                        </div>
                      </li>
                      <li className="col-md-4">
                        <div className="categories-view1-wrap">
                          <i className="fas fa-dna" />
                          <a href="#">Lorem Ipsum</a>
                          <small>(18 Open Vacancies)</small>
                          <span>05</span>
                        </div>
                      </li>
                      <li className="col-md-4">
                        <div className="categories-view1-wrap">
                          <i className="fas fa-layer-group" />
                          <a href="#">Lorem Ipsum</a>
                          <small>(4 Open Vacancies)</small>
                          <span>06</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* Categories List */}
                  <div className="more-spacer" />
                  <div className="main-load-btn"> <a href="#">Browse All Categories</a> </div>
                </div>
                <div className="col-md-12" data-aos="fade-right">
                  {/* FancyTitle */}
                  <div className="mb-lg-5 mb-5 text-center">
                    <h2 className="heading_style"><span className="divider">Service Industries</span></h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem accusantium optio consectetur culpa exercitationem omnis laudantium iure recusandae possimus commodi.</p>
                  </div>
                  {/* FancyTitle */}
                  {/* Categories List */}
                  <div className="categories categories-view1">
                    <ul className="row">
                      <li className="col-md-4">
                        <div className="categories-view1-wrap">
                          <i className="fas fa-biohazard" />
                          <a href="#">Lorem Ipsum</a>
                          <small>(3 Open Vacancies)</small>
                          <span>01</span>
                        </div>
                      </li>
                      <li className="col-md-4">
                        <div className="categories-view1-wrap">
                          <i className="fas fa-broadcast-tower" />
                          <a href="#">Lorem Ipsum</a>
                          <small>(2 Open Vacancies)</small>
                          <span>02</span>
                        </div>
                      </li>
                      <li className="col-md-4">
                        <div className="categories-view1-wrap">
                          <i className="far fa-chart-bar" />
                          <a href="#">Lorem Ipsum</a>
                          <small>(13 Open Vacancies)</small>
                          <span>03</span>
                        </div>
                      </li>
                      <li className="col-md-4">
                        <div className="categories-view1-wrap">
                          <i className="fab fa-codepen" />
                          <a href="#">Lorem Ipsum</a>
                          <small>(22 Open Vacancies)</small>
                          <span>04</span>
                        </div>
                      </li>
                      <li className="col-md-4">
                        <div className="categories-view1-wrap">
                          <i className="fas fa-dna" />
                          <a href="#">Lorem Ipsum</a>
                          <small>(18 Open Vacancies)</small>
                          <span>05</span>
                        </div>
                      </li>
                      <li className="col-md-4">
                        <div className="categories-view1-wrap">
                          <i className="fas fa-layer-group" />
                          <a href="#">Lorem Ipsum</a>
                          <small>(4 Open Vacancies)</small>
                          <span>06</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* Categories List */}
                  <div className="more-spacer" />
                  <div className="main-load-btn"> <a href="#">Browse All Categories</a> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ClienteleDiversification;