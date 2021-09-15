import React from "react";
import "./services.sass";
import ServiceTab from "./components/ServiceTab";
import ServicesData from "./services-data";

const Services = () => {
  return (
    <div
      id="services"
      className="section services is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
    >
      <div className="title is-1 services__title">Our Services</div>
      <div className="container">
        <div className="columns is-multiline is-centered is-marginless">
          {ServicesData.map((item) => (
            <ServiceTab title={item.title} img={item.img} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
