import React from 'react';
import Projects from '../Projects/Projects';
import Skill from '../Skill/Skill';
import AboutMe from './AboutMe/AboutMe';
import Contact from './Contact/Contact';
import Protfoilo from './Portfoilo/Protfoilo';
import Postion from './Postion';
import Service from './Services/Services'


const Home = () => {

  return (
        <div>
  
       <Protfoilo></Protfoilo>
       <Skill></Skill>
       <Service></Service>
       <Projects></Projects>
       <Contact></Contact>
        <AboutMe></AboutMe>
        <Postion></Postion>
     



        </div>
    );
};

export default Home;