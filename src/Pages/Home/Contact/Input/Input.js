import React from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
const Input = () => {
    
    const sendEmail=(e)=>{
        e.preventDefault();     
        
    emailjs.sendForm('service_b66ub37','template_jnmv824', e.target,'lect10XQoauzn5zGA' )
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  
    e.target.reset()
  
    }

    
    return (
      // sm:w-1/2  flex flex-col md:ml-auto w-full  mt-8 md:mt-0 
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    //  className="hero mb-32"
     >
        <div className=" dark:shadow-gray-700 shadow-md pb-2 rounded-lg bg-zinc-50 dark:bg-gray-800 ">
       
          <div className='text-center mb-14'>
    
            <h1 className='text-4xl text-primary '>Contact Me</h1>
          </div>
          <div>
           
            <form onSubmit={sendEmail}  className='grid grid-cols-1 justify-items-center gap-5'>
            
            <input
              type='text'
              placeholder='Name'
              className='input w-full max-w-md bg-white'
              name="name"
            />
            <input
              type='text'
              placeholder='Email'
              className='input w-full max-w-md bg-white'
              name='email'
            />
            <input
              type='text'
              placeholder='subject'
              className='input w-full max-w-md bg-white'
              name='subject'
            />
            <textarea
              className='textarea w-full max-w-md bg-white'
              placeholder='Your message'
              rows={6}
              name='message'
            ></textarea>                

            <input className='w-full max-w-md btn-secondary py-5 rounded' type="submit" value='Submit' />


            </form>
           
          </div>
          
        </div>
    </motion.div>

    );
 };

export default Input;