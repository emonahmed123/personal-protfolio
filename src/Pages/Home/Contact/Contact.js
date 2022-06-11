import React from 'react';
import Input from './Input/Input';
import Map from './Map/Map';
// px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap gap-4
const Contact = () => {
    return (
        <div
         className='grid grid-cols-1 
         lg:grid-cols-2 gap-4 
         px-10 my-44 mb-52' id='contact' 
         
         >
            <Map></Map>
           <Input></Input>
        </div>
    );
};

export default Contact;