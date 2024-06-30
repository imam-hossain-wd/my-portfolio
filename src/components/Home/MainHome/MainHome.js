import React, { useState } from 'react';
import Home from '../Home/Home';
import Contact from '../../contact/Contact';
import WelcomeSection from '../../welcomeSection/WelcomeSection';
import AboutMe from '../../aboutme/AboutMe';
import Services from '../../services/Services';
import Projects from '../../Projects/Projects';
import MySkills from '../../skills/MySkills';
import Navbar from '../../navbar/Navbar';

const MainHome = () => {
    const [openDrawer, setOpenDrawer]= useState(false)
    return (
        <>
            <Navbar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/> 
             <Home  openDrawer={openDrawer}/>
            {/* <Navbar />
            <Home /> */}
            <WelcomeSection />
            <AboutMe />
            <Services />
            <MySkills />
            <Projects />
            <Contact />
        </>
    );
};

export default MainHome;