import React from 'react';
import { useNavigate } from "react-router-dom";
//  import { motion }  from 'framer-motion';
import './Projects.css'
const Project = ({ project }) => {
  const { name, live, client, server, dis, id } = project;
  const navegition = useNavigate()

  const handleNavigate = (id) => {
    navegition(`/project/${id}`)
  }

  return (
    //     <motion.div
    //   whileHover={{ translateY: -15 }}
    //   whileTap={{ scale: 1.05 }}
    // >
    <>
 
    {/* //  </motion.div> */}

    <div className="portfolio-card text-accent hover:text-white" >
      <div className="text-left">
        <div className="image-content w-full rounded-xl overflow-hidden">
          <img src={project.img} alt="" />
        </div>
        <div>
         
          <h2 className="project-title  font-semibold text-xl my-4">
            {project.name}
            <i className="title-icon text-secondary ml-2 fa-solid fa-arrow-turn-up"></i>
          </h2>
          <p className=''>{project.dis}</p>
           
        </div>
        <div className="button-content flex justify-between mt-5">
           <button
            className="project-button text-[10px] lg:text-[12px]"
            onClick={() => handleNavigate(id)} 
          >
            <i className="text-sm text-secondary mr-2 fa-solid fa-circle-dot"></i>
            View Details
          </button>
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="project-button text-[10px] lg:text-[12px]"
          >
            <i className="text-sm text-secondary mr-2 fa-solid fa-circle-dot"></i>
            View Live
          </a> 
        </div>
      </div>
    </div> 





</>
  );
};

export default Project;