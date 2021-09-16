import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterIcon = ({ link, icon }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        icon={icon}
        className="footer__icon mx-3"
        color="#14213d"
        size="2x"
      />
    </a>
  );
};

export default FooterIcon;
