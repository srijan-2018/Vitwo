import React, { useEffect } from 'react';
import FeatureListItem from './FeatureListItem';
import Aos from 'aos';
import 'aos/dist/aos.css'



const FeaturesAbout = () => {
    useEffect(() =>{
        Aos.init({duration: 2000});
    },[])
    return (
        <>
            <div className="container overflow_top">

                {/* <div className="my-5 text-center">
                    <h2 className="heading_style"><span className="divider">Our Expertise</span></h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem accusantium optio consectetur culpa exercitationem omnis laudantium iure recusandae possimus commodi.</p>
                </div> */}

                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12 mb-5 mb-lg-0 first1" data-aos="fade-up" data-aos-delay="100">
                        <FeatureListItem icon="fa-solid fa-computer" title="Smart softwares" para="Lorem ipsum, dolor sit amet consectetur adipisicing." />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mb-5 mb-lg-0 second1" data-aos="fade-up" data-aos-delay="200">
                        <FeatureListItem icon="fa-solid fa-chart-simple" title="Trusted security" para="Lorem ipsum, dolor sit amet consectetur adipisicing." />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mb-5 mb-lg-0 third1" data-aos="fade-up" data-aos-delay="300">
                        <FeatureListItem icon="fa-solid fa-award" title="Awards winners" para="Lorem ipsum, dolor sit amet consectetur adipisicing." />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mb-5 mb-lg-0 forth1" data-aos="fade-up" data-aos-delay="400">
                        <FeatureListItem icon="fa-solid fa-user" title="Great experience" para="Lorem ipsum, dolor sit amet consectetur adipisicing." />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturesAbout;