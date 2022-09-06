import React from 'react';
import emailjs from 'emailjs-com';
import contactdark from "../../../../Images/map/contactdark.png"
// import { motion } from "framer-motion"
import './input.css'
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
      //<motion.div
     // initial={{ opacity: 0, y: 50 }}
     // whileInView={{ opacity: 1, y: 0 }}
     // transition={{ duration: 1, ease: 'easeInOut' }}
    //  className="hero mb-32"
     //>
         <section className='Contact' id='contact'>
        <div className='container top' >
          <div className='heading text-center font-bold'>
            <h2 className='text-3xl'>CONTACT</h2>
            <h1  >Contact <span className=' text-neutral'>With Me</span> </h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                   <img src={contactdark } alt='' /> 
                </div>
                <div className='details'>
                    
                  <div className='button f_flex'>
                    <button className='btn_shadow'>
                      <i className='fab fa-facebook-f'></i>
                    </button>
                    <button className='btn_shadow'>
                      <i className='fab fa-instagram'></i>
                    </button>
                    <button className='btn_shadow'>
                      <i className='fab fa-twitter'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form onSubmit={sendEmail}>
             
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
              required
            />
            <input
              type='text'
              placeholder='subject'
              className='input w-full max-w-md bg-white'
              name='subject'
            />
            <textarea
              className='textarea w-full max-w-md mt-2 bg-white'
              placeholder='Your message'
              rows={6}
              name='message'
            ></textarea>                

            <input className='w-full max-w-md  btn_shadow rounded text-'  type="submit" value='Submit' />

              </form>
            </div>
          </div>
        </div>
      </section>
    
      //</motion.div> 

    );
 };

export default Input;