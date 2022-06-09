import React from 'react';
import bg from '../../../Images/portfoilo/my-bg2.png'
const Protfoilo = () => {
    return ( 
       
    <div>
           <div class="hero h-full lg:h-[60vh] shadow-2xl  mt-16 z-0 ">
  <div class="hero-content flex-col lg:flex-row">
  <div >
    
      <h1 class="text-5xl font-bold">Hello,  I am Emon Ahmed  </h1>
      <h2 class="py-6 text-3xl ">Junior Webdeveloper </h2>
      <a href='https://drive.google.com/file/d/1W_JL8-A1s-RQlk2zosQPXD3Nny-qVudD/view?usp=sharing'  target="_blank" class="btn btn-primary"> Download resume</a>
    </div>  
         <div className='h-[60vh] shrink-0'>
         
         <img src={bg} class="h-full" alt='' />

         </div>
   
  </div>
</div>



    </div>


        
    );
};

export default Protfoilo;