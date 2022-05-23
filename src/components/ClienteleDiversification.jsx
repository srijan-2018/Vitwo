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
                <div className="col-md-12 mb-5">
                  {/* FancyTitle */}
                  <div className="text-center">
                    <h2 className="heading_style"><span className="divider">Manufacturing Industries</span></h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem accusantium optio consectetur culpa exercitationem omnis laudantium iure recusandae possimus commodi.</p>
                  </div>

                  {/* FancyTitle */}
                  {/* Categories List */}
                  <div className="categories categories-view1">
                    <ul className="row d-flex justify-content-center">
                      <li className="col-md-6 col-lg-4" data-aos="zoom-in">
                        <div className="categories-view1-wrap">
                        <i class="fa-solid fa-car"></i>
                          <a href="#">Automobile</a>
                          <small>Lorem, ipsum dolor sit amet consectetur adipisicing.</small>
                          <span>01</span>
                        </div>
                      </li>
                      <li className="col-md-6 col-lg-4" data-aos="zoom-in">
                        <div className="categories-view1-wrap">
                          <i class="fa-solid fa-gas-pump"></i>
                          <a href="#">Auto Components</a>
                          <small>Lorem, ipsum dolor sit amet consectetur adipisicing.</small>
                          <span>02</span>
                        </div>
                      </li>
                      <li className="col-md-6 col-lg-4" data-aos="zoom-in">
                        <div className="categories-view1-wrap">
                          <i class="fa-solid fa-shirt"></i>
                          <a href="#">Apparels</a>
                          <small>Lorem ipsum dolor sit amet consectetur adipisicing.</small>
                          <span>03</span>
                        </div>
                      </li>
                      <li className="col-md-6 col-lg-4" data-aos="zoom-in">
                        <div className="categories-view1-wrap">
                          <i class="fa-solid fa-champagne-glasses"></i>
                          <a href="#">Alcohol</a>
                          <small>Lorem ipsum dolor sit amet consectetur adipisicing.</small>
                          <span>04</span>
                        </div>
                      </li>
                      <li className="col-md-6 col-lg-4" data-aos="zoom-in">
                        <div className="categories-view1-wrap">
                          <i class="fa-solid fa-plug-circle-bolt"></i>
                          <a href="#">Architectural Lightning</a>
                          <small>Lorem ipsum dolor sit amet, consectetur adipisicing.</small>
                          <span>05</span>
                        </div>
                      </li>
                      <li className="col-md-6 col-lg-4" data-aos="zoom-in">
                        <div className="categories-view1-wrap">
                          <i class="fa-solid fa-helmet-safety"></i>
                          <a href="#">Engineering & Heavy Fabrication</a>
                          <small>Lorem ipsum dolor, sit amet consectetur adipisicing.</small>
                          <span>06</span>
                        </div>
                      </li>
                      <li className="col-md-6 col-lg-4" data-aos="zoom-in">
                        <div className="categories-view1-wrap">
                          <i class="fa-solid fa-user"></i>
                          <a href="#">Spun & Blended Yarns</a>
                          <small>Lorem ipsum dolor, sit amet consectetur adipisicing.</small>
                          <span>07</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* Categories List */}
                  <div className="more-spacer" />
                  <div className="main-load-btn"> <a href="#">Browse All Categories</a> </div>
                </div>
                <div className="col-md-12">
                  {/* FancyTitle */}
                  <div className="mb-lg-5 mb-5 text-center">
                    <h2 className="heading_style"><span className="divider">Service Industries</span></h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem accusantium optio consectetur culpa exercitationem omnis laudantium iure recusandae possimus commodi.</p>
                  </div>
                  {/* FancyTitle */}
                  {/* Categories List */}
                  <div className="categories categories-view1">
                    <ul className="row d-flex justify-content-center">
                      <li className="col-md-6 col-lg-4" data-aos="zoom-in">
                        <div className="categories-view1-wrap">
                          <i class="fa-solid fa-ship"></i>
                          <a href="#">Courier / Cargo Aggregators</a>
                          <small>Lorem ipsum dolor sit amet consectetur adipisicing.</small>
                          <span>01</span>
                        </div>
                      </li>
                      <li className="col-md-6 col-lg-4" data-aos="zoom-in">
                        <div className="categories-view1-wrap">
                          <i class="fa-solid fa-apple-whole"></i>
                          <a href="#">Food & Beverages</a>
                          <small>Lorem, ipsum dolor sit amet consectetur adipisicing.</small>
                          <span>02</span>
                        </div>
                      </li>
                      <li className="col-md-6 col-lg-4" data-aos="zoom-in">
                        <div className="categories-view1-wrap">
                          <i class="fa-solid fa-briefcase-medical"></i>
                          <a href="#">Health Service Aggregators</a>
                          <small>Lorem ipsum dolor sit amet consectetur adipisicing.</small>
                          <span>03</span>
                        </div>
                      </li>
                      <li className="col-md-6 col-lg-4" data-aos="zoom-in">
                        <div className="categories-view1-wrap">
                          <i class="fa-brands fa-internet-explorer"></i>
                          <a href="#">Internet Service Providers</a>
                          <small>Lorem ipsum dolor sit amet consectetur adipisicing.</small>
                          <span>04</span>
                        </div>
                      </li>
                      <li className="col-md-6 col-lg-4" data-aos="zoom-in">
                        <div className="categories-view1-wrap">
                          <i class="fa-solid fa-circle-info"></i>
                          <a href="#">Insurance TPA</a>
                          <small>Lorem ipsum dolor sit amet consectetur adipisicing.</small>
                          <span>05</span>
                        </div>
                      </li>
                      <li className="col-md-6 col-lg-4" data-aos="zoom-in">
                        <div className="categories-view1-wrap">
                          <i class="fa-solid fa-users"></i>
                          <a href="#">Insurance Advisory & Broking</a>
                          <small>Lorem ipsum dolor sit, amet consectetur adipisicing.</small>
                          <span>06</span>
                        </div>
                      </li>
                      <li className="col-md-6 col-lg-4" data-aos="zoom-in">
                        <div className="categories-view1-wrap">
                          <i class="fa-solid fa-hand-holding-medical"></i>
                          <a href="#">Medical Tourism</a>
                          <small>Lorem ipsum dolor sit, amet consectetur adipisicing.</small>
                          <span>07</span>
                        </div>
                      </li>
                      <li className="col-md-6 col-lg-4" data-aos="zoom-in">
                        <div className="categories-view1-wrap">
                        <i class="fa-solid fa-hands-bubbles"></i>
                          <a href="#">Online Laundry</a>
                          <small>Lorem ipsum dolor sit amet consectetur adipisicing.</small>
                          <span>08</span>
                        </div>
                      </li>
                      <li className="col-md-6 col-lg-4" data-aos="zoom-in">
                        <div className="categories-view1-wrap">
                        <i class="fa-solid fa-computer"></i>
                          <a href="#">Software Development</a>
                          <small>Lorem ipsum dolor sit amet consectetur adipisicing.</small>
                          <span>09</span>
                        </div>
                      </li>
                      <li className="col-md-6 col-lg-4" data-aos="zoom-in">
                        <div className="categories-view1-wrap">
                        <i class="fa-brands fa-windows"></i>
                          <a href="#">Systems Integrator</a>
                          <small>Lorem ipsum dolor sit amet consectetur adipisicing.</small>
                          <span>10</span>
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