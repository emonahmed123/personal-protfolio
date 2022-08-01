import React from  'react';
//  import { motion } from 'framer-motion';
import bg  from '../../../Images/8219615_files_and_folders_document_paper_icon.png'
const AboutMe = () => {
    return (
        // <motion.div
        //     initial={{ opacity: 0, y: 50 }}
        //     whileInView={{ opacity: 1, y: 0 }}
        //     transition={{ duration: 1, ease: 'easeInOut' }}
        //     className="hero " >
            <div  className="hero-content mb-32 mt-32 w-full flex-col justify-between lg:flex-row "  id='about' >
                <div className='mask mask-hexagon mb-12 lg:mb-0'>
                    <img src={bg} className="" alt='about me' />
                </div>
                <div className='max-w-2xl ml-0 lg:ml-16 '>
                    <h1 className="text-5xl font-semibold mb-5">About <span className='text-neutral'>Me</span> </h1>
                    <p className="text-xl leading-relaxed mb-5">I am a web Junior developer with proficiency in front-end technologies like React, JavaScript, HTML, and CSS and Comfortibal with back-end technologies such as NodeJS and ExpressJS MongoDB.</p>
                    <button  className="btn_shadow font-blod">Recent Projects</button>
                </div>
            </div>
        //  </motion.div> 
    );
};
 
export default AboutMe;