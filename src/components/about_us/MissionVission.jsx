import React from 'react'
import vision from '../../assets/images/Vision.png';
import mission from '../../assets/images/mission.png';

const MissionVission = () => {
  return (
    <div className="container py-5">

      <div className="row pt-5">
        <div className="col-md-6 col-12">
          <div className="title1" >
            <span>Our Mission</span>
          </div>
          <p>We have vision to create a global organization, respected and preferred by all for our values, principles and excellence in service through our Knowledge, Promptness and perseverance. We are committed To continuously Endeavour to provide strategic & real time support to clients to incessantly improve our professional standards, with an aim to give better than our best and are happy to take responsibility towards betterment of our society by doing our work in a most eco friendly manner and without wasting or damaging natural resources and therefore working towards the paperless office philosophy to save tree.</p>
        </div>
        <div className="col-md-6 col-12">
          <img src={mission} alt=""></img>
        </div>
      </div>
      
      <div className="row pt-5">
        <div className="col-md-6 col-12">
          <img src={vision} alt=""></img>
        </div>
        <div className="col-md-6 col-12">
          <div className="title1" >
            <span>Our Vission</span>
          </div>
          <p>We have vision to create a global organization, respected and preferred by all for our values, principles and excellence in service through our Knowledge, Promptness and perseverance. We are committed To continuously Endeavour to provide strategic & real time support to clients to incessantly improve our professional standards, with an aim to give better than our best and are happy to take responsibility towards betterment of our society by doing our work in a most eco friendly manner and without wasting or damaging natural resources and therefore working towards the paperless office philosophy to save tree.</p>
        </div>
      </div>

    </div>
  )
}

export default MissionVission