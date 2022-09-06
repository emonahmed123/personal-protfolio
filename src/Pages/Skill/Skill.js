import React from 'react';
import javascripticon from '../../Images/Skillimgae/jsicon.png'
import reactscripticon from '../../Images/Skillimgae/reactlicon1.png'
import Mongodbicon from '../../Images/Skillimgae/mongodbicon.png'
import nodejsicon from '../../Images/Skillimgae/Nodelicon.png'
import html from '../../Images/Skillimgae/htmlicon.png.png'
import css from '../../Images/Skillimgae/csslicon.png.png'
import boot from '../../Images/Skillimgae/boostrap.png'
import Tail from '../../Images/Skillimgae/tailwind.png'
// import { motion } from 'framer-motion';
import './Skill.css'
const Skill = () => {
  const SKills = [
    {
      id: 1,
      name: "HTML",
      img: html,


    },
    {
      id: 2,
      name: "CSS",
      img: css,


    },
    {
      id: 3,
      name: "Bootstrap",
      img: boot,


    },
    {
      id: 4,
      name: "Tailwind",
      img: Tail,


    },
    {
      id: 5,
      name: "JavaScript",
      img: javascripticon,


    },
    {
      id: 6,
      name: "React ",
      img: reactscripticon,

    },
    {
      id: 7,
      name: "MongDB",
      img: Mongodbicon,

    },

    {
      id: 8,
      name: "Nodejs",
      img: nodejsicon,

    }


  ]



  return (
    // <motion.div
    //   initial={{ opacity: 0, x: -50, scale: 0.9 }}
    //   animate={{ opacity: 1, x: 0, scale: 1 }}
    //   transition={{ duration: 1, ease: "easeInOut" }}
    // // className='max-w-2xl'
    // >
    <div className='mt-44 md:mt-[7rem] lg:mt-32'>
      <div className='mx-24 ' >
        {/* <h1 className='text-center text-3xl shadow-xl bg-yellow-400 rounded'>SKILL</h1> */}
        <div class="flex flex-col w-full border-opacity-50">

          <div class="text-3xl pb-5 text-center font-bold">MY <span className=' text-neutral'>SKILL</span> </div>

        </div>
      </div>
      <div className=' grid grid-col-1 md:grid-cols-2  mx-24 lg:grid-cols-4 lg:mx-44 gap-5 pt-4' >
        {
          SKills.map(skill => <div skill={skill} key={skill.id} >
            {/* <motion.div
                whileHover={{ translateY: -15 }}
                whileTap={{ scale: 1.05 }}
              > */}

            <div class=" Skill-Card box_shodow card w-44 md:w-full h-48 bg-secondary mx-auto shadow-xl text-black">
              <img className='w-24 mx-auto mt-2' src={skill.img} alt="" />
              <div class="card-body">
                <h2 class=" font-bold text-center text-xl">{skill.name}</h2>
                <div class="card-actions justify-end">
                </div>
              </div>
            </div>
            {/* </motion.div> */}

          </div>

          )

        }
 </div>
 </div>

    // </motion.div>
  );
};

export default Skill;