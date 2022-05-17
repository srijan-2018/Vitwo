import React from 'react';
import hero_ob from '../assets/images/bg-video.gif';

const Hero = () => {
    return (
        <div className="hero">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-6">
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <div className="slider-wrapper">
                            Need for End to End
                            <div className="slider">
                                <div className="slider-text1"> Financial Management</div>
                                <div className="slider-text2"> Financial Services</div>
                                <div className="slider-text3"> Financial consultant</div>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat aliquid velit debitis inventore!</p>
                        <div className="d-flex flex-wrap">
                            <a href="/contact" className="btn_style" style={{marginRight:'20px', display:'flex', alignItems:'center'}}>Request a quote</a>
                            <a href="/contact" className="btn_stylish">Know More</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                        <div className="">
                            {/* <video src={hero_ob} autoPlay loop muted /> */}
                                {/* <source  type="video/mp4" /> */}
                            {/* </video> */}
                            <img src={hero_ob} className="w-100" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;