import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import BreadcamProps from '../components/master/BreadcamProps'
import SideNavContainer from '../components/services_page/SideNavContainer'

const Services = () => {
  return (
    <>
      <div>
        <Header />
        <BreadcamProps heading="Financial Services 24×7" subheading="OUR CORE VALUES" breadcrumbItems={[{'title':'Home','link':'../'},{'title':'Services','link':'../services'}]}/>
        <SideNavContainer />
        <Footer />
      </div>
    </>
  );
}

export default Services;