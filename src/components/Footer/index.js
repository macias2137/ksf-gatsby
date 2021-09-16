import React from "react";
import FooterIcon from "./components/FooterIcon";
import { FooterData as data } from "./footer-data";

const Footer = () => {
  const { footerLeftPane, footerRightPane } = data;
  return (
    <footer id="footer" className="footer py-5 px-5">
      <div className="container footer__main">
        <div className="footer__left">
          {footerLeftPane.map((line, i) => (
            <p key={i}>{line.text}</p>
          ))}
        </div>
        <div className="footer__right">
          {footerRightPane.map((item, i) => (
            <FooterIcon key={i} link={item.link} icon={item.icon} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
