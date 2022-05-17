import $ from "jquery"
import "jquery-ui-dist/jquery-ui"
import gsap from 'gsap'
import Draggable from 'gsap/Draggable'
// import { TweenMax, TimelineMax } from 'gsap/all';
import { useEffect } from 'react';

function RoundSlider() {

    useEffect(()=>{
        gsap.registerPlugin(Draggable);
        var wheel = Draggable.create("#wheel", {
          type:"rotation",
          throwProps:true,
            snap:function(endValue) {
              return Math.round(endValue / 90) * 90;
          },   
            onDrag: function() {},
            onThrowComplete: function() {
              dragActive()
            }
        });
    
        TweenMax.set('#wheel li:not(.active) .details > *', {
          opacity: 0,
          y: -10
        })
    
        // Calculate which product is active
        function dragActive() {
          var rot = wheel[0].rotation / 360
          var decimal = rot % 1
          var sliderLength = $('#wheel li').length
          var tempIndex = Math.round(sliderLength * decimal)
          var index
    
          if (rot < 0) {
            index = Math.abs(tempIndex)
          } else {
            index = sliderLength - tempIndex
          }
    
          if (decimal === 0) {
            index = 0
          }
          
          TweenMax.staggerTo('#wheel li.active .details > *', 0.6,   {
            opacity: 0,
            y: -10
          }, 0.1)
    
          $('#wheel li.active').removeClass('active')
          $($('#wheel li')[index]).addClass('active')
          
          TweenMax.staggerTo('#wheel li.active .details > *', 0.6,   {
            opacity: 1,
            y: 0
          }, 0.1)
    
        }
    
        // Tween rotation
        function rotateDraggable(deg, callback) {
          var rot = wheel[0].rotation
          var tl = new window.TimelineMax()
    
          tl
            .to('#wheel', .5, {
              rotation: rot + deg,
              onComplete: function() {
                callback()
              }
            });
    
          wheel[0].rotation = rot + deg
        }
    
        // Handlers
        function nextHandler() {
          var current = $('#wheel li.active')
          var item = current + 1
          if (item > $('#wheel li').length) {
            item = 1
          }
          rotateDraggable(360/$('#wheel li').length, dragActive);
        }
    
        function prevHandler() {
          var current = $('#wheel li.active')
          var item = current - 1
          if (item > 1) {
            item = $('#wheel li').length
          }
          rotateDraggable(-360/$('#wheel li').length, dragActive);
        }
    
        $('.next').on('click', nextHandler);
        $('.prev').on('click', prevHandler);
    
        var square = '<svg x="0px" y="0px" width="1200px" height="600px" viewBox="0 0 1200 600"><rect x="0.002" y="0.499" width="1200" height="600"/></svg>'
      },[])

  return (
    <>

        <div className="position-relative">
          <svg className="svg-mask" width="1200px" height="600px" viewBox="0 0 1200 600">
            <defs>
              <clipPath id="quarterMask">
                <path d="M299.001,26.649L0,325.65c330.267,330.268,865.736,330.268,1196.004,0L897.003,26.649
            C731.868,191.784,464.136,191.784,299.001,26.649z" />
              </clipPath>
            </defs>
          </svg>
          <div className="content">
            <ul className="featured-slider" id="wheel">
              <li className="active">
                <div className="image">
                  <div className="details">
                    <h1 className="title">Lorem Ipsum</h1>
                    <hr className="small" />
                    <h6 className="roles">Videography / Editing</h6>
                    <a href="#" className="button">View Project</a>
                  </div>
                  <img src="https://unsplash.it/1200/900" alt="" />
                </div>
              </li>
              <li>
                <div className="image">
                  <div className="details">
                    <h1 className="title">Lorem Ipsum</h1>
                    <hr className="small" />
                    <h6 className="roles">Videography / Editing</h6>
                    <a href="#" className="button">View Project</a>
                  </div>
                  <img src="https://unsplash.it/1200/901" alt="" />
                </div>
              </li>
              <li>
                <div className="image">
                  <div className="details">
                    <h1 className="title">Lorem Ipsum</h1>
                    <hr className="small" />
                    <h6 className="roles">Videography / Editing</h6>
                    <a href="#" className="button">View Project</a>
                  </div>
                  <img src="https://unsplash.it/1200/902" alt="" />
                </div>
              </li>
              <li>
                <div className="image">
                  <div className="details">
                    <h1 className="title">Lorem Ipsum</h1>
                    <hr className="small" />
                    <h6 className="roles">Videography / Editing</h6>
                    <a href="#" className="button">View Project</a>
                  </div>
                  <img src="https://unsplash.it/1200/903" alt="" />
                </div>
              </li>
            </ul>
          </div>
          <nav className="scroll-btn">
            <a className="prev">Prev</a>
            <a className="next">Next</a>
          </nav>
          <div id="pentitle" style={{display: 'none'}} data-title="29/52 - Circular Slider" />
        </div>

    </>
  );
}

export default RoundSlider;
