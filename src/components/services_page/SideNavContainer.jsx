import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'



const SideNavContainer = () => {
  const navLinkStyle = ({ isActive }) => {
    return{
      color : isActive ? '#f8ad40' : 'white',
    }
  }
  return (

    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-12">
          <div className="side_nav_style">
            <ul>
              <li><NavLink to="FinancialServices" style={navLinkStyle}>Financial Services 24×7</NavLink></li>
              <li><NavLink to="ManagementConsulting" style={navLinkStyle}>Management Consulting</NavLink></li>
              <li><NavLink to="AssuranceServices" style={navLinkStyle}>Assurance Services</NavLink></li>
              <li><NavLink to="RegulatoryAdvisory" style={navLinkStyle}>Regulatory & Advisory</NavLink></li>
              <li><NavLink to="InternationalVatReclaim" style={navLinkStyle}>International VAT Reclaim</NavLink></li>
              <li><NavLink to="OthersServices" style={navLinkStyle}>Others Services</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-9 col-12">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default SideNavContainer