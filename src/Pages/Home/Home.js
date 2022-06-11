import React from 'react';
import Projects from '../Projects/Projects';
import Skill from '../Skill/Skill';
import AboutMe from './AboutMe/AboutMe';
import Contact from './Contact/Contact';
import Protfoilo from './Portfoilo/Protfoilo';

const Home = () => {
    return (
        <div>
     <Protfoilo></Protfoilo>
       <Skill></Skill>
       <Projects></Projects>
       <Contact></Contact>
        <AboutMe></AboutMe>


        </div>
    );
};

export default Home;