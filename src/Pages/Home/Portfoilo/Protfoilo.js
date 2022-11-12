import React from 'react';
// import { motion } from "framer-motion"
import bg from '../../../Images/portfoilo/my-bg2.png'
import './Protfolio.css'
import TypewriterComponent from 'typewriter-effect';
import { HashLink as Link } from "react-router-hash-link";


const Protfoilo = () => {


  
    return ( 
       
    <>
 
     <div className="  text-white ">
      <div className=" shink-0  max-w-7xl mx-auto mt-16 flex flex-col-reverse lg:flex-row justify-between items-center">
        <div className="w-full lg:w-2/3">
        {/* <motion.div
                    initial={{ opacity: 0, x: -50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    // className='max-w-2xl'
                    > */}
          <div>
        
            <p
           
              className="uppercase text-white text-left text-xs lg:text-sm font-blod"
            >
              Welcome To My World
            </p>
            <h1
              
              className="uppercase font-semibold my-7 text-left   text-3xl lg:text-6xl leading-snug"
            >
              Hi, I'm <span className="text-neutral">EMON AHMED</span>
              <br />
              <span className='text-4xl'>
              <TypewriterComponent
                                options={{
                                    strings: ['JUNIOR WEBDEVELOPER','REACT DEVELOPER','MERN STACK DEVELOPER,'],
                                    deleteSpeed: 50,
                                    pauseFor: 500,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                
              </span>
            </h1>
            <p
             
              className="text-left  w-full lg:w-[60ch]"
            >
              Hi I am a Junior developer And I can build your website as you
              want.
              <br />
              <br />
              Creative problem solver with demonstrated ability to work on
              multiple projects simultaneously.Positive driven and confident
              individual with an apt for learning new technology.{" "}
            </p>
           
          </div>
          <div className="flex gap-5 my-10 -mb-20 ">
            <div className='btn_shadow'>
              <a
                className="anchor-button py-[0.85rem] px-4 lg:px-12"
                href="https://drive.google.com/file/d/12QKkE1-roCDWpzADgxTS3iARv-6N0bN5/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                My Resume
              </a>
            </div>

            <div className='btn_shadow ' >
              <Link
                smooth
                className="anchor-button py-[0.85rem] px-4 lg:px-12"
                to="/home#contact"
              >
                Hire me
              </Link>
            </div>
          </div>
          <div className="text-black flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between pr-0 lg:pr-36 mt-32">
            <div>
              <h5
                
                className="text-left mb-3 uppercase tracking-wide"
              >
                Find Me
              </h5>
              <div
            
                className="flex gap-5"
              >
                <a
                  href="https://github.com/emonahmed123"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="btn_shadow">
                    {" "}
                    <i className="fa-brands fa-github"></i>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/emon-ahmed123/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="btn_shadow">
                    {" "}
                    <i className="fa-brands fa-linkedin-in"></i>
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100009847200102"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="btn_shadow">
                    {" "}
                    <i className="fa-brands fa-facebook-f"></i>
                  </div>
                </a>
              </div>
            </div>
            <div>
              <h5
                
                className="text-left mb-3 uppercase tracking-wide"
              >
                Best skills
              </h5>
              <div className="flex gap-5">
                <div className="btn_shadow text-blue-500">
                  <i className="fa-brands fa-react"></i>
                </div>
                <div className="btn_shadow text-yellow-500">
                  <i className="fa-brands fa-js-square"></i>
                </div>
                <div className="btn_shadow text-blue-500">
                  <i className="fa-brands fa-css3-alt"></i>
                </div>
              </div>
            </div>
         
          </div>
          {/* </motion.div> */}
        </div>
        {/* <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    
                >  */}
        <div   className="image w-[18rem] lg:w-[32rem] shink-0   h-[25rem] lg:h-[35rem]  flex justify-end bg-white relative mb-20 mt-2 lg:mt-0">
          
             
          
          <img className="absolute bottom-0 lg:mr-4 "  src={bg} alt="" />
       
        
        </div>
        {/* </motion.div> */}
      </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    </>
      
    

        
    );
};

export default Protfoilo;