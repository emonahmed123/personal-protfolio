import React from "react";
import ServiceCard from "./ServiceCard";
// import { motion } from 'framer-motion';
const Services = () => {
  const serviceIProvide = [
    {
      id: 1,
      title: "Mern Development",
      description:
        "I'm a MERN Developer.I can build your full stack website with MongoDB, ExpressJS, ReactJS, NodeJS. I can be your Mern Developer",
      icon: (
        <>
          <i className="fa-solid fa-layer-group"></i>
        </>
      ),
    },
    {
      id: 2,
      title: "Frontend Development",
      description:
        "I'm A Frontend specialist. I have created many Website With Fancy Frontend. I can be your frontend Engineer.",
      icon: (
        <>
          <i className="fa-solid fa-code"></i>
        </>
      ),
    },
    {
      id: 3,
      title: "Backend Development",
      description:
        "I'm A Backend Developer. I have created many projects Server Side Api Endpoint. I can be your Backend Developer.",
      icon: (
        <>
          <i className="fa-solid fa-server"></i>
        </>
      ),
    },
    {
      id: 4,
      title: "React Development",
      description:
        "I'm A React Developer.I have created many single page application using React.JS. I can be your React Developer.",
      icon: (
        <>
          <i className="fa-brands fa-react"></i>
        </>
      ),
    },
    {
      id: 5,
      title: "Javascript Development",
      description:
        "I'm a Javascript Developer. I have created many website using Javascript. I can be your Javascript Developer.",
      icon: (
        <>
          <i className="fa-brands fa-js-square"></i>
        </>
      ),
    },
  ];

  return (

//     <motion.div
       
//     initial={{ opacity: 0, y: 50 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 1, ease: 'easeInOut' }}
//     // className="mt-28"
//     id=""
// >
    <div id="services" className="max-w-7xl mx-auto mt-32 ">
      <div>
        <p className="text-3xl text-black font-bold uppercase text-center">Ser<span className="text-neutral ">vices</span></p>
        <p className=" font-bold  text-black  text-5xl mb-10 pt-5 text-center">
          What  I  Do{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-2">
        {serviceIProvide.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
      //  </motion.div>   
  );
};

export default Services;