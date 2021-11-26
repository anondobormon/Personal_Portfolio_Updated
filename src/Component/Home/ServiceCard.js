import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div>
      <div className="main">
        <div className="service">
          <div className="service-logo flex justify-center items-center">
            {icon}
          </div>
          <h4 className="font-bold text-2xl">{title}</h4>
          <p className="mt-10">{description}</p>
        </div>
        {/* <div className="shadowOne"></div>
        <div className="shadowTwo"></div> */}
      </div>
    </div>
  );
};

export default ServiceCard;
