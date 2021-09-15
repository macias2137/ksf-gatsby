import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

const ArrowUp = () => {
  return (
    <a className="arrow-up is-hidden-touch" href="#home">
      <FontAwesomeIcon icon={faArrowCircleUp} color="#e5e5e5" size="3x" />
    </a>
  );
};

export default ArrowUp;
