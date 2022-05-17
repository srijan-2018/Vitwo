import React from 'react'
import EthicsEthos from '../../assets/images/img-9.png';

const OurEthicsEthos = () => {
  return (
    <div className="container pb-5">
      <div className="row">
        <div className="col-md-6 col-12">
          <div>
            <div className="ethicsethos">
              <div className="title1" >
                <span>Our Ethics & Ethos</span>
              </div>
              <p>Our values define who we are. They are the fundamental beliefs and pillars of our organization. They guide our actions and behaviour, influence the way we work with each other and the way we serve our clients and engage with our communities.</p>
              <p>Our values give us confidence that we are using the same principles to help us make these decisions throughout our organization.</p>
              <p>Our value system helps us to work together in the most effective and fulfilling way. They define what we stand for and how we do things</p>
              <ul>
                <li><i className="fa-solid fa-chevron-right"></i> &nbsp; Integrity &amp; Professionalism</li>
                <li><i className="fa-solid fa-chevron-right"></i> &nbsp; Energy, Enthusiasm &amp; Passion</li>
                <li><i className="fa-solid fa-chevron-right"></i> &nbsp; Leading by Example and Doing things Right.</li>
                <li><i className="fa-solid fa-chevron-right"></i> &nbsp; Respect for Others &amp; Working Together and Building Relationship.</li>
                <li><i className="fa-solid fa-chevron-right"></i> &nbsp; Commitment &amp; Openness in Communication.</li>
              </ul>
            </div>

          </div>
        </div>
        <div className="col-md-6 col-12 d-flex align-items-center">
          <img src={EthicsEthos} alt=""></img>
        </div>
      </div>
    </div>
  )
}

export default OurEthicsEthos