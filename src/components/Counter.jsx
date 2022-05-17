import React, {useState} from 'react'
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import CounterImg from '../assets/images/img-7.png';

const Counter = () => {
  const [viewPortEntered,setViewPortEntered] = useState(false)
  return (

    <div className="container-fluid my-5 py-5">


        <div className="row px-3 Counter_max_width">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-12 text-center" data-aos="flip-left">
                <img src={CounterImg} alt=""></img>
              </div>
              <div className="col-lg-6 col-12 d-flex align-items-center" data-aos="flip-right">
                <div>
                  <div className="title my-5 mb-lg-4">
                    <h2>Our Overview</h2>
                    <p>About us</p>
                  </div>
                  <div className="counter_text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa id cum quam, ipsam est mollitia veniam perspiciatis obcaecati ut libero. Sunt voluptas repellendus alias sapiente reiciendis accusantium provident vitae culpa neque nisi voluptatem laborum enim architecto recusandae modi impedit non, odit dolores dignissimos veritatis similique maxime, ipsam dolor laboriosam.<br/><br/>Repellat eligendi iure optio possimus eius eaque fuga tempora cumque amet suscipit impedit totam sunt quibusdam aperiam nemo autem odio ut voluptatibus, architecto mollitia nihil.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row boxed-area py-5 px-3 Counter_max_width1 my-5" data-aos="zoom-in">
          <div className="col-lg-3 col-md-6 col-12 text-center box_right_border">
            <div className="counter counter-horizontal counter-icon">
              <i className="fa-solid fa-earth-americas"></i>
              <div className="px-3">
                <h3>Total Revenue (Mi)</h3>
                <div className="value d-flex align-items-center">
                  <CountUp end={8060} duration={5} redraw={true} start={viewPortEntered ? null : 0}>
                    {({ countUpRef }) => {
                      return (
                        <VisibilitySensor
                          active={!viewPortEntered}
                          onChange={isVisible => {
                            if (isVisible) {
                              setViewPortEntered(true);
                            }
                          }}
                          delayedCall
                        >
                          <h4 className="mb-0" ref={countUpRef} />
                        </VisibilitySensor>
                      );
                    }}
                  </CountUp>
                    <span className="mx-2">+</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 text-center box_right_border">
            <div className="counter counter-horizontal counter-icon">
              <i className="fa-solid fa-earth-americas"></i>
              <div className="px-3">
                <h3>Total Transactions Handled</h3>
                <div className="value d-flex align-items-center">
                  <CountUp end={8060} duration={5} redraw={true} start={viewPortEntered ? null : 0}>
                    {({ countUpRef }) => {
                      return (
                        <VisibilitySensor
                          active={!viewPortEntered}
                          onChange={isVisible => {
                            if (isVisible) {
                              setViewPortEntered(true);
                            }
                          }}
                          delayedCall
                        >
                          <h4 className="mb-0" ref={countUpRef} />
                        </VisibilitySensor>
                      );
                    }}
                  </CountUp>
                  <div>
                    <span className="mx-2">+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 text-center box_right_border">
            <div className="counter counter-horizontal counter-icon">
              <i className="fa-solid fa-earth-americas"></i>
              <div className="px-3">
                <h3>Book Size (Mi)</h3>
                <div className="value d-flex align-items-center">
                  <CountUp end={8060} duration={5} redraw={true} start={viewPortEntered ? null : 0}>
                    {({ countUpRef }) => {
                      return (
                        <VisibilitySensor
                          active={!viewPortEntered}
                          onChange={isVisible => {
                            if (isVisible) {
                              setViewPortEntered(true);
                            }
                          }}
                          delayedCall
                        >
                          <h4 className="mb-0" ref={countUpRef} />
                        </VisibilitySensor>
                      );
                    }}
                  </CountUp>
                  <div>
                    <span className="mx-2">+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 text-center box_right_border">
            <div className="counter counter-horizontal counter-icon">
              <i className="fa-solid fa-earth-americas"></i>
              <div className="px-3">
                <h3>Years Team's Average Experience</h3>
                <div className="value d-flex align-items-center">
                    <div>
                      <CountUp end={8060} duration={5} redraw={true} start={viewPortEntered ? null : 0}>
                      {({ countUpRef }) => {
                        return (
                          <VisibilitySensor
                            active={!viewPortEntered}
                            onChange={isVisible => {
                              if (isVisible) {
                                setViewPortEntered(true);
                              }
                            }}
                            delayedCall
                          >
                            <h4 className="mb-0" ref={countUpRef} />
                          </VisibilitySensor>
                        );
                      }}
                      </CountUp>
                    </div>
                    <div>
                      <span className="mx-2">+</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

  )
}

export default Counter;