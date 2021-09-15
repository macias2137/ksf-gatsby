import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceTab = ({ img, title, text, href, buttonText }) => {
  return (
    <div className="column is-4 service-tab is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
      <p className="title service-tab__title">{title}</p>
      <FontAwesomeIcon icon={img} size="3x" className="mb-5" color="white" />
      <p className="service-tab__text is-flex is-justify-content-center is-align-items-flex-start">
        {text}
      </p>
      <a
        className="button service-tab__button mb-4 is-primary"
        href={`/${href}`}
      >
        Więcej
      </a>
    </div>
  );
};

export default ServiceTab;
