import React from 'react';
import Input from './Input/Input';
import Map from './Map/Map';

const Contact = () => {
    return (
        <div className='px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap gap-4'>
            <Map></Map>
           <Input></Input>
        </div>
    );
};

export default Contact;