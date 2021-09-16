import React from "react";
import "./services.sass";
import ServiceTab from "./components/ServiceTab";
import ServicesData from "./services-data";
import GenerateID from "../../id-generator";

const Services = () => {
  return (
    <div id="services" className="section services">
      <div className="title is-1 services__title">Our Services</div>
      <div className="container">
        <div className="columns is-multiline is-centered is-marginless">
          {ServicesData.map((tab) => (
            <ServiceTab
              key={GenerateID()}
              title={tab.title}
              img={tab.img}
              text={tab.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
