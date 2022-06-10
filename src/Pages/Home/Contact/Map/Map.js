import React from 'react';
import contactdark from "../../../../Images/map/contactdark.png"
const Map = () => {
    return (
        <div className={`rounded-lg w-full h-80 sm:w-1/2 sm:h-auto flex items-end pt-10 justify-end  shadow-md bg-contact bg-center bg-no-repeat bg-cover gap-2 p-2 dark:bg-contactdark dark:shadow-gray-700`}>
            <img src={contactdark} alt="" />
        </div>
    );
};

export default Map;