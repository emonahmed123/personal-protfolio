import React from "react";
import "./Services.css";

const ServiceCard = ({ service }) => {
  const { title, description, icon } = service;
  return (
    <div>
      <div className="service-card mx-auto  px-8  ">
        <div className="text-left ">
          <p className="text-5xl  text-accent ">{icon}</p>
          <h2 className="font-bold  text-white text-xl lg:text-2xl my-4">{title}</h2>
          <p className="text-sm text-white">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;