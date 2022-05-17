import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import ManagementConsulting from './components/services_page/ManagementConsulting'
import FinancialServices from './components/services_page/FinancialServices';
import AssuranceServices from './components/services_page/AssuranceServices'
import RegulatoryAdvisory from './components/services_page/RegulatoryAdvisory';
import InternationalVatReclaim from './components/services_page/InternationalVatReclaim';
import OthersServices from './components/services_page/OthersServices';
// import Aos from 'aos';
// import "aos/dist/aos.css";
// import { useEffect } from 'react';


function App() {
  // useEffect(() => {
  //   Aos.init()
  //    // Aos.refresh();
  //  }, []);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} >
          <Route path='FinancialServices' element={<FinancialServices />} />
          <Route path='ManagementConsulting' element={<ManagementConsulting />} />
          <Route path='AssuranceServices' element={<AssuranceServices />} />
          <Route path='RegulatoryAdvisory' element={<RegulatoryAdvisory />} />
          <Route path='InternationalVatReclaim' element={<InternationalVatReclaim />} />
          <Route path='OthersServices' element={<OthersServices />} />
        </Route>
        <Route path='/managementConsulting' element={<ManagementConsulting />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blogdetails' element={<BlogDetails />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
