import React from "react";
import "./Services.css";

const ServiceCard = ({ service }) => {
  const { title, description, icon } = service;
  return (
    <div>
      <div className="service-card mx-auto text-accent hover:text-white px-8  ">
        <div className="text-left ">
          <p className="text-5xl  text-primary ">{icon}</p>
          <h2 className="font-bold text-black text-xl lg:text-2xl my-4">{title}</h2>
          <p className="text-sm lg:text-black">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;