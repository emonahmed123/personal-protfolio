import React from 'react';
import Projects from '../Projects/Projects';
import Skill from '../Skill/Skill';
import Protfoilo from './Portfoilo/Protfoilo';

const Home = () => {
    return (
        <div>
     <Protfoilo></Protfoilo>
      <Skill></Skill>
      
      <Projects></Projects>
        </div>
    );
};

export default Home;