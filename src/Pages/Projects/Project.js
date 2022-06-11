import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { motion }  from 'framer-motion';
const Project = ({project}) => {
    const{name,live,client,server,dis,id} =project;
    const navegition =useNavigate()
     
    const handleNavigate =(id)=>{
          navegition(`/project/${id}`)
    }
    
    return (
              <motion.div
            whileHover={{ translateY: -15 }}
            whileTap={{ scale: 1.05 }}
          >
           <div className="  card card-compact w-full bg-secondary text-white shadow-xl">
                                <figure><img src={project.img} alt="Shoes" /></figure>
                                <div className="card-body h-56 ">
                                    <h2 className="card-title">{name}</h2>
                                    <p>{dis}</p>
                                    <button onClick={()=>handleNavigate(id)} >More Details</button>
                                    <div className="card-actions justify">
                                    
                                        <a  href={live} target={"_blank"}   class="btn text-secondary  bg-white shadow hover:bg-stone-900 hover:text-white dark:bg-gray-700">Live Site</a>
                                        <a href={client} class="btn text-secondary  bg-white shadow hover:bg-stone-900 hover:text-white dark:bg-gray-700 "> <FaGithub/> Client Code</a>
                                      {
                                        project.server&& <a  href={server} class="btn text-secondary  bg-white shadow hover:bg-stone-900 hover:text-white dark:bg-gray-700">Server Code</a>  
                                      }
                                      
                                    </div>
                                  
                                </div>
                          
                          </div>
                          </motion.div>
       
    );
};

export default Project;