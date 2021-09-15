import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer id="footer" className="footer py-4 px-5">
      <div className="container footer__main is-flex is-justify-content-space-between">
        <div className="footer__left">
          <p className="is-size-6">Krzyszti Software Playhouse</p>
          <p className="is-size-6">Krzysztof Szyda</p>
          <p className="is-size-6">600 367 277 / krzysztof@ksf.pl</p>
        </div>
        <div className="footer__right is-flex is-justify-content-center is-align-items-center">
          <a
            href="https://www.facebook.com/krzysztof.szyda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="footer__icon mx-3"
              color="#14213d"
              size="2x"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/krzysztof-szyda-974b24a4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="footer__icon mx-3"
              color="#14213d"
              size="2x"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
