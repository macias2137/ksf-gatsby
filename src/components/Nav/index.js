import React, { useState, useEffect } from "react";
import { NavData as data } from "./nav-data";

const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  let prevScrollPos = window.pageYOffset;

  useEffect(() => {
    const controlNavbar = () => {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos && currentScrollPos < 400) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={
        showNavbar
          ? "navbar py-4 nav nav--initial"
          : "navbar py-0 nav nav--hidden"
      }
    >
      <div className="container">
        <div className="navbar-brand">
          <a
            href=""
            className={
              showNavbar ? "navbar-item nav-item--white" : "navbar-item"
            }
          >
            KSF
          </a>
          <a
            className="navbar-burger"
            role="button"
            aria-label="menu"
            aria-expanded="false"
            href="#home"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            {data.map((tab) => (
              <a
                className={
                  showNavbar ? "navbar-item nav-item--white" : "navbar-item"
                }
                href={`#${tab.tabName.replace(/\s/g, "-").toLowerCase()}`}
              >
                {tab.tabName}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
