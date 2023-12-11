import React from 'react';
import Home from '../Home/Home';
import Navbar from '../../navbar/Navbar';
import Contact from '../../contact/Contact';
import Footer from '../../footer/Footer';
import WelcomeSection from '../../welcomeSection/WelcomeSection';
import AboutMe from '../../aboutme/AboutMe';
import Services from '../../services/Services';
import Projects from '../../Projects/Projects';
import Skills from '../../skills/Skills';

const MainHome = () => {
    return (
        <div>
            <Navbar/>
            <Home />
            <WelcomeSection />
            <AboutMe/>
            <Services />
            <Skills/>
            <Projects />
            <Contact />
            <Footer />
            
        </div>
    );
};

export default MainHome;