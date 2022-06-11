import React from 'react';
import javascripticon from '../../Images/Skillimgae/jsicon.png'
import reactscripticon from '../../Images/Skillimgae/reactlicon1.png'
import Mongodbicon from '../../Images/Skillimgae/mongodbicon.png'
import nodejsicon from '../../Images/Skillimgae/Nodelicon.png'
import { motion }  from 'framer-motion';
const Skill = () => {
   const SKills =[
{
   id:1,
   name:"JavaScript",
   img:javascripticon,
   dig:"Most popular Programing Language"

},
  {
      id:2,
      name:"React ",
      img:reactscripticon,
      dig:"Most popular Javascript"
},
  {
      id:3,
      name:"MongDB",
      img:Mongodbicon ,
      dig:"Most popular Database"
},

 {
     id:4 ,
     name: "Nodejs",
     img:nodejsicon ,
     dig:"Most Popular Backend js run time"
 }


   ]
    

    
    return (
      <motion.div
      initial={{ opacity: 0, x: -50, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      // className='max-w-2xl'
      >
       <div className='mt-44'>
         <div className= 'mx-24 bg-accent' >
         <h1 className='text-center text-3xl shadow-xl bg-yellow-400 rounded'>SKILL</h1>
           
         </div>
         <div  className=' grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-4 px-44 gap-3 pt-4 '>
         {  
         SKills.map(skill=> <div skill={skill} key={skill.id} >
        <motion.div
            whileHover={{ translateY: -15 }}
            whileTap={{ scale: 1.05 }}
          >

   <div class="  card w-44 h-60 bg-secondary shadow-xl text-white">
       <img  className='w-24' src={skill.img}alt="" />
  <div class="card-body">
     <h2 class="card-title">{skill.name}</h2>
     <p>{skill.dig}</p>
     <div class="card-actions justify-end">
    </div>
  </div>
</div>
</motion.div>
                 





         </div>

         )
     
        }
       
 

         </div>
  
</div>  
      
</motion.div>
    );
};

export default Skill;