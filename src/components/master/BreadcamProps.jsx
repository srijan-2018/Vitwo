import React from 'react'
import  { Link } from 'react-router-dom'

const BreadcamProps = ({ heading, subheading, breadcrumbItems})=> {

  return (
    <div>
        <div className="about_us">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="container d-flex">
                    <div>
                      <h1>{heading}</h1>
                      <h2>{subheading}</h2>
                    </div>
                    <div>
                      <ol className="breadcrumb_style">
                        {breadcrumbItems.map((breadcrumbItem,i) => {
                          if(i>0){
                            return <li>&nbsp;/&nbsp;<Link to={breadcrumbItem["link"]}>{breadcrumbItem["title"]}</Link></li>;
                          }else{
                            return <li><Link to={breadcrumbItem["link"]}>{breadcrumbItem["title"]}</Link></li>;
                          }
                        })}
                         
                      </ol>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default BreadcamProps;

