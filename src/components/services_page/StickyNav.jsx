import React from 'react'
import { Link } from 'react-router-dom'

function StickyNav() {
  return (
    <div className="side_nav_style">
      <ul>
        <li><Link to="">Financial Services 24×7</Link></li>
        <li><Link to="">Management Consulting</Link></li>
        <li><Link to="">Assurance Services</Link></li>
        <li><Link to="">Regulatory & Advisory</Link></li>
        <li><Link to="">International VAT Reclaim</Link></li>
        <li><Link to="">Others Services</Link></li>
      </ul>
    </div>
  )
}

export default StickyNav