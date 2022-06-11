import React, { useEffect, useState } from 'react';
import Project from './Project';
import { motion } from 'framer-motion';
const Projects = () => {
 const [projects,setProjects]=useState([]);

 useEffect(()=>{
           fetch("/Serevice.json")
           .then(res=>res.json())
           .then(data =>setProjects(data))  
 },[])
   
    return(
        <motion.div
        id='services'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="mt-28"
    >
            <div className='mt-20'id="projects" >
                 <div className='mx-24  shadow-xl bg-yellow-400 rounded'>
                 <h1 className='text-center text-3xl '>My Projects </h1>

                 </div>

                <div className=' grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 px-12 gap-5 pt-4 mt-3' >
                    {
                     projects.map(project => <Project key={project.id} project={project}></Project>)
                    }

                </div>

            </div>

        </motion.div>

      
    );
};

export default Projects;