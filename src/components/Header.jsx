import React, { useEffect } from 'react';
import logo from '../assets/images/vitwo-logo-black.png';
import  { Link } from 'react-router-dom'

const Header = () => {
    
    // Sticky Menu Area
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

           
    /* Method that will fix header after a specific scrollable */
           const isSticky = (e) => {
                const nav = document.querySelector('.header-section');
                const scrollTop = window.scrollY;
                scrollTop >= 250 ? nav.classList.add('is-sticky') : nav.classList.remove('is-sticky');
            };

            const [click, setClick] = React.useState(false);
              
            const handleClick = () => setClick(!click);
            
        return (
    <>
     <header>
         <div className="header_top">
            <div>
                <span><i className="fa-solid fa-user"></i> &nbsp; 24×7 Services Available</span>
            </div>
            <div>
                <span><i className="fa-solid fa-phone"></i> <a href="tel:+91 801 753 6666"> &nbsp; +91 801 753 6666</a></span>
            </div>
         </div>

        <nav className="nav header-section" >
                <div className="container-fluid">
                    <div className="header_top_left ">
                        <img src={logo} alt="" />
                    </div>
                    <div className="d-flex">
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className='nav-item'><Link to="/">Home</Link></li>
                            <li className='nav-item'><Link to="/about">About Us</Link></li>
                            <li className="relative nav-item">
                                <Link to=" ">Services <i className="fa-solid fa-chevron-down"></i></Link>
                                <ul className="drop">
                                    <li className="nav-item"><Link to="/services/FinancialServices">Financial Services 24×7</Link></li>
                                    <li className="nav-item"><Link to="/services/ManagementConsulting">Management Consulting</Link></li>
                                    <li className="nav-item"><Link to="/services/AssuranceServices">Assurance Services</Link></li>
                                    <li className="nav-item"><Link to="/services/RegulatoryAdvisory">Regulatory & Advisory</Link></li>
                                    <li className="nav-item"><Link to="/services/InternationalVatReclaim">International VAT Reclaim</Link></li>
                                    <li className="nav-item"><Link to="/services/OthersServices">Others Services</Link></li>
                                </ul>
                            </li>
                            <li className='nav-item'><Link to="/blog">Blog & Resources</Link></li>
                            <li className='nav-item'><Link to="/contact">Contact</Link></li>
                        </ul>

                        <div className="d-flex align-items-center">
                            <div className="search-box">
                                <input className="search-input" type="text" name placeholder="Search..." />
                                    <a href="#" className="search-btn">
                                    <i className="fas fa-search" />
                                </a>     
                            </div>


                            <div className="nav-icon" onClick={handleClick}>
                                <i className={click ? "fa fa-times fa-2x" : "fa fa-bars fa-2x"}></i>
                            </div>
                        </div>
                    </div>
                </div>
        </nav>
     </header>


    </>
  );   
}



// const Header = () => {
//     return (
//         <div className="header_fixed">

//         </div>
//     )
// }

export default Header;