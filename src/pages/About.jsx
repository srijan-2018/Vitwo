import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import BreadcamProps from '../components/master/BreadcamProps'
import OurEthicsEthos from '../components/about_us/OurEthicsEthos'
import Overview from '../components/about_us/Overview'
import MissionVission from '../components/about_us/MissionVission'
import OurManagemenTeam from '../components/about_us/OurManagemenTeam'

const About = () => {
  return (
    <div>
      <Header />
      <BreadcamProps heading="ABOUT US" subheading="OUR CORE VALUES" breadcrumbItems={[{'title':'Home','link':'../'},{'title':'About','link':'../about'}]} />
      <OurEthicsEthos />
      <Overview />
      <MissionVission />
      <OurManagemenTeam />
      <Footer />
    </div>
  )
}

export default About