import React,{ useEffect} from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturesAbout from '../components/FeaturesAbout';
import AboutUsSection from '../components/AboutUsSection';
import ClienteleDiversification from '../components/ClienteleDiversification';
import ManagementConsultancy from '../components/ManagementConsultancy';
// import ManagementConsultancyNew from '../components/ManagementConsultancyNew';
import StartUp from '../components/StartUp';
import SupportSection from '../components/SupportSection';
import ValueProposition from '../components/ValueProposition';
import TechnologiesPlatform from '../components/TechnologiesPlatform';
import TaxOptimization from '../components/TaxOptimization';
import InternationalVat from '../components/InternationalVat';
import Testimonial from '../components/Testimonial';
import Counter from '../components/Counter';
import OurManagemenTeam from '../components/about_us/OurManagemenTeam'
import OurClients from '../components/OurClients';
import Footer from '../components/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css'
// import RoundSlider from '../components/RoundSlider';

const Home = () => {
    useEffect(() =>{
        Aos.init({duration: 2000});
    },[])
    return (
        <>  
            <Header />
            <Hero />
            <FeaturesAbout />
            <AboutUsSection />
            <ClienteleDiversification />
            <ManagementConsultancy />
            <SupportSection />
            <StartUp />
            {/* <RoundSlider style={{"zIndex": 99999}} /> */}
            <ValueProposition />
            <TechnologiesPlatform />
            <TaxOptimization />
            <InternationalVat />
            <Testimonial />
            <Counter />
            <OurClients />
            <OurManagemenTeam />
            <Footer />
        </>
    )
}

export default Home;