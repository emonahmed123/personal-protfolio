import React from 'react';
import contactdark from "../../../../Images/map/contactdark.png"
import { motion } from 'framer-motion';
const Map = () => {
    return (
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        // className="hero mb-32"
      >
         <div className=" dark:shadow-gray-700 shadow pb-2 rounded-lg bg-zinc-50 dark:bg-gray-800 ">
           
            <img className='rounded-lg' src={contactdark} alt="" />
        
        </div>


       </motion.div>
    );
};

export default Map;