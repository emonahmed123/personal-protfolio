import React from 'react';
import { animateScroll as scroll,} from 'react-scroll';
const Postion = () => {
    return (
        <div className='relative'>
             <div class="fixed bottom-10 left-0 right-0">
    <p  onClick={()=>{scroll.scrollToTop()}} className='text-right cursor-pointer' >Top</p>
  </div>

        </div>
    );
};

export default Postion;