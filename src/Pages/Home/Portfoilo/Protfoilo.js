import React from 'react';
import { motion } from "framer-motion"
import bg from '../../../Images/portfoilo/my-bg2.png'
import TypewriterComponent from 'typewriter-effect';
const Protfoilo = () => {
    return ( 
       
    <div>
           <div class="hero h-full lg:h-[60vh] shadow-2xl  mt-16 z-0 ">
  <div class="hero-content flex-col lg:flex-row">
  <div >
  <motion.div
                    initial={{ opacity: 0, x: -50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    // className='max-w-2xl'
                    >
      <h1 class="text-5xl font-bold">Hello,  I am Emon Ahmed  </h1>
      <h2 class="py-6 text-3xl ">
      <span className='font-semibold text-secondary'>
                            <TypewriterComponent
                                options={{
                                    strings: ['Junior Webdeveloper'],
                                    deleteSpeed: 50,
                                    pauseFor: 500,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
      
       </h2>
      <a href='https://drive.google.com/file/d/1W_JL8-A1s-RQlk2zosQPXD3Nny-qVudD/view?usp=sharing'  target="_blank" class="btn btn-primary"> Download resume</a>
    </motion.div>
    </div> 
    
         <div className='h-[60vh] shrink-0'>
         <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className='mask mask-hexagon max-w-sm mb-12 lg:mb-0'
                >
                        <img src={bg} class="h-full" alt='' />
                </motion.div>
    

         </div>
   
  </div>
</div>



    </div>


        
    );
};

export default Protfoilo;